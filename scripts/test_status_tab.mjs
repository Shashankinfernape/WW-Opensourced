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

// Click Status button
await send('Runtime.evaluate', {
  expression: `(() => {
    const btn = Array.from(document.querySelectorAll('button')).find(b => b.getAttribute('aria-label') === 'Status');
    if (btn) btn.click();
  })()`
});

await new Promise(r => setTimeout(r, 1000));

// Inspect side panel
const sideInfo = await send('Runtime.evaluate', {
  expression: `(() => {
    const side = document.querySelector('#side') || document.querySelector('[data-testid="chat-list"]') || document.querySelector('[data-testid="drawer-left"]');
    const header = document.querySelector('header');
    const h1 = document.querySelector('h1') || document.querySelector('h2');
    return {
      h1: h1 ? h1.innerText : null,
      sideHtml: side ? side.outerHTML.slice(0, 1000) : 'NO SIDE',
    };
  })()`,
  returnByValue: true
});

console.log('Status panel info:', sideInfo.result.value);

// Click back to Chats
await send('Runtime.evaluate', {
  expression: `(() => {
    const btn = Array.from(document.querySelectorAll('button')).find(b => b.getAttribute('aria-label') === 'Chats');
    if (btn) btn.click();
  })()`
});

ws.close();
