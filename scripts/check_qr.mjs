const res = await fetch('http://127.0.0.1:9223/json');
const targets = await res.json();
const wa = targets.find(t => t.url.includes('whatsapp.com') && t.type === 'page');

const ws = new WebSocket(wa.webSocketDebuggerUrl);
await new Promise(r => ws.onopen = r);

ws.send(JSON.stringify({
  id: 1,
  method: 'Runtime.evaluate',
  params: {
    expression: `(() => {
      const canvas = document.querySelector('canvas');
      const side = document.querySelector('#side');
      const main = document.querySelector('#main');
      const text = document.body ? document.body.innerText.replace(/\\s+/g, ' ').slice(0, 300) : '';
      return {
        hasCanvas: !!canvas,
        hasSide: !!side,
        hasMain: !!main,
        text
      };
    })()`,
    returnByValue: true
  }
}));

ws.onmessage = (evt) => {
  const data = JSON.parse(evt.data);
  console.log(JSON.stringify(data.result?.result?.value, null, 2));
  ws.close();
  process.exit(0);
};
