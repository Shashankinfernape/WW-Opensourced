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
      const footer = document.querySelector('#main footer');
      const buttons = Array.from(footer.querySelectorAll('button')).map(b => ({
        label: b.getAttribute('aria-label'),
        rect: {
          x: Math.round(b.getBoundingClientRect().x),
          y: Math.round(b.getBoundingClientRect().y),
          w: Math.round(b.getBoundingClientRect().width),
          h: Math.round(b.getBoundingClientRect().height)
        },
        title: b.querySelector('title')?.textContent
      }));
      return buttons;
    })()`,
    returnByValue: true
  }
}));
