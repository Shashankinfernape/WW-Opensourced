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
        const parent = intro ? intro.parentElement : null;
        // Search for lock or encrypted text anywhere on page
        const allText = Array.from(document.querySelectorAll('span, div, p, footer'))
          .filter(el => el.textContent && el.textContent.includes('end-to-end encrypted'))
          .map(el => ({
            tag: el.tagName,
            text: el.textContent,
            html: el.outerHTML,
            rect: el.getBoundingClientRect()
          }));

        return {
          parentRect: parent ? parent.getBoundingClientRect() : null,
          parentHtml: parent ? parent.outerHTML.slice(0, 1000) : null,
          introRect: intro ? intro.getBoundingClientRect() : null,
          encryptedFooters: allText
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
