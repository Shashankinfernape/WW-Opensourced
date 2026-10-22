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
        id: 300,
        method: 'Runtime.evaluate',
        params: {
          expression: `(() => {
            const row0 = document.querySelectorAll('#pane-side [role=\"row\"]')[0];
            const row2 = document.querySelectorAll('#pane-side [role=\"row\"]')[2];
            const sec0 = row0 ? row0.querySelector('[data-testid=\"cell-frame-secondary\"]') : null;
            const sec2 = row2 ? row2.querySelector('[data-testid=\"cell-frame-secondary\"]') : null;
            return JSON.stringify({
              sec0: sec0 ? sec0.outerHTML : null,
              sec2: sec2 ? sec2.outerHTML : null
            });
          })()`,
          returnByValue: true
        }
      }));
    });
    ws.on('message', (raw) => {
      const msg = JSON.parse(raw);
      if (msg.id === 300) {
        console.log('LIVE ROW SECONDARY HTML:');
        console.log(msg.result?.result?.value);
        ws.close();
      }
    });
  });
});
