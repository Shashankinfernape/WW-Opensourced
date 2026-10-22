import { execSync } from 'child_process';
import fs from 'fs';

const LIVE_TARGET = '33AE831CE803E57482AFAF475003C698';
const RECON_TARGET = '6C1EB6BEA99DB77BBB6E025B42EC3834';

async function cdpEval(targetId, expression) {
  return new Promise((resolve, reject) => {
    const ws = new WebSocket(`ws://127.0.0.1:9223/devtools/page/${targetId}`);
    ws.onopen = () => {
      ws.send(JSON.stringify({
        id: 1,
        method: 'Runtime.evaluate',
        params: { expression, returnByValue: true }
      }));
    };
    ws.onmessage = (event) => {
      const res = JSON.parse(event.data);
      if (res.id === 1) {
        ws.close();
        resolve(res.result?.result?.value);
      }
    };
    ws.onerror = reject;
  });
}

async function activateTarget(targetId) {
  try {
    await fetch(`http://127.0.0.1:9223/json/activate/${targetId}`);
  } catch (e) {}
}

async function run() {
  console.log('1. Clicking conversation header on live to open Contact Info drawer...');
  await cdpEval(LIVE_TARGET, `
    (() => {
      const hdr = document.querySelector('header[data-testid="conversation-header"]') || document.querySelector('#main header');
      if (hdr) hdr.click();
    })()
  `);
  await new Promise(r => setTimeout(r, 600));

  await activateTarget(LIVE_TARGET);
  const liveScRaw = execSync(`npx rea capture-web-screenshot http://127.0.0.1:9223 ${LIVE_TARGET} --format json`, { encoding: 'utf8' });
  const liveSc = JSON.parse(liveScRaw.replace(/^\uFEFF/, ''));
  fs.writeFileSync('analysis/test_ci_live_art.json', JSON.stringify(liveSc.normalized_result.artifact), 'utf8');

  console.log('2. Running Contact Info scenario on Recon...');
  const scReq = {
    browser: { mode: 'connect', cdp_endpoint: 'http://127.0.0.1:9223', target_id: RECON_TARGET },
    environment: { viewport: { width: 1440, height: 765, device_scale_factor: 1 }, color_scheme: 'dark' },
    start_url: { url: 'http://127.0.0.1:5173/' },
    actions: [
      { step_id: 'click_chat', action: 'click', locator: { kind: 'css', selector: '[data-testid="list-item-0"]' } },
      { step_id: 'wait_open', action: 'wait_for_timeout', duration_ms: 300 },
      { step_id: 'click_hdr', action: 'click', locator: { kind: 'css', selector: '[data-testid="conversation-header"]' } },
      { step_id: 'settle', action: 'wait_for_timeout', duration_ms: 400 }
    ],
    capture: { at_end: ['screenshot'] }
  };
  fs.writeFileSync('analysis/test_ci_sc_req.json', JSON.stringify(scReq), 'utf8');
  await activateTarget(RECON_TARGET);
  const reconScRaw = execSync(`npx rea capture-browser-scenario analysis/test_ci_sc_req.json --format json`, { encoding: 'utf8' });
  const reconSc = JSON.parse(reconScRaw.replace(/^\uFEFF/, ''));
  const reconArtifact = reconSc.normalized_result.steps[reconSc.normalized_result.steps.length - 1].artifacts.screenshot.value;
  fs.writeFileSync('analysis/test_ci_recon_art.json', JSON.stringify(reconArtifact), 'utf8');

  console.log('3. Comparing Contact Info drawer with REA...');
  const diffRaw = execSync(`npx rea compare-web-screenshots analysis/test_ci_live_art.json analysis/test_ci_recon_art.json --channel-threshold 5 --format json`, { encoding: 'utf8' });
  const diff = JSON.parse(diffRaw.replace(/^\uFEFF/, ''));
  console.log('Contact info Diff ID:', diff.evidence_id);
  console.log('Changed pixels:', diff.normalized_result.changed_pixels, '/', diff.normalized_result.compared_pixels);
  console.log('Changed ratio:', (diff.normalized_result.changed_ratio * 100).toFixed(2) + '%');
}

run().catch(console.error);
