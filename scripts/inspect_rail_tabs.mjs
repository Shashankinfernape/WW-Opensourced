import fs from 'fs';

const res = await fetch('http://127.0.0.1:9223/json');
const targets = await res.json();
const wa = targets.find(t => t.url.includes('web.whatsapp.com') && t.type === 'page');
const ws = new WebSocket(wa.webSocketDebuggerUrl);
await new Promise(r => ws.onopen = r);

let idCounter = 1;
function send(method, params = {}) {
  return new Promise((resolve) => {
    const id = idCounter++;
    const handler = (evt) => {
      const data = JSON.parse(evt.data);
      if (data.id === id) {
        ws.removeEventListener('message', handler);
        resolve(data.result);
      }
    };
    ws.addEventListener('message', handler);
    ws.send(JSON.stringify({ id, method, params }));
  });
}

// Check what buttons exist in the rail
const railButtons = await send('Runtime.evaluate', {
  expression: `(() => {
    const buttons = document.querySelectorAll('header [role="button"], [aria-label="chatlist-header"] [role="button"], [data-testid="chatlist-header"] ~ *');
    return Array.from(document.querySelectorAll('button[aria-label]')).map(b => b.getAttribute('aria-label'));
  })()`,
  returnByValue: true
});
console.log('Button aria-labels:', railButtons.result.value);

ws.close();
