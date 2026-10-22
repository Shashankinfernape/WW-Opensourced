const LIVE_TARGET = '33AE831CE803E57482AFAF475003C698';

async function inspectArchivedButtons() {
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
        const btns = Array.from(document.querySelectorAll('button, div[role="button"]')).map(b => ({
          tag: b.tagName,
          label: b.getAttribute('aria-label'),
          text: b.innerText?.slice(0, 30),
          className: b.className.slice(0, 50)
        }));
        return btns;
      })()
    `,
    returnByValue: true
  });

  console.log('Buttons:', res.result?.value);
  ws.close();
}

inspectArchivedButtons().catch(console.error);
