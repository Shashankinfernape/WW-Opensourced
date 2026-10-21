import WebSocket from 'ws';
import http from 'http';

http.get('http://127.0.0.1:9223/json', res => {
  let data = '';
  res.on('data', chunk => data += chunk);
  res.on('end', () => {
    const list = JSON.parse(data);
    const target = list.find(t => t.url.includes('web.whatsapp.com') && !t.url.includes('sw.js'));
    const ws = new WebSocket(target.webSocketDebuggerUrl);
    ws.on('open', () => {
      const code = `(() => {
        const intro = document.querySelector('[data-testid="intro-panel"]');
        if (!intro) return null;
        const p = intro.parentElement;
        return {
          childrenCount: p.children.length,
          children: Array.from(p.children).map(c => ({
            tag: c.tagName,
            testid: c.getAttribute('data-testid'),
            className: c.className,
            text: c.textContent?.slice(0, 100)
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
