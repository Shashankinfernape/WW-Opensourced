const LIVE_TARGET = '33AE831CE803E57482AFAF475003C698';

async function testActiveClick() {
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

  const x = 280;
  const y = 192;

  await send('Input.dispatchMouseEvent', { type: 'mouseMoved', x, y });
  await send('Input.dispatchMouseEvent', { type: 'mousePressed', x, y, button: 'left', clickCount: 1 });
  await send('Input.dispatchMouseEvent', { type: 'mouseReleased', x, y, button: 'left', clickCount: 1 });

  console.log('Clicked at (280, 192) on active tab...');
  await new Promise(r => setTimeout(r, 1000));

  const check = await send('Runtime.evaluate', {
    expression: `
      ({
        hasMain: !!document.querySelector('#main'),
        headerText: document.querySelector('#main header')?.innerText?.slice(0, 50),
        composer: !!document.querySelector('#main footer')
      })
    `,
    returnByValue: true
  });

  console.log('Active chat on live:', check.result?.value);
  ws.close();
}

testActiveClick().catch(console.error);
