const LIVE_TARGET = '33AE831CE803E57482AFAF475003C698';

async function inspectCommunitiesDrawer() {
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

  console.log('Clicking Communities on live...');
  await send('Runtime.evaluate', {
    expression: `
      (() => {
        const b = document.querySelector('button[aria-label="Communities"]');
        if (b) {
          b.dispatchEvent(new PointerEvent('pointerdown', { bubbles: true, cancelable: true }));
          b.click();
        }
      })()
    `
  });
  await new Promise(r => setTimeout(r, 600));

  const res = await send('Runtime.evaluate', {
    expression: `
      (() => {
        const drawer = document.querySelector('div.two > div.x10l6tqk.x13vifvy.x1o0tod');
        return Array.from(drawer.children).map(c => ({
          className: c.className.slice(0, 40),
          width: c.offsetWidth,
          height: c.offsetHeight,
          textSnippet: c.innerText?.slice(0, 80)
        }));
      })()
    `,
    returnByValue: true
  });

  console.log('Communities Drawer children:', JSON.stringify(res.result?.value, null, 2));
  ws.close();
}

inspectCommunitiesDrawer().catch(console.error);
