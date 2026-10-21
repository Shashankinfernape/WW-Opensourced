import WebSocket from 'ws';
import http from 'http';

http.get('http://127.0.0.1:9223/json', res => {
  let data = '';
  res.on('data', chunk => data += chunk);
  res.on('end', () => {
    const list = JSON.parse(data);
    const target = list.find(t => t.url.includes('web.whatsapp.com') && !t.url.includes('sw.js'));
    if (!target) {
      console.log('No live WhatsApp target found');
      return;
    }
    const ws = new WebSocket(target.webSocketDebuggerUrl);
    ws.on('open', () => {
      const code = `(() => {
        const intro = document.querySelector('[data-testid="intro-panel"]');
        if (!intro) return { found: false, body: document.body.innerHTML.slice(0, 1000) };
        const p = intro.parentElement;
        return {
          found: true,
          parentTag: p.tagName,
          parentId: p.id,
          parentClass: p.className,
          parentStyle: p.getAttribute('style'),
          introHtml: intro.outerHTML,
          parentSiblings: Array.from(p.parentElement ? p.parentElement.children : []).map(c => ({
            tag: c.tagName,
            id: c.id,
            className: c.className
          }))
        };
      })()`;
      ws.send(JSON.stringify({
        id: 1,
        method: 'Runtime.evaluate',
        params: { expression: code, returnByValue: true }
      }));
    });
    ws.on('message', msg => {
      const res = JSON.parse(msg.toString());
      console.log(JSON.stringify(res.result?.result?.value, null, 2));
      ws.close();
    });
  });
});
