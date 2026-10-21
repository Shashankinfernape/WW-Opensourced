import fs from 'fs';

const res = await fetch('http://127.0.0.1:9223/json');
const targets = await res.json();
const wa = targets.find(t => t.url.includes('web.whatsapp.com') && t.type === 'page');
const ws = new WebSocket(wa.webSocketDebuggerUrl);
await new Promise(r => ws.onopen = r);

ws.onmessage = evt => {
  const data = JSON.parse(evt.data);
  if (data.id === 1) {
    fs.writeFileSync('analysis/live-chat-row.html', data.result.result.value, 'utf8');
    console.log('Saved live chat row HTML!');
    ws.close();
  }
};
ws.send(JSON.stringify({
  id: 1,
  method: 'Runtime.evaluate',
  params: {
    expression: `(() => {
      const pane = document.querySelector('#pane-side');
      // Find the first chat row inside pane-side (skip archived button if it's there)
      const rows = Array.from(pane.querySelectorAll('[data-testid="cell-frame-container"]'));
      return rows[1] ? rows[1].parentElement.outerHTML : (rows[0] ? rows[0].parentElement.outerHTML : 'NOT FOUND');
    })()`,
    returnByValue: true
  }
}));
