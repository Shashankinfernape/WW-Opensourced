const LIVE_TARGET = '33AE831CE803E57482AFAF475003C698';

async function testClickChatRow() {
  const ws = new WebSocket(`ws://127.0.0.1:9223/devtools/page/${LIVE_TARGET}`);
  await new Promise(r => ws.onopen = r);

  const send = (method, params) => new Promise((resolve) => {
    const id = Math.floor(Math.random() * 100000);
    const handler = (e) => {
      const res = JSON.parse(e.data);
      if (res.id === id) {
        ws.removeEventListener('message', handler);
        resolve(res.result);
      }
    };
    ws.addEventListener('message', handler);
    ws.send(JSON.stringify({ id, method, params }));
  });

  // Let's get the exact coordinates of the first chat row
  const rect = await send('Runtime.evaluate', {
    expression: `
      (() => {
        const row = document.querySelector('#pane-side [data-testid="cell-frame-container"]');
        if (!row) return null;
        const r = row.getBoundingClientRect();
        return { x: Math.round(r.left + r.width / 2), y: Math.round(r.top + r.height / 2) };
      })()
    `,
    returnByValue: true
  });

  console.log('Cell coords:', rect.result?.value);
  if (!rect.result?.value) return;

  const { x, y } = rect.result.value;

  // Let's move mouse, press, release via CDP Input domain
  await send('Input.dispatchMouseEvent', { type: 'mouseMoved', x, y });
  await new Promise(r => setTimeout(r, 100));
  await send('Input.dispatchMouseEvent', { type: 'mousePressed', x, y, button: 'left', clickCount: 1 });
  await new Promise(r => setTimeout(r, 100));
  await send('Input.dispatchMouseEvent', { type: 'mouseReleased', x, y, button: 'left', clickCount: 1 });

  console.log('Sent OS mouse events to coordinates', x, y);
  await new Promise(r => setTimeout(r, 1000));

  const check = await send('Runtime.evaluate', {
    expression: `
      ({
        hasMain: !!document.querySelector('#main'),
        mainHeader: document.querySelector('#main header')?.innerText,
        chatTitle: document.querySelector('#main [data-testid="conversation-info-header"]')?.innerText
      })
    `,
    returnByValue: true
  });

  console.log('Check live active chat:', check.result?.value);
  ws.close();
}

testClickChatRow().catch(console.error);
