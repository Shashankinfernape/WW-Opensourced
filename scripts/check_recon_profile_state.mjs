import http from 'http';
import WebSocket from 'ws';

http.get('http://127.0.0.1:9223/json', (res) => {
  let data = '';
  res.on('data', chunk => data += chunk);
  res.on('end', () => {
    const list = JSON.parse(data);
    const target = list.find(t => t.id === '6C1EB6BEA99DB77BBB6E025B42EC3834');
    const ws = new WebSocket(target.webSocketDebuggerUrl);
    ws.on('open', () => {
      ws.send(JSON.stringify({
        id: 1,
        method: 'Runtime.evaluate',
        params: {
          expression: `(() => {
            const side = document.querySelector('#side_column');
            const right = side?.nextElementSibling;
            return {
              sideW: side ? window.getComputedStyle(side).width : null,
              rightW: right ? window.getComputedStyle(right).width : null,
              rightTag: right ? right.tagName : null,
              rightChildren: Array.from(right?.children || []).map(c => ({
                tag: c.tagName,
                testId: c.getAttribute('data-testid')
              }))
            };
          })()`,
          returnByValue: true
        }
      }));
    });
    ws.on('message', (raw) => {
      const msg = JSON.parse(raw);
      console.log('RECON RIGHT SIDE:');
      console.log(JSON.stringify(msg.result?.result?.value, null, 2));
      ws.close();
    });
  });
});
