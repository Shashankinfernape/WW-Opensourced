import fs from 'fs';

const res = await fetch('http://127.0.0.1:9223/json');
const targets = await res.json();
const wa = targets.find(t => t.url.includes('web.whatsapp.com') && t.type === 'page');
const ws = new WebSocket(wa.webSocketDebuggerUrl);
await new Promise(r => ws.onopen = r);

ws.send(JSON.stringify({
  id: 1,
  method: 'Runtime.evaluate',
  params: {
    expression: `(() => {
      const side = document.querySelector('#side');
      return side ? side.outerHTML : null;
    })()`,
    returnByValue: true
  }
}));

ws.onmessage = (evt) => {
  const html = JSON.parse(evt.data).result?.result?.value;
  fs.writeFileSync('analysis/live-side-dom.html', html || '', 'utf8');
  console.log('Saved analysis/live-side-dom.html, length:', html ? html.length : 0);
  ws.close();
  process.exit(0);
};
