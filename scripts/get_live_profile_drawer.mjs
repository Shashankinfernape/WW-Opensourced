import WebSocket from 'ws';
import fs from 'fs';

async function getProfileDrawer() {
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

  // Click on li-profile
  const clicked = await send('Runtime.evaluate', {
    expression: `(() => {
      const item = document.querySelector('[data-testid="li-profile"]') ||
                   document.querySelector('[aria-label="View profile"]');
      if (item) {
        item.click();
        return true;
      }
      return false;
    })()`,
    returnByValue: true
  });
  console.log('Clicked li-profile:', clicked.result.value);

  await new Promise(r => setTimeout(r, 1000));

  const dom = await send('Runtime.evaluate', {
    expression: `(() => {
      const drawer = document.querySelector('[data-testid*="profile"]') ||
                     document.querySelector('.copyable-area');
      return drawer ? drawer.outerHTML : null;
    })()`,
    returnByValue: true
  });

  if (dom.result.value) {
    fs.writeFileSync('analysis/live-profile-drawer.html', dom.result.value, 'utf8');
    console.log('Saved live-profile-drawer.html, bytes:', dom.result.value.length);
  }

  // Click back button on profile drawer
  await send('Runtime.evaluate', {
    expression: `(() => {
      const btn = document.querySelector('button[aria-label="Back"]') ||
                  document.querySelector('[data-testid="btn-closer-drawer"]');
      if (btn) btn.click();
    })()`,
    returnByValue: true
  });

  ws.close();
}

getProfileDrawer().catch(console.error);
