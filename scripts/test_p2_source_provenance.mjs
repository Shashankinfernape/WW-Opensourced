import fs from 'fs';
import { execSync } from 'child_process';

const staticEvidence = JSON.parse(fs.readFileSync('analysis/whatsapp-app-evidence.json', 'utf8'));
const sourceTree = JSON.parse(fs.readFileSync('analysis/reconstruction_source_tree.json', 'utf8'));

const req = {
  application: staticEvidence,
  reference: sourceTree
};

fs.writeFileSync('analysis/compare_source_req_p2.json', JSON.stringify(req));
try {
  console.log('Running rea compare-source-to-bundle for Panel 2...');
  const out = execSync('npx rea compare-source-to-bundle analysis/compare_source_req_p2.json --format json', {
    encoding: 'utf8',
    maxBuffer: 50 * 1024 * 1024
  });
  const parsed = JSON.parse(out);
  console.log('SUCCESS! Bundle Provenance Evidence ID:', parsed.evidence_id);
  console.log('Summary:', parsed.normalized_result?.summary);
  fs.writeFileSync('analysis/panel_2_source_provenance.json', out, 'utf8');
} catch (err) {
  console.error('compare-source-to-bundle error:', err.stdout?.slice(0, 500) || err.message);
  process.exit(1);
} finally {
  if (fs.existsSync('analysis/compare_source_req_p2.json')) {
    fs.unlinkSync('analysis/compare_source_req_p2.json');
  }
}
