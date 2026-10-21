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
      const app = document.querySelector('#app') || document.body;
      const children = Array.from(app.querySelectorAll('*')).filter(el => {
        const rect = el.getBoundingClientRect();
        return rect.left > 400 && rect.width > 300 && rect.height > 400;
      });
      return children.slice(0, 5).map(el => ({
        tag: el.tagName,
        className: el.className,
        text: el.innerText ? el.innerText.replace(/\\s+/g, ' ').slice(0, 150) : null
      }));
    })()`,
    returnByValue: true
  }
}));

ws.onmessage = (evt) => {
  console.log('Right panel:', JSON.stringify(JSON.parse(evt.data).result?.result?.value, null, 2));
  ws.close();
  process.exit(0);
};
