import fs from 'fs';

const res = await fetch('http://127.0.0.1:9223/json');
const targets = await res.json();
const wa = targets.find(t => t.url.includes('web.whatsapp.com') && t.type === 'page');
const ws = new WebSocket(wa.webSocketDebuggerUrl);
await new Promise(r => ws.onopen = r);

ws.onmessage = evt => {
  const data = JSON.parse(evt.data);
  if (data.id === 1) {
    fs.writeFileSync('analysis/live-footer.html', data.result.result.value, 'utf8');
    console.log('Saved live footer HTML!');
    ws.close();
  }
};
ws.send(JSON.stringify({
  id: 1,
  method: 'Runtime.evaluate',
  params: {
    expression: `document.querySelector('#main footer').outerHTML`,
    returnByValue: true
  }
}));
