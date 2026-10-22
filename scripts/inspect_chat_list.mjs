const LIVE_TARGET = '33AE831CE803E57482AFAF475003C698';

async function inspectChatList() {
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
        const list = document.querySelector('[data-testid="chat-list"]');
        const rows = Array.from(list?.querySelectorAll('[role="row"]') || []).slice(0, 5);
        return rows.map(r => ({
          testid: r.getAttribute('data-testid'),
          rect: r.getBoundingClientRect(),
          gridcell: !!r.querySelector('[role="gridcell"]'),
          text: r.innerText?.slice(0, 40)
        }));
      })()
    `,
    returnByValue: true
  });

  console.log('Chat rows:', JSON.stringify(res.result?.value, null, 2));
  ws.close();
}

inspectChatList().catch(console.error);
