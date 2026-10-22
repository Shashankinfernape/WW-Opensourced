import http from 'http';
import WebSocket from 'ws';

http.get('http://127.0.0.1:9223/json', (res) => {
  let data = '';
  res.on('data', chunk => data += chunk);
  res.on('end', () => {
    const list = JSON.parse(data);
    const liveTarget = list.find(t => t.id === '33AE831CE803E57482AFAF475003C698');
    const ws = new WebSocket(liveTarget.webSocketDebuggerUrl);
    ws.on('open', () => {
      ws.send(JSON.stringify({
        id: 100,
        method: 'Runtime.evaluate',
        params: {
          expression: `(() => {
            const btn = document.querySelector('button[aria-label="Chats"]');
            const parent = btn ? btn.parentElement : null;
            const csBtn = btn ? window.getComputedStyle(btn) : null;
            const csParent = parent ? window.getComputedStyle(parent) : null;
            return JSON.stringify({
              parentTag: parent ? parent.tagName : null,
              parentClass: parent ? parent.className : null,
              parentBg: csParent ? csParent.backgroundColor : null,
              parentBorderRadius: csParent ? csParent.borderRadius : null,
              parentW: csParent ? csParent.width : null,
              parentH: csParent ? csParent.height : null,
              btnTag: btn ? btn.tagName : null,
              btnClass: btn ? btn.className : null,
              btnBg: csBtn ? csBtn.backgroundColor : null,
              btnBorderRadius: csBtn ? csBtn.borderRadius : null,
              btnW: csBtn ? csBtn.width : null,
              btnH: csBtn ? csBtn.height : null,
              parentHTML: parent ? parent.outerHTML : null
            });
          })()`,
          returnByValue: true
        }
      }));
    });
    ws.on('message', (raw) => {
      const msg = JSON.parse(raw);
      if (msg.id === 100) {
        console.log('LIVE NAV ITEM DETAILS:');
        console.log(msg.result?.result?.value);
        ws.close();
      }
    });
  });
});
