import WebSocket from 'ws';

async function test() {
  const res = await fetch('http://127.0.0.1:9223/json');
  const targets = await res.json();
  const wa = targets.find(t => t.url.includes('web.whatsapp.com') && t.type === 'page');
  const ws = new WebSocket(wa.webSocketDebuggerUrl);
  await new Promise(r => ws.on('open', r));
  let idCounter = 1;
  function send(method, params = {}) {
    return new Promise(resolve => {
      const id = idCounter++;
      const handler = (msg) => {
        const d = JSON.parse(msg);
        if (d.id === id) { ws.off('message', handler); resolve(d.result); }
      };
      ws.on('message', handler);
      ws.send(JSON.stringify({ id, method, params }));
    });
  }

  // 1. Inspect at 600 wide
  await send('Emulation.setDeviceMetricsOverride', { width: 600, height: 737, deviceScaleFactor: 1, mobile: false });
  await new Promise(r => setTimeout(r, 600));

  const dom600 = await send('Runtime.evaluate', {
    expression: `(() => {
      const side = document.querySelector('#side');
      const column = side ? side.parentElement : null;
      const row = column ? column.parentElement : null;
      const cols = Array.from(row ? row.children : []).map(c => ({
        tag: c.tagName,
        id: c.id,
        className: c.className,
        rect: { x: c.getBoundingClientRect().x, y: c.getBoundingClientRect().y, width: c.getBoundingClientRect().width, height: c.getBoundingClientRect().height },
        styleDisplay: window.getComputedStyle(c).display,
        styleWidth: window.getComputedStyle(c).width,
        styleFlex: window.getComputedStyle(c).flex
      }));
      return { rowClass: row?.className, cols };
    })()`,
    returnByValue: true
  });
  console.log('App children at 600:', JSON.stringify(dom600.result.value, null, 2));

  // 2. Inspect at 1440 wide
  await send('Emulation.setDeviceMetricsOverride', { width: 1440, height: 737, deviceScaleFactor: 1, mobile: false });
  await new Promise(r => setTimeout(r, 600));

  const dom1440 = await send('Runtime.evaluate', {
    expression: `(() => {
      const side = document.querySelector('#side');
      const column = side ? side.parentElement : null;
      const row = column ? column.parentElement : null;
      const cols = Array.from(row ? row.children : []).map(c => ({
        tag: c.tagName,
        id: c.id,
        className: c.className,
        rect: { x: c.getBoundingClientRect().x, y: c.getBoundingClientRect().y, width: c.getBoundingClientRect().width, height: c.getBoundingClientRect().height },
        styleDisplay: window.getComputedStyle(c).display,
        styleWidth: window.getComputedStyle(c).width,
        styleFlex: window.getComputedStyle(c).flex
      }));
      return { rowClass: row?.className, cols };
    })()`,
    returnByValue: true
  });
  console.log('App children at 1440:', JSON.stringify(dom1440.result.value, null, 2));

  // Reset
  await send('Emulation.setDeviceMetricsOverride', { width: 1034, height: 737, deviceScaleFactor: 1, mobile: false });
  ws.close();
}

test().catch(console.error);
