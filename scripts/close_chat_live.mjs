const LIVE_TARGET = '33AE831CE803E57482AFAF475003C698';

async function closeChatLive() {
  await fetch(`http://127.0.0.1:9223/json/activate/${LIVE_TARGET}`);
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

  console.log('Sending Escape key...');
  await send('Input.dispatchKeyEvent', { type: 'keyDown', key: 'Escape', code: 'Escape', windowsVirtualKeyCode: 27 });
  await send('Input.dispatchKeyEvent', { type: 'keyUp', key: 'Escape', code: 'Escape', windowsVirtualKeyCode: 27 });

  await new Promise(r => setTimeout(r, 600));

  const check = await send('Runtime.evaluate', {
    expression: `
      ({
        hasMain: !!document.querySelector('#main'),
        intro: !!document.querySelector('div[data-testid="intro-text"]')
      })
    `,
    returnByValue: true
  });

  console.log('Live after Escape:', check.result?.value);
  ws.close();
}

closeChatLive().catch(console.error);
