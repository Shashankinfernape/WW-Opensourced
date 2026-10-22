const LIVE_TARGET = '33AE831CE803E57482AFAF475003C698';

async function testRealClick() {
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

  const rectRes = await send('Runtime.evaluate', {
    expression: `
      (() => {
        const row = document.querySelector('#pane-side [data-testid="list-item-0"]');
        const r = row?.getBoundingClientRect();
        return r ? { x: Math.round(r.left + r.width / 2), y: Math.round(r.top + r.height / 2) } : null;
      })()
    `,
    returnByValue: true
  });

  console.log('Row coords:', rectRes.result?.value);
  const coords = rectRes.result?.value;
  if (!coords) return;

  await send('Input.dispatchMouseEvent', {
    type: 'mousePressed',
    x: coords.x,
    y: coords.y,
    button: 'left',
    clickCount: 1
  });
  await send('Input.dispatchMouseEvent', {
    type: 'mouseReleased',
    x: coords.x,
    y: coords.y,
    button: 'left',
    clickCount: 1
  });

  console.log('Dispatched mouse events, waiting 800ms...');
  await new Promise(r => setTimeout(r, 800));

  const stateRes = await send('Runtime.evaluate', {
    expression: `
      ({
        hasMain: !!document.querySelector('#main'),
        convHeader: !!document.querySelector('header[data-testid="conversation-header"]'),
        composer: !!document.querySelector('footer, [data-testid="conversation-compose-box"]')
      })
    `,
    returnByValue: true
  });

  console.log('State after real click:', stateRes.result?.value);
  ws.close();
}

testRealClick().catch(console.error);
