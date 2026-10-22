const LIVE_TARGET = '33AE831CE803E57482AFAF475003C698';

async function testFocusEnter() {
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

  console.log('Focusing first row...');
  await send('Runtime.evaluate', {
    expression: `
      (() => {
        const cell = document.querySelector('#pane-side div[tabindex="0"], #pane-side div[role="gridcell"]');
        if (cell) cell.focus();
      })()
    `
  });

  console.log('Sending Enter key...');
  await send('Input.dispatchKeyEvent', { type: 'keyDown', key: 'Enter', code: 'Enter', windowsVirtualKeyCode: 13 });
  await send('Input.dispatchKeyEvent', { type: 'keyUp', key: 'Enter', code: 'Enter', windowsVirtualKeyCode: 13 });

  await new Promise(r => setTimeout(r, 1000));

  const check = await send('Runtime.evaluate', {
    expression: `
      ({
        hasMain: !!document.querySelector('#main'),
        activeElement: document.activeElement?.outerHTML?.slice(0, 100),
        chatTitle: document.querySelector('header span[title]')?.getAttribute('title')
      })
    `,
    returnByValue: true
  });

  console.log('Check after Enter:', check.result?.value);
  ws.close();
}

testFocusEnter().catch(console.error);
