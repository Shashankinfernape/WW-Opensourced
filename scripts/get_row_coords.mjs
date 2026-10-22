const LIVE_TARGET = '33AE831CE803E57482AFAF475003C698';

async function getRowCoords() {
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

  const res = await send('Runtime.evaluate', {
    expression: `
      (() => {
        const row = document.querySelector('[data-testid="list-item-0"]');
        const r = row.getBoundingClientRect();
        return { x: r.x, y: r.y, width: r.width, height: r.height, top: r.top, bottom: r.bottom };
      })()
    `,
    returnByValue: true
  });

  console.log('Row rect:', res.result?.value);
  ws.close();
}

getRowCoords().catch(console.error);
