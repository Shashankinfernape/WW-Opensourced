const LIVE_TARGET = '33AE831CE803E57482AFAF475003C698';

async function checkMainBg() {
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
        const main = document.querySelector('#main');
        const bg = document.querySelector('#main [data-testid="conversation-panel-wrapper"]') || document.querySelector('#main > div:nth-child(2)');
        const cs = main ? window.getComputedStyle(main) : null;
        const bgCs = bg ? window.getComputedStyle(bg) : null;
        return {
          mainBg: cs?.backgroundColor,
          bgBg: bgCs?.backgroundColor,
          bgImg: bgCs?.backgroundImage?.slice(0, 80)
        };
      })()
    `,
    returnByValue: true
  });

  console.log('Live Main Bg:', res.result?.value);
  ws.close();
}

checkMainBg().catch(console.error);
