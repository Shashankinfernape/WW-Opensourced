import { execSync } from 'child_process';
import fs from 'fs';

const LIVE_TARGET = '33AE831CE803E57482AFAF475003C698';
const RECON_TARGET = '6C1EB6BEA99DB77BBB6E025B42EC3834';

async function activateTarget(targetId) {
  try {
    await fetch(`http://127.0.0.1:9223/json/activate/${targetId}`);
  } catch (e) {}
}

async function run() {
  console.log('1. Live active chat screenshot...');
  await activateTarget(LIVE_TARGET);
  const liveScRaw = execSync(`npx rea capture-web-screenshot http://127.0.0.1:9223 ${LIVE_TARGET} --format json`, { encoding: 'utf8' });
  const liveSc = JSON.parse(liveScRaw.replace(/^\uFEFF/, ''));
  fs.writeFileSync('analysis/test_chat_live_art.json', JSON.stringify(liveSc.normalized_result.artifact), 'utf8');

  console.log('2. Recon active chat scenario...');
  const scReq = {
    browser: { mode: 'connect', cdp_endpoint: 'http://127.0.0.1:9223', target_id: RECON_TARGET },
    environment: { viewport: { width: 1440, height: 765, device_scale_factor: 1 }, color_scheme: 'dark' },
    start_url: { url: 'http://127.0.0.1:5173/' },
    actions: [
      { step_id: 'click_chat', action: 'click', locator: { kind: 'css', selector: '[data-testid="list-item-0"]' } },
      { step_id: 'settle', action: 'wait_for_timeout', duration_ms: 500 }
    ],
    capture: { at_end: ['screenshot'] }
  };
  fs.writeFileSync('analysis/test_chat_sc_req.json', JSON.stringify(scReq), 'utf8');
  await activateTarget(RECON_TARGET);
  const reconScRaw = execSync(`npx rea capture-browser-scenario analysis/test_chat_sc_req.json --format json`, { encoding: 'utf8' });
  const reconSc = JSON.parse(reconScRaw.replace(/^\uFEFF/, ''));
  const reconArtifact = reconSc.normalized_result.steps[reconSc.normalized_result.steps.length - 1].artifacts.screenshot.value;
  fs.writeFileSync('analysis/test_chat_recon_art.json', JSON.stringify(reconArtifact), 'utf8');

  console.log('3. Comparing Active Chat with REA...');
  const diffRaw = execSync(`npx rea compare-web-screenshots analysis/test_chat_live_art.json analysis/test_chat_recon_art.json --channel-threshold 5 --format json`, { encoding: 'utf8' });
  const diff = JSON.parse(diffRaw.replace(/^\uFEFF/, ''));
  console.log('Active chat Diff ID:', diff.evidence_id);
  console.log('Changed pixels:', diff.normalized_result.changed_pixels, '/', diff.normalized_result.compared_pixels);
  console.log('Changed ratio:', (diff.normalized_result.changed_ratio * 100).toFixed(2) + '%');
}

run().catch(console.error);
