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
        const p = intro ? intro.parentElement : null;
        const main = document.querySelector('#main');
        const side = document.querySelector('#side');
        const appWrapper = document.querySelector('.app-wrapper-web') || document.querySelector('#app');
        return {
          windowWidth: window.innerWidth,
          windowHeight: window.innerHeight,
          hasMain: !!main,
          sideRect: side ? side.getBoundingClientRect() : null,
          parentRect: p ? p.getBoundingClientRect() : null,
          introRect: intro ? intro.getBoundingClientRect() : null,
          introComputedStyle: intro ? {
            display: getComputedStyle(intro).display,
            flexDirection: getComputedStyle(intro).flexDirection,
            alignItems: getComputedStyle(intro).alignItems,
            justifyContent: getComputedStyle(intro).justifyContent,
            backgroundColor: getComputedStyle(intro).backgroundColor,
            borderBottom: getComputedStyle(intro).borderBottom,
            position: getComputedStyle(intro).position,
            width: getComputedStyle(intro).width,
            height: getComputedStyle(intro).height
          } : null,
          parentComputedStyle: p ? {
            display: getComputedStyle(p).display,
            position: getComputedStyle(p).position,
            width: getComputedStyle(p).width,
            height: getComputedStyle(p).height,
            flexGrow: getComputedStyle(p).flexGrow
          } : null
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
