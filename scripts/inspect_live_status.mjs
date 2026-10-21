import WebSocket from 'ws';
import fs from 'fs';
import { execSync } from 'child_process';

async function inspectLiveStatus() {
  const targets = await (await fetch('http://127.0.0.1:9223/json')).json();
  const live = targets.find(t => t.url.includes('web.whatsapp.com') && t.type === 'page');

  const ws = new WebSocket(live.webSocketDebuggerUrl);
  await new Promise(r => ws.on('open', r));

  let id = 1;
  const send = (method, params = {}) => new Promise(res => {
    const cur = id++;
    const h = (m) => {
      const d = JSON.parse(m);
      if (d.id === cur) { ws.off('message', h); res(d.result); }
    };
    ws.on('message', h);
    ws.send(JSON.stringify({ id: cur, method, params }));
  });

  await send('Page.bringToFront');

  // Click Status button on nav rail: aria-label="Status" or data-tab="status"
  const clickResult = await send('Runtime.evaluate', {
    expression: `(() => {
      const btn = document.querySelector('button[aria-label="Status"]') || Array.from(document.querySelectorAll('button')).find(b => b.getAttribute('aria-label') === 'Status' || b.innerText.includes('Status'));
      if (btn) {
        btn.click();
        return true;
      }
      return false;
    })()`,
    returnByValue: true
  });
  console.log('Clicked live Status button:', clickResult.result.value);
  await new Promise(r => setTimeout(r, 800));

  // Extract side / status panel DOM
  const domResult = await send('Runtime.evaluate', {
    expression: `(() => {
      const side = document.querySelector('#side') || document.querySelector('#side_column') || document.querySelector('[data-testid*="status"]');
      const header = document.querySelector('header');
      return {
        sideHtml: side ? side.outerHTML.slice(0, 3000) : 'not found',
        testids: Array.from(document.querySelectorAll('[data-testid]')).map(el => el.getAttribute('data-testid')).filter(t => t.includes('status'))
      };
    })()`,
    returnByValue: true
  });

  console.log('Live Status DOM details:');
  console.log('TestIDs:', domResult.result.value.testids);
  fs.writeFileSync('analysis/live-status-dom.html', domResult.result.value.sideHtml);

  // Capture screenshot of live status
  ws.close();
  const raw = execSync(`rea capture-web-screenshot http://127.0.0.1:9223 ${live.id} --format json`);
  const artifact = JSON.parse(raw.toString('utf8').replace(/^\uFEFF/, '')).normalized_result.artifact;
  fs.writeFileSync('analysis/compare/live-status-artifact.json', JSON.stringify(artifact, null, 2));
  fs.writeFileSync('analysis/compare/live-status.png', Buffer.from(artifact.data_base64, 'base64'));
  console.log('Saved live status screenshot via rea.');
}

inspectLiveStatus().catch(console.error);
