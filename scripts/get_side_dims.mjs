const res = await fetch('http://127.0.0.1:9223/json');
const targets = await res.json();
const wa = targets.find(t => t.url.includes('web.whatsapp.com') && t.type === 'page');
const ws = new WebSocket(wa.webSocketDebuggerUrl);
await new Promise(r => ws.onopen = r);
ws.send(JSON.stringify({
  id: 1,
  method: 'Runtime.evaluate',
  params: {
    expression: 'JSON.stringify({ sideWidth: document.querySelector("#side").offsetWidth, sideHeight: document.querySelector("#side").offsetHeight, railWidth: document.querySelector("header[data-testid=\'chatlist-header\']").offsetWidth })',
    returnByValue: true
  }
}));
ws.onmessage = (evt) => {
  console.log('Live dimensions:', JSON.parse(evt.data).result?.result?.value);
  ws.close();
  process.exit(0);
};
