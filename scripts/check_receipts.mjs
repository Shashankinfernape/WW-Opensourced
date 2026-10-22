import fs from 'node:fs';
import path from 'node:path';

const RECEIPTS_DIR = path.resolve('analysis/receipts');

const REQUIRED_FILES = [
  'trace.json',
  'module.json',
  'live.png',
  'live-evidence.json',
  'build.png',
  'build-evidence.json',
  'diff.json',
];

const MAX_CHANGED_RATIO = 0.15; // 15% maximum allowed pixel diff

function main() {
  console.log('====================================================');
  console.log(' REA RECEIPT AUDIT & ENFORCEMENT CHECK');
  console.log('====================================================\n');

  if (!fs.existsSync(RECEIPTS_DIR)) {
    console.error(`FAIL: Receipts directory not found at: ${RECEIPTS_DIR}`);
    console.error('Every component requires a receipt folder under analysis/receipts/<name>/');
    process.exit(1);
  }

  const entries = fs.readdirSync(RECEIPTS_DIR, { withFileTypes: true });
  const componentDirs = entries.filter((e) => e.isDirectory()).map((e) => e.name);

  if (componentDirs.length === 0) {
    console.error(`FAIL: No component receipt folders found in ${RECEIPTS_DIR}`);
    console.error('At least one component must be audited with complete receipts.');
    process.exit(1);
  }

  let totalComponents = componentDirs.length;
  let passedCount = 0;
  let failedCount = 0;

  for (const name of componentDirs) {
    const compDir = path.join(RECEIPTS_DIR, name);
    const errors = [];

    // Check required files
    for (const file of REQUIRED_FILES) {
      const filePath = path.join(compDir, file);
      if (!fs.existsSync(filePath)) {
        errors.push(`Missing required receipt file: ${file}`);
      } else {
        const stats = fs.statSync(filePath);
        if (stats.size === 0) {
          errors.push(`Empty receipt file (0 bytes): ${file}`);
        }
      }
    }

    // Parse and validate diff.json if present
    const diffPath = path.join(compDir, 'diff.json');
    let changedRatio = null;
    let comparedPixels = 0;
    let changedPixels = 0;

    if (fs.existsSync(diffPath) && fs.statSync(diffPath).size > 0) {
      try {
        const diffData = JSON.parse(fs.readFileSync(diffPath, 'utf8'));
        const norm = diffData.normalized_result || diffData;

        if (norm.compared_pixels !== undefined && norm.changed_pixels !== undefined) {
          comparedPixels = norm.compared_pixels;
          changedPixels = norm.changed_pixels;
          changedRatio = norm.changed_ratio !== undefined
            ? norm.changed_ratio
            : (norm.compared_pixels > 0 ? norm.changed_pixels / norm.compared_pixels : 0);
        } else if (norm.changed_ratio !== undefined) {
          changedRatio = norm.changed_ratio;
        } else {
          errors.push('diff.json missing compared_pixels / changed_pixels in normalized_result');
        }

        if (changedRatio !== null && changedRatio > MAX_CHANGED_RATIO) {
          errors.push(
            `Diff changed ratio ${(changedRatio * 100).toFixed(2)}% exceeds threshold of ${(MAX_CHANGED_RATIO * 100)}% (${changedPixels} of ${comparedPixels} pixels changed)`
          );
        }
      } catch (err) {
        errors.push(`diff.json is not valid JSON: ${err.message}`);
      }
    }

    if (errors.length === 0) {
      const accuracyPct = changedRatio !== null ? ((1 - changedRatio) * 100).toFixed(2) : 'N/A';
      const diffPct = changedRatio !== null ? (changedRatio * 100).toFixed(2) : 'N/A';
      console.log(`[PASS] ${name.padEnd(25)} | Diff: ${diffPct}% (${changedPixels}/${comparedPixels}px) | Accuracy: ${accuracyPct}%`);
      passedCount++;
    } else {
      console.error(`[FAIL] ${name}`);
      for (const err of errors) {
        console.error(`       - ${err}`);
      }
      failedCount++;
    }
  }

  console.log('\n----------------------------------------------------');
  console.log(`Total: ${totalComponents} | Passed: ${passedCount} | Failed: ${failedCount}`);
  console.log('----------------------------------------------------');

  if (failedCount > 0) {
    console.error('\nPre-commit gate: REJECTED. Fix failed components and refresh receipts before committing.');
    process.exit(1);
  }

  console.log('\nPre-commit gate: APPROVED. All receipts valid and within 15% threshold.\n');
  process.exit(0);
}

main();
