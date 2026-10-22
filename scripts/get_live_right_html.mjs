const LIVE_TARGET = '33AE831CE803E57482AFAF475003C698';

async function getRightHTML() {
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
        const rightDiv = document.querySelector('div.two > div.x10l6tqk.x13vifvy.x1o0tod > div:nth-child(2)');
        return {
          className: rightDiv?.className,
          html: rightDiv?.outerHTML
        };
      })()
    `,
    returnByValue: true
  });

  console.log('Class:', res.result?.value?.className);
  console.log('HTML length:', res.result?.value?.html?.length);
  if (res.result?.value?.html) {
    import('fs').then(fs => fs.writeFileSync('analysis/live_right_tab.html', res.result.value.html));
  }
  ws.close();
}

getRightHTML().catch(console.error);
