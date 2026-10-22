import { execSync } from 'child_process';
import fs from 'fs';
import path from 'path';

const LIVE_TARGET = '33AE831CE803E57482AFAF475003C698';
const RECON_TARGET = '6C1EB6BEA99DB77BBB6E025B42EC3834';

async function activate(targetId) {
  try {
    await fetch(`http://127.0.0.1:9223/json/activate/${targetId}`);
  } catch (e) {}
}

async function run() {
  console.log('=== Panel 1: Chatlist Inspection & Verification ===\n');
  const outDir = 'analysis/panel_1_chatlist';
  fs.mkdirSync(outDir, { recursive: true });

  // 1. Live WhatsApp Web Capture
  console.log('1. Capturing Live WhatsApp Web screenshot via REA...');
  await activate(LIVE_TARGET);
  const liveScRaw = execSync(`npx rea capture-web-screenshot http://127.0.0.1:9223 ${LIVE_TARGET} --format json`, { encoding: 'utf8' });
  const liveSc = JSON.parse(liveScRaw.replace(/^\uFEFF/, ''));
  const liveArtPath = path.join(outDir, 'live_artifact.json');
  fs.writeFileSync(liveArtPath, JSON.stringify(liveSc.normalized_result.artifact), 'utf8');
  console.log('   Live Screenshot Evidence ID:', liveSc.evidence_id);

  // 2. Live Page Inspection
  console.log('2. Inspecting Live WhatsApp Web page via REA (500ms observation)...');
  const liveInspRaw = execSync(`npx rea inspect-web-page http://127.0.0.1:9223 ${LIVE_TARGET} --format json`, { encoding: 'utf8' });
  const liveInsp = JSON.parse(liveInspRaw.replace(/^\uFEFF/, ''));
  const liveInspPath = path.join(outDir, 'live_inspect.json');
  fs.writeFileSync(liveInspPath, JSON.stringify(liveInsp), 'utf8');
  console.log('   Live Inspect Evidence ID:', liveInsp.evidence_id);

  // 3. Recon Target Capture
  console.log('3. Capturing Reconstruction screenshot via REA...');
  await activate(RECON_TARGET);
  const reconScRaw = execSync(`npx rea capture-web-screenshot http://127.0.0.1:9223 ${RECON_TARGET} --format json`, { encoding: 'utf8' });
  const reconSc = JSON.parse(reconScRaw.replace(/^\uFEFF/, ''));
  const reconArtPath = path.join(outDir, 'recon_artifact.json');
  fs.writeFileSync(reconArtPath, JSON.stringify(reconSc.normalized_result.artifact), 'utf8');
  console.log('   Recon Screenshot Evidence ID:', reconSc.evidence_id);

  // 4. Recon Page Inspection
  console.log('4. Inspecting Reconstruction page via REA (500ms observation)...');
  const reconInspRaw = execSync(`npx rea inspect-web-page http://127.0.0.1:9223 ${RECON_TARGET} --format json`, { encoding: 'utf8' });
  const reconInsp = JSON.parse(reconInspRaw.replace(/^\uFEFF/, ''));
  const reconInspPath = path.join(outDir, 'recon_inspect.json');
  fs.writeFileSync(reconInspPath, JSON.stringify(reconInsp), 'utf8');
  console.log('   Recon Inspect Evidence ID:', reconInsp.evidence_id);

  // 5. Compare Web Screenshots
  console.log('5. Comparing Live vs Recon Screenshots via REA...');
  const diffRaw = execSync(`npx rea compare-web-screenshots "${liveArtPath}" "${reconArtPath}" --channel-threshold 5 --format json`, { encoding: 'utf8' });
  const diff = JSON.parse(diffRaw.replace(/^\uFEFF/, ''));

  const diffEvId = diff.evidence_id;
  const compPixels = diff.normalized_result.compared_pixels;
  const chgPixels = diff.normalized_result.changed_pixels;
  const chgRatio = diff.normalized_result.changed_ratio;
  const accuracy = ((1 - chgRatio) * 100).toFixed(2) + '%';
  const status = chgRatio < 0.15 ? 'PASS' : 'FAIL';

  console.log('\n--- VERIFICATION RESULT ---');
  console.log('Diff Evidence ID:', diffEvId);
  console.log('Compared Pixels:', compPixels.toLocaleString());
  console.log('Changed Pixels:', chgPixels.toLocaleString());
  console.log('Changed Ratio:', (chgRatio * 100).toFixed(2) + '%');
  console.log('Accuracy Match:', accuracy);
  console.log('Status (< 15% threshold):', status);

  const report = {
    panel: 'chatlist',
    description: 'Default landing view: LeftNavRail (64px) + Chat list panel (432px) + Intro landing panel (944px)',
    live_screenshot_evidence_id: liveSc.evidence_id,
    live_inspect_evidence_id: liveInsp.evidence_id,
    recon_screenshot_evidence_id: reconSc.evidence_id,
    recon_inspect_evidence_id: reconInsp.evidence_id,
    diff_evidence_id: diffEvId,
    compared_pixels: compPixels,
    changed_pixels: chgPixels,
    changed_ratio: chgRatio,
    accuracy,
    status
  };

  fs.writeFileSync(path.join(outDir, 'panel_1_report.json'), JSON.stringify(report, null, 2), 'utf8');
}

run().catch(console.error);
