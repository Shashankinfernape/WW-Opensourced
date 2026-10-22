import http from 'http';
import WebSocket from 'ws';

export async function queryLive(expr) {
  return new Promise((resolve, reject) => {
    http.get('http://127.0.0.1:9223/json', (res) => {
      let data = '';
      res.on('data', chunk => data += chunk);
      res.on('end', () => {
        const list = JSON.parse(data);
        const target = list.find(t => t.id === '33AE831CE803E57482AFAF475003C698');
        const ws = new WebSocket(target.webSocketDebuggerUrl);
        ws.on('open', () => {
          ws.send(JSON.stringify({
            id: 1,
            method: 'Runtime.evaluate',
            params: { expression: expr, returnByValue: true }
          }));
        });
        ws.on('message', (raw) => {
          const msg = JSON.parse(raw);
          if (msg.id === 1) {
            ws.close();
            if (msg.error) {
              reject(msg.error);
            } else if (msg.result?.exceptionDetails) {
              reject(msg.result.exceptionDetails);
            } else {
              resolve(msg.result?.result?.value);
            }
          }
        });
        ws.on('error', reject);
      });
    }).on('error', reject);
  });
}

if (process.argv[2]) {
  queryLive(process.argv[2]).then(console.log).catch(console.error);
}
