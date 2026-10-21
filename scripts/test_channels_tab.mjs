import WebSocket from 'ws';
import fs from 'fs';

async function testChannels() {
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

  // Find the exact button
  const info = await send('Runtime.evaluate', {
    expression: `(() => {
      const btns = Array.from(document.querySelectorAll('button')).map(b => ({
        ariaLabel: b.getAttribute('aria-label'),
        dataNavbarItem: b.getAttribute('data-navbar-item'),
        dataNavbarIndex: b.getAttribute('data-navbar-item-index'),
        text: b.innerText
      }));
      return btns.filter(b => b.ariaLabel);
    })()`,
    returnByValue: true
  });
  console.log('Available buttons:', info.result.value);

  // Click Channels
  const click = await send('Runtime.evaluate', {
    expression: `(() => {
      const btn = document.querySelector('button[aria-label="Channels"]');
      if (btn) {
        btn.click();
        return true;
      }
      return false;
    })()`,
    returnByValue: true
  });
  console.log('Clicked Channels:', click.result.value);

  await new Promise(r => setTimeout(r, 1500));

  const after = await send('Runtime.evaluate', {
    expression: `(() => {
      const header = document.querySelector('header');
      const testids = Array.from(document.querySelectorAll('[data-testid]')).map(el => el.getAttribute('data-testid'));
      return {
        headerText: header?.innerText,
        testids: testids.slice(0, 30)
      };
    })()`,
    returnByValue: true
  });
  console.log('After clicking Channels:', after.result.value);

  ws.close();
}

testChannels().catch(console.error);
