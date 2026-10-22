import fs from 'fs';
import { execSync } from 'child_process';

const staticEvidence = JSON.parse(fs.readFileSync('analysis/whatsapp-app-evidence.json', 'utf8'));
const sourceTree = JSON.parse(fs.readFileSync('analysis/reconstruction_source_tree.json', 'utf8'));

const req = {
  application: staticEvidence,
  reference: sourceTree
};

fs.writeFileSync('analysis/compare_source_req.json', JSON.stringify(req));
try {
  console.log('Running rea compare-source-to-bundle...');
  const out = execSync('npx rea compare-source-to-bundle analysis/compare_source_req.json --format json', {
    encoding: 'utf8',
    maxBuffer: 50 * 1024 * 1024
  });
  const parsed = JSON.parse(out);
  console.log('SUCCESS! Provenance Evidence ID:', parsed.evidence_id);
  fs.writeFileSync('analysis/source_provenance_evidence.json', out, 'utf8');
} catch (err) {
  console.error('compare-source-to-bundle error:', err.stdout?.slice(0, 500) || err.message);
} finally {
  if (fs.existsSync('analysis/compare_source_req.json')) fs.unlinkSync('analysis/compare_source_req.json');
}
