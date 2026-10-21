import fs from 'fs';
import WebSocket from 'ws';

async function main() {
  const targets = await (await fetch('http://127.0.0.1:9223/json')).json();
  const recon = targets.find(t => t.url.includes('5173') && t.type === 'page');
  const live = targets.find(t => t.url.includes('web.whatsapp.com') && t.type === 'page');

  async function getIntroInfo(t, name) {
    const ws = new WebSocket(t.webSocketDebuggerUrl);
    await new Promise(r => ws.on('open', r));
    const res = await new Promise(resolve => {
      ws.on('message', m => {
        const d = JSON.parse(m);
        if (d.id === 1) resolve(d.result?.result?.value);
      });
      ws.send(JSON.stringify({
        id: 1,
        method: 'Runtime.evaluate',
        params: {
          expression: `(() => {
            const intro = document.querySelector('[data-testid="intro-panel"]') || document.querySelector('#main') || document.querySelector('.x10l6tqk');
            const title = document.querySelector('[data-testid="intro_panel_v2_title_card"]')?.innerText || document.querySelector('h1, h2')?.innerText;
            const bg = window.getComputedStyle(intro || document.body).backgroundColor;
            const r = intro ? intro.getBoundingClientRect() : null;
            return {
              tag: intro?.tagName,
              testid: intro?.getAttribute('data-testid'),
              className: intro?.className,
              rect: r ? { x: r.x, y: r.y, w: r.width, h: r.height } : null,
              bg,
              title: title?.split('\\n')[0]
            };
          })()`,
          returnByValue: true
        }
      }));
    });
    console.log(name, res);
    ws.close();
  }

  await getIntroInfo(live, 'LIVE INTRO:');
  await getIntroInfo(recon, 'RECON INTRO:');
}

main().catch(console.error);
