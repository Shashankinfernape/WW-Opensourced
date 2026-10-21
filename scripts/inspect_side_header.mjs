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
      const header = side ? side.previousElementSibling : null;
      return header ? {
        tag: header.tagName,
        className: header.className,
        rect: header.getBoundingClientRect(),
        html: header.outerHTML
      } : 'No previous sibling';
    })()`,
    returnByValue: true
  }
}));

ws.onmessage = (evt) => {
  const result = JSON.parse(evt.data).result?.result?.value;
  console.log('Top header above #side:', JSON.stringify(result, null, 2));
  ws.close();
  process.exit(0);
};
