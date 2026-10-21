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
      const parent = side ? side.parentElement : null;
      if (!parent) return null;
      return Array.from(parent.children).map(c => ({
        id: c.id,
        tag: c.tagName,
        className: c.className,
        rect: c.getBoundingClientRect(),
        text: c.innerText.slice(0, 100)
      }));
    })()`,
    returnByValue: true
  }
}));
ws.onmessage = (evt) => {
  console.log('Siblings of #side:', JSON.stringify(JSON.parse(evt.data).result?.result?.value, null, 2));
  ws.close();
  process.exit(0);
};
