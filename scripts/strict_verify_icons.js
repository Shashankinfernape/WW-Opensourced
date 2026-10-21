const fs = require('fs');

const icons = JSON.parse(fs.readFileSync('analysis/svg-icons.json', 'utf8'));

console.log('--- STARTING STRICT SVG-ICONS.JSON VERIFICATION ---');

let verifiedCount = 0;
let failedCount = 0;

for (const [name, iconDef] of Object.entries(icons)) {
  if (!iconDef.file || !iconDef.byteOffset) {
    // Check if it's one of the nav icons we cited
    if (name.startsWith('nav-')) {
      console.error(`FAIL: ${name} is missing 'file' or 'byteOffset' metadata.`);
      failedCount++;
    }
    continue;
  }

  const filePath = iconDef.file;
  if (!fs.existsSync(filePath)) {
    console.error(`FAIL: Cited file ${filePath} does not exist for icon ${name}.`);
    failedCount++;
    continue;
  }

  const content = fs.readFileSync(filePath, 'utf8');
  
  // Verify module header at cited byte offset
  const citedOffset = iconDef.byteOffset;
  const expectedModDecl = `__d("${iconDef.module}"`;
  const actualHeaderSlice = content.slice(citedOffset, citedOffset + expectedModDecl.length);
  
  if (actualHeaderSlice !== expectedModDecl) {
    console.error(`FAIL: Module header mismatch for ${name} at offset ${citedOffset}. Expected "${expectedModDecl}", found "${actualHeaderSlice}"`);
    failedCount++;
    continue;
  }

  // Find module boundary
  const nextMod = content.indexOf('\n__d(', citedOffset + 1);
  const modBody = content.slice(citedOffset, nextMod !== -1 ? nextMod : citedOffset + 5000);

  // Collect paths to check
  const pathsToCheck = [];
  if (iconDef.path) {
    pathsToCheck.push(iconDef.path);
  } else if (Array.isArray(iconDef.paths)) {
    pathsToCheck.push(...iconDef.paths);
  } else {
    console.error(`FAIL: ${name} has neither 'path' nor 'paths'.`);
    failedCount++;
    continue;
  }

  // Verify every path exists verbatim in the module text
  for (let i = 0; i < pathsToCheck.length; i++) {
    const p = pathsToCheck[i];
    if (!modBody.includes(p)) {
      console.error(`FAIL: Path [${i}] for icon "${name}" NOT found in module "${iconDef.module}" text!`);
      console.error(`Path snippet: "${p.slice(0, 60)}..."`);
      failedCount++;
    } else {
      console.log(`[PASS] ${name} (path ${i + 1}/${pathsToCheck.length}) matches module "${iconDef.module}" at ${filePath}:${citedOffset}`);
      verifiedCount++;
    }
  }
}

console.log('--- VERIFICATION SUMMARY ---');
console.log(`Passed path checks: ${verifiedCount}`);
console.log(`Failed path checks: ${failedCount}`);

if (failedCount > 0) {
  process.exit(1);
} else {
  console.log('ALL NAV ICONS STRICTLY VERIFIED AGAINST RECOVERED DISK ARTIFACTS.');
}
