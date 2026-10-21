import WebSocket from 'ws';
import fs from 'fs';

async function checkMenu() {
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

  // Click Menu
  const clickedMenu = await send('Runtime.evaluate', {
    expression: `(() => {
      const btn = document.querySelector('button[aria-label="Menu"]');
      if (btn) {
        btn.click();
        return true;
      }
      return false;
    })()`,
    returnByValue: true
  });
  console.log('Clicked Menu:', clickedMenu.result.value);
  await new Promise(r => setTimeout(r, 600));

  const items = await send('Runtime.evaluate', {
    expression: `(() => {
      const menu = document.querySelector('[role="menu"]');
      const text = menu ? menu.innerText : null;
      const html = menu ? menu.outerHTML : null;
      return { text, html };
    })()`,
    returnByValue: true
  });

  console.log('Menu text:', items.result.value.text);
  if (items.result.value.html) {
    fs.writeFileSync('analysis/live-chatlist-menu.html', items.result.value.html, 'utf8');
  }

  // Close menu by clicking body
  await send('Runtime.evaluate', {
    expression: `document.body.click()`,
    returnByValue: true
  });

  ws.close();
}

checkMenu().catch(console.error);
