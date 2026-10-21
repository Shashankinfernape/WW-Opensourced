const res = await fetch('http://127.0.0.1:9223/json');
const targets = await res.json();
const wa = targets.find(t => t.id === '2CA3E36EB10142555423DA69306EFAD5');
const ws = new WebSocket(wa.webSocketDebuggerUrl);
await new Promise(r => ws.onopen = r);

ws.send(JSON.stringify({
  id: 1,
  method: 'Runtime.evaluate',
  params: {
    expression: `(() => {
      const header = document.querySelector('header[data-testid="chatlist-header"]');
      return header ? header.outerHTML : null;
    })()`,
    returnByValue: true
  }
}));

ws.onmessage = (evt) => {
  const html = JSON.parse(evt.data).result?.result?.value;
  import('fs').then(fs => {
    fs.writeFileSync('analysis/live-rail-dom.html', html || '', 'utf8');
    console.log('Saved analysis/live-rail-dom.html, length:', html ? html.length : 0);
    ws.close();
    process.exit(0);
  });
};
