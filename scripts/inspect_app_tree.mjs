const res = await fetch('http://127.0.0.1:9223/json');
const targets = await res.json();
const wa = targets.find(t => t.url.includes('web.whatsapp.com') && t.type === 'page');
const ws = new WebSocket(wa.webSocketDebuggerUrl);
await new Promise(r => ws.onopen = r);
ws.onmessage = evt => {
  const data = JSON.parse(evt.data);
  if (data.id === 1) {
    console.log(JSON.stringify(data.result.result.value, null, 2));
    ws.close();
  }
};
ws.send(JSON.stringify({
  id: 1,
  method: 'Runtime.evaluate',
  params: {
    expression: `(() => {
      function dumpTree(el, depth = 0) {
        if (!el || depth > 5) return null;
        const rect = {
          x: Math.round(el.getBoundingClientRect().x),
          y: Math.round(el.getBoundingClientRect().y),
          w: Math.round(el.getBoundingClientRect().width),
          h: Math.round(el.getBoundingClientRect().height)
        };
        return {
          tag: el.tagName,
          id: el.id,
          class: el.className,
          testid: el.getAttribute('data-testid'),
          rect,
          children: Array.from(el.children).map(c => dumpTree(c, depth + 1))
        };
      }
      return dumpTree(document.querySelector('.app-wrapper-web'));
    })()`,
    returnByValue: true
  }
}));
