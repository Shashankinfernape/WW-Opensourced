import WebSocket from 'ws';
import fs from 'fs';

async function compareFullScreen() {
  const res = await fetch('http://127.0.0.1:9223/json');
  const targets = await res.json();
  const liveTarget = targets.find(t => t.url.includes('web.whatsapp.com') && !t.url.includes('sw.js') && t.type === 'page');
  const reconTarget = targets.find(t => t.url.includes('127.0.0.1:5173') && t.type === 'page');

  async function getInfoAndShot(target, outPath) {
    const ws = new WebSocket(target.webSocketDebuggerUrl);
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

    const info = await send('Runtime.evaluate', {
      expression: `(() => {
        const rail = document.querySelector('header[data-testid=\"chatlist-header\"]') || document.querySelector('#side_column');
        const intro = document.querySelector('[data-testid=\"intro-panel\"]');
        const card = document.querySelector('[data-testid=\"intro_panel_v2_title_card\"]');
        const tiles = document.querySelector('[data-testid=\"intro-panel-empty-state-action-tile-group\"]');
        return {
          window: { w: window.innerWidth, h: window.innerHeight },
          introRect: intro?.getBoundingClientRect(),
          cardRect: card?.getBoundingClientRect(),
          tilesRect: tiles?.getBoundingClientRect(),
          introBg: intro ? getComputedStyle(intro).backgroundColor : null
        };
      })()`,
      returnByValue: true
    });

    const shot = await send('Page.captureScreenshot', { format: 'png' });
    fs.writeFileSync(outPath, Buffer.from(shot.data, 'base64'));
    ws.close();
    return info.result.value;
  }

  const liveInfo = await getInfoAndShot(liveTarget, 'analysis/compare/live-fullscreen.png');
  const reconInfo = await getInfoAndShot(reconTarget, 'analysis/compare/recon-fullscreen.png');

  console.log('Live Info:', JSON.stringify(liveInfo, null, 2));
  console.log('Recon Info:', JSON.stringify(reconInfo, null, 2));
}

compareFullScreen().catch(console.error);
