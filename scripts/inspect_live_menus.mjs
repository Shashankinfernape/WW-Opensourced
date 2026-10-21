import WebSocket from 'ws';

async function main() {
  const targets = await (await fetch('http://127.0.0.1:9223/json')).json();
  const live = targets.find(t => t.url.includes('web.whatsapp.com') && t.type === 'page');
  const ws = new WebSocket(live.webSocketDebuggerUrl);
  await new Promise(r => ws.on('open', r));

  const send = (method, params = {}) => new Promise(resolve => {
    const id = Math.floor(Math.random() * 100000);
    const handler = (m) => {
      const d = JSON.parse(m);
      if (d.id === id) {
        ws.off('message', handler);
        resolve(d.result);
      }
    };
    ws.on('message', handler);
    ws.send(JSON.stringify({ id, method, params }));
  });

  await send('Page.bringToFront');

  // Click Menu button at (408, 32)
  console.log('Clicking Back button if open...');
  await send('Runtime.evaluate', {
    expression: `(() => {
      const backBtn = document.querySelector('button[aria-label="Back"]') || document.querySelector('span[data-icon="back"]')?.closest('button');
      if (backBtn) backBtn.click();
    })()`
  });
  await new Promise(r => setTimeout(r, 600));

  console.log('Focusing and clicking Menu button via CDP mouse events...');
  await send('Page.bringToFront');
  await send('Input.dispatchMouseEvent', { type: 'mouseMoved', x: 408, y: 32 });
  await send('Input.dispatchMouseEvent', { type: 'mousePressed', x: 408, y: 32, button: 'left', clickCount: 1 });
  await send('Input.dispatchMouseEvent', { type: 'mouseReleased', x: 408, y: 32, button: 'left', clickCount: 1 });

  await new Promise(r => setTimeout(r, 600));

  const items = await send('Runtime.evaluate', {
    expression: `(() => {
      const menu = document.querySelector('[role="menu"]');
      if (!menu) return { error: 'no menu' };
      const btns = Array.from(menu.querySelectorAll('*')).filter(el => el.innerText && el.innerText.length < 30).map(el => ({
        tag: el.tagName,
        text: el.innerText,
        role: el.getAttribute('role'),
        rect: { x: el.getBoundingClientRect().x, y: el.getBoundingClientRect().y, w: el.getBoundingClientRect().width, h: el.getBoundingClientRect().height }
      }));
      return btns;
    })()`,
    returnByValue: true
  });
  console.log('Menu DOM items:', JSON.stringify(items?.result?.value, null, 2));
  ws.close();
}
main();




