import WebSocket from 'ws';
import fs from 'fs';

async function inspectBreakpoints() {
  const res = await fetch('http://127.0.0.1:9223/json');
  const targets = await res.json();
  const wa = targets.find(t => t.url.includes('web.whatsapp.com') && t.type === 'page');

  const ws = new WebSocket(wa.webSocketDebuggerUrl);
  await new Promise(r => ws.on('open', r));

  let idCounter = 1;
  function send(method, params = {}) {
    return new Promise((resolve) => {
      const id = idCounter++;
      const handler = (msg) => {
        const data = JSON.parse(msg);
        if (data.id === id) {
          ws.off('message', handler);
          resolve(data.result);
        }
      };
      ws.on('message', handler);
      ws.send(JSON.stringify({ id, method, params }));
    });
  }

  function getRect(el) {
    if (!el) return null;
    const r = el.getBoundingClientRect();
    return { x: r.x, y: r.y, width: r.width, height: r.height };
  }

  // 1. At 1440
  await send('Emulation.setDeviceMetricsOverride', { width: 1440, height: 737, deviceScaleFactor: 1, mobile: false });
  await new Promise(r => setTimeout(r, 600));

  const at1440 = await send('Runtime.evaluate', {
    expression: `(() => {
      const side = document.querySelector('#side');
      const main = document.querySelector('#main');
      const rail = document.querySelector('header[data-testid="chatlist-header"]');
      const getRect = (el) => el ? { x: el.getBoundingClientRect().x, y: el.getBoundingClientRect().y, width: el.getBoundingClientRect().width, height: el.getBoundingClientRect().height } : null;
      return {
        rail: getRect(rail),
        side: getRect(side),
        main: getRect(main)
      };
    })()`,
    returnByValue: true
  });
  console.log('--- At 1440 wide ---', at1440.result.value);

  // 2. At 600
  await send('Emulation.setDeviceMetricsOverride', { width: 600, height: 737, deviceScaleFactor: 1, mobile: false });
  await new Promise(r => setTimeout(r, 600));

  const at600 = await send('Runtime.evaluate', {
    expression: `(() => {
      const side = document.querySelector('#side');
      const main = document.querySelector('#main');
      const rail = document.querySelector('header[data-testid="chatlist-header"]');
      const getRect = (el) => el ? { x: el.getBoundingClientRect().x, y: el.getBoundingClientRect().y, width: el.getBoundingClientRect().width, height: el.getBoundingClientRect().height } : null;
      return {
        rail: getRect(rail),
        side: getRect(side),
        main: getRect(main)
      };
    })()`,
    returnByValue: true
  });
  console.log('--- At 600 wide ---', at600.result.value);

  // Reset
  await send('Emulation.setDeviceMetricsOverride', { width: 1034, height: 737, deviceScaleFactor: 1, mobile: false });
  ws.close();
}

inspectBreakpoints().catch(console.error);
