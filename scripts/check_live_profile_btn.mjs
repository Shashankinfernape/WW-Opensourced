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
        id: 400,
        method: 'Runtime.evaluate',
        params: {
          expression: `(() => {
            const youBtn = document.querySelector('button[aria-label="You"]') || document.querySelector('button[aria-label="Profile"]');
            const navButtons = Array.from(document.querySelectorAll('header[data-testid="chatlist-header"] button')).map(b => ({
              label: b.getAttribute('aria-label'),
              tag: b.tagName,
              rect: b.getBoundingClientRect()
            }));
            return JSON.stringify({
              youBtn: youBtn ? { label: youBtn.getAttribute('aria-label'), rect: youBtn.getBoundingClientRect(), html: youBtn.outerHTML } : null,
              navButtons
            });
          })()`,
          returnByValue: true
        }
      }));
    });
    ws.on('message', (raw) => {
      const msg = JSON.parse(raw);
      if (msg.id === 400) {
        console.log('LIVE NAV BUTTONS:');
        console.log(msg.result?.result?.value);
        ws.close();
      }
    });
  });
});
