import WebSocket from 'ws';
import fs from 'fs';

async function saveArchivedDrawer() {
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

  // First ensure we are on Chats
  await send('Runtime.evaluate', {
    expression: `(() => {
      const btn = document.querySelector('button[aria-label="Chats"]');
      if (btn) btn.click();
    })()`,
    returnByValue: true
  });
  await new Promise(r => setTimeout(r, 1000));

  // Click Archived
  const clickedArchived = await send('Runtime.evaluate', {
    expression: `(() => {
      const btn = document.querySelector('button[aria-label*="Archived"]') ||
                  document.querySelector('[data-testid="chatlist-panel-archived-button"]');
      if (btn) {
        btn.click();
        return true;
      }
      return false;
    })()`,
    returnByValue: true
  });
  console.log('Clicked Archived:', clickedArchived.result.value);
  await new Promise(r => setTimeout(r, 1000));

  const res = await send('Runtime.evaluate', {
    expression: `(() => {
      const el = document.querySelector('[data-testid*="archived"]') ||
                 document.querySelector('[data-testid="drawer-left"]') ||
                 document.querySelector('.copyable-area');
      return el ? el.outerHTML : null;
    })()`,
    returnByValue: true
  });

  if (res.result.value) {
    fs.writeFileSync('analysis/live-archived-drawer.html', res.result.value, 'utf8');
    console.log('Saved live-archived-drawer.html, bytes:', res.result.value.length);
  }

  // Click back button on archived drawer to restore
  await send('Runtime.evaluate', {
    expression: `(() => {
      const backBtn = document.querySelector('button[aria-label="Back"]') || document.querySelector('[data-testid="btn-closer-drawer"]');
      if (backBtn) backBtn.click();
    })()`,
    returnByValue: true
  });

  ws.close();
}

saveArchivedDrawer().catch(console.error);
