import http from 'http';
import WebSocket from 'ws';

http.get('http://127.0.0.1:9223/json', (res) => {
  let data = '';
  res.on('data', chunk => data += chunk);
  res.on('end', () => {
    const list = JSON.parse(data);
    const liveTarget = list.find(t => t.id === '33AE831CE803E57482AFAF475003C698');
    const ws = new WebSocket(liveTarget.webSocketDebuggerUrl);
    ws.on('open', () => {
      // Click You button
      ws.send(JSON.stringify({
        id: 500,
        method: 'Runtime.evaluate',
        params: {
          expression: `(() => {
            const btn = document.querySelector('button[aria-label="You"]');
            if (btn) btn.click();
            return 'clicked';
          })()`,
          returnByValue: true
        }
      }));
      setTimeout(() => {
        // Inspect what appeared
        ws.send(JSON.stringify({
          id: 501,
          method: 'Runtime.evaluate',
          params: {
            expression: `(() => {
              const drawers = Array.from(document.querySelectorAll('[data-testid*=\"drawer\"], [data-testid*=\"panel\"], header')).map(el => ({
                tag: el.tagName,
                testid: el.getAttribute('data-testid'),
                title: el.querySelector('h1, h2, [role=\"heading\"]')?.textContent,
                text: el.textContent?.slice(0, 100)
              }));
              const menuItems = Array.from(document.querySelectorAll('[role=\"menuitem\"], [role=\"button\"]')).slice(0, 15).map(el => ({
                text: el.textContent?.trim(),
                role: el.getAttribute('role'),
                label: el.getAttribute('aria-label')
              }));
              return JSON.stringify({ drawers, menuItems });
            })()`,
            returnByValue: true
          }
        }));
      }, 500);
    });
    ws.on('message', (raw) => {
      const msg = JSON.parse(raw);
      if (msg.id === 501) {
        console.log('RESULT OF CLICKING "You":');
        console.log(msg.result?.result?.value);
        ws.close();
      }
    });
  });
});
