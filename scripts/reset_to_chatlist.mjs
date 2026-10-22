const LIVE_TARGET = '33AE831CE803E57482AFAF475003C698';
const RECON_TARGET = '6C1EB6BEA99DB77BBB6E025B42EC3834';

async function reset(targetId, isLive) {
  await fetch(`http://127.0.0.1:9223/json/activate/${targetId}`);
  const ws = new WebSocket(`ws://127.0.0.1:9223/devtools/page/${targetId}`);
  await new Promise(r => ws.onopen = r);
  const send = (method, params) => new Promise(res => {
    const id = Math.floor(Math.random() * 100000);
    const handler = e => {
      const d = JSON.parse(e.data);
      if (d.id === id) { ws.removeEventListener('message', handler); res(d.result); }
    };
    ws.addEventListener('message', handler);
    ws.send(JSON.stringify({ id, method, params }));
  });

  if (isLive) {
    await send('Runtime.evaluate', {
      expression: `
        (() => {
          const c = document.querySelector('button[aria-label="Chats"]');
          if (c) {
            c.dispatchEvent(new PointerEvent('pointerdown', { bubbles: true, cancelable: true }));
            c.click();
          }
          const b = document.querySelector('button[aria-label="Back"], button[aria-label="Close"]');
          if (b) b.click();
        })()
      `
    });
    await send('Input.dispatchKeyEvent', { type: 'keyDown', key: 'Escape', code: 'Escape', windowsVirtualKeyCode: 27 });
    await send('Input.dispatchKeyEvent', { type: 'keyUp', key: 'Escape', code: 'Escape', windowsVirtualKeyCode: 27 });
  } else {
    await send('Runtime.evaluate', {
      expression: `
        (() => {
          const c = document.querySelector('button[aria-label="Chats"]');
          if (c) c.click();
        })()
      `
    });
  }
  ws.close();
}

async function main() {
  await reset(LIVE_TARGET, true);
  await reset(RECON_TARGET, false);
  console.log('Both live and recon successfully reset to Chatlist view.');
}

main().catch(console.error);
