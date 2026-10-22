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

async function testTab(tabName) {
  console.log(`\nTesting ${tabName}...`);
  // 1. Live pointer click
  await cdpEval(LIVE_TARGET, `
    (() => {
      const b = document.querySelector('button[aria-label="${tabName}"]');
      if (b) {
        b.dispatchEvent(new PointerEvent('pointerdown', { bubbles: true, cancelable: true }));
        b.dispatchEvent(new MouseEvent('mousedown', { bubbles: true, cancelable: true }));
        b.dispatchEvent(new PointerEvent('pointerup', { bubbles: true, cancelable: true }));
        b.dispatchEvent(new MouseEvent('mouseup', { bubbles: true, cancelable: true }));
        b.click();
      }
    })()
  `);
  await new Promise(r => setTimeout(r, 600));

  await activateTarget(LIVE_TARGET);
  const liveScRaw = execSync(`npx rea capture-web-screenshot http://127.0.0.1:9223 ${LIVE_TARGET} --format json`, { encoding: 'utf8' });
  const liveSc = JSON.parse(liveScRaw.replace(/^\uFEFF/, ''));
  fs.writeFileSync('analysis/test_tab_live.json', JSON.stringify(liveSc.normalized_result.artifact), 'utf8');

  // 2. Recon scenario
  const scReq = {
    browser: { mode: 'connect', cdp_endpoint: 'http://127.0.0.1:9223', target_id: RECON_TARGET },
    environment: { viewport: { width: 1440, height: 765, device_scale_factor: 1 }, color_scheme: 'dark' },
    start_url: { url: 'http://127.0.0.1:5173/' },
    actions: [
      { step_id: 'click_tab', action: 'click', locator: { kind: 'css', selector: `button[aria-label="${tabName}"]` } },
      { step_id: 'settle', action: 'wait_for_timeout', duration_ms: 400 }
    ],
    capture: { at_end: ['screenshot'] }
  };
  fs.writeFileSync('analysis/test_tab_sc.json', JSON.stringify(scReq), 'utf8');
  await activateTarget(RECON_TARGET);
  const reconScRaw = execSync(`npx rea capture-browser-scenario analysis/test_tab_sc.json --format json`, { encoding: 'utf8' });
  const reconSc = JSON.parse(reconScRaw.replace(/^\uFEFF/, ''));
  const reconArtifact = reconSc.normalized_result.steps[reconSc.normalized_result.steps.length - 1].artifacts.screenshot.value;
  fs.writeFileSync('analysis/test_tab_recon.json', JSON.stringify(reconArtifact), 'utf8');

  // 3. Diff
  const diffRaw = execSync(`npx rea compare-web-screenshots analysis/test_tab_live.json analysis/test_tab_recon.json --channel-threshold 5 --format json`, { encoding: 'utf8' });
  const diff = JSON.parse(diffRaw.replace(/^\uFEFF/, ''));
  const chg = diff.normalized_result.changed_pixels;
  const tot = diff.normalized_result.compared_pixels;
  const ratio = (diff.normalized_result.changed_ratio * 100).toFixed(2) + '%';
  console.log(`${tabName} diff: ${chg} / ${tot} (${ratio})`);
}

async function main() {
  await testTab('Channels');
  await testTab('Communities');
  await testTab('Status');
}

main().catch(console.error);
