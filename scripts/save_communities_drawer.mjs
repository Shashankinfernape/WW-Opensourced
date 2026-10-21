import WebSocket from 'ws';
import fs from 'fs';

async function saveCommunitiesDrawer() {
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

  await send('Runtime.evaluate', {
    expression: `(() => {
      const btn = document.querySelector('button[aria-label="Communities"]');
      if (btn) btn.click();
    })()`,
    returnByValue: true
  });

  await new Promise(r => setTimeout(r, 1200));

  const res = await send('Runtime.evaluate', {
    expression: `(() => {
      const el = document.querySelector('[data-testid*="communit"]') ||
                 document.querySelector('[data-testid="drawer-left"]') ||
                 document.querySelector('#side');
      return el ? el.outerHTML : null;
    })()`,
    returnByValue: true
  });

  if (res.result.value) {
    fs.writeFileSync('analysis/live-communities-drawer.html', res.result.value, 'utf8');
    console.log('Saved live-communities-drawer.html, bytes:', res.result.value.length);
  }

  ws.close();
}

saveCommunitiesDrawer().catch(console.error);
