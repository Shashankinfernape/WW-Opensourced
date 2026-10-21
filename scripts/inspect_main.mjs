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
      const main = document.querySelector('#main');
      return {
        mainTag: main ? main.tagName : null,
        mainClass: main ? main.className : null,
        mainRect: main ? {
          x: Math.round(main.getBoundingClientRect().x),
          y: Math.round(main.getBoundingClientRect().y),
          w: Math.round(main.getBoundingClientRect().width),
          h: Math.round(main.getBoundingClientRect().height)
        } : null,
        children: main ? Array.from(main.children).map(c => ({
          tag: c.tagName,
          id: c.id,
          testid: c.getAttribute('data-testid'),
          rect: {
            x: Math.round(c.getBoundingClientRect().x),
            y: Math.round(c.getBoundingClientRect().y),
            w: Math.round(c.getBoundingClientRect().width),
            h: Math.round(c.getBoundingClientRect().height)
          },
          outerHTML: c.outerHTML.slice(0, 150)
        })) : []
      };
    })()`,
    returnByValue: true
  }
}));
