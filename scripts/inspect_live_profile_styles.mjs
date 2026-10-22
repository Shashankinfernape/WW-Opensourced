import http from 'http';
import WebSocket from 'ws';

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
        params: {
          expression: `(() => {
            const two = document.querySelector('.two');
            const mainRight = two?.children[4];
            return {
              tag: mainRight?.tagName,
              class: mainRight?.className,
              bg: window.getComputedStyle(mainRight).backgroundColor,
              html: mainRight?.innerHTML?.slice(0, 300)
            };
          })()`,
          returnByValue: true
        }
      }));
    });
    ws.on('message', (raw) => {
      const msg = JSON.parse(raw);
      console.log('MAIN RIGHT DETAILS:');
      console.log(JSON.stringify(msg.result?.result?.value, null, 2));
      ws.close();
    });
  });
});
