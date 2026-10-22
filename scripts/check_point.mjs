const LIVE_TARGET = '33AE831CE803E57482AFAF475003C698';

async function checkPoint() {
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
        const el = document.elementFromPoint(276, 183);
        return {
          tagName: el?.tagName,
          className: el?.className,
          text: el?.innerText?.slice(0, 50),
          outerHTML: el?.outerHTML?.slice(0, 200)
        };
      })()
    `,
    returnByValue: true
  });

  console.log('Element at (276, 183):', res.result?.value);
  ws.close();
}

checkPoint().catch(console.error);
