const res = await fetch('http://127.0.0.1:9223/json');
const targets = await res.json();
const wa = targets.find(t => t.url.includes('web.whatsapp.com') && t.type === 'page');
const ws = new WebSocket(wa.webSocketDebuggerUrl);
await new Promise(r => ws.onopen = r);

// 1. Get coordinates of the first chat row
const coords = await new Promise((resolve) => {
  const handler = (evt) => {
    const data = JSON.parse(evt.data);
    if (data.id === 1) {
      ws.removeEventListener('message', handler);
      resolve(data.result?.result?.value);
    }
  };
  ws.addEventListener('message', handler);
  ws.send(JSON.stringify({
    id: 1,
    method: 'Runtime.evaluate',
    params: {
      expression: `(() => {
        const row = document.querySelector('#side div[data-testid="list-item-0"]') || document.querySelector('#side [role="row"]');
        if (!row) return null;
        const rect = row.getBoundingClientRect();
        return { x: Math.round(rect.x + rect.width / 2), y: Math.round(rect.y + rect.height / 2) };
      })()`,
      returnByValue: true
    }
  }));
});

console.log('Chat row click target coordinates:', coords);
if (!coords) {
  console.log('No chat row found!');
  ws.close();
  process.exit(1);
}

// 2. Dispatch real mouse events [AGENT-COLLECTED]
const sendEvent = (method, params) => new Promise((resolve) => {
  const id = Math.floor(Math.random() * 100000);
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

await sendEvent('Input.dispatchMouseEvent', {
  type: 'mouseMoved',
  x: coords.x,
  y: coords.y
});
await sendEvent('Input.dispatchMouseEvent', {
  type: 'mousePressed',
  button: 'left',
  clickCount: 1,
  x: coords.x,
  y: coords.y
});
await sendEvent('Input.dispatchMouseEvent', {
  type: 'mouseReleased',
  button: 'left',
  clickCount: 1,
  x: coords.x,
  y: coords.y
});

console.log('Dispatched click event on chat row [AGENT-COLLECTED]. Waiting 2s for #main to mount...');
await new Promise(r => setTimeout(r, 2000));

// 3. Check if #main exists now
const mainInfo = await new Promise((resolve) => {
  const handler = (evt) => {
    const data = JSON.parse(evt.data);
    if (data.id === 2) {
      ws.removeEventListener('message', handler);
      resolve(data.result?.result?.value);
    }
  };
  ws.addEventListener('message', handler);
  ws.send(JSON.stringify({
    id: 2,
    method: 'Runtime.evaluate',
    params: {
      expression: `(() => {
        const main = document.querySelector('#main');
        if (!main) return { hasMain: false };
        const header = main.querySelector('header');
        const bubbles = Array.from(main.querySelectorAll('div[data-testid^="msg-container"]'));
        const composer = main.querySelector('footer');
        return {
          hasMain: true,
          mainClasses: main.className,
          headerClasses: header ? header.className : null,
          bubblesCount: bubbles.length,
          composerClasses: composer ? composer.className : null
        };
      })()`,
      returnByValue: true
    }
  }));
});

console.log('Main info after click:', JSON.stringify(mainInfo, null, 2));

// 4. Save #main HTML if present
if (mainInfo && mainInfo.hasMain) {
  const mainHtml = await new Promise((resolve) => {
    const handler = (evt) => {
      const data = JSON.parse(evt.data);
      if (data.id === 3) {
        ws.removeEventListener('message', handler);
        resolve(data.result?.result?.value);
      }
    };
    ws.addEventListener('message', handler);
    ws.send(JSON.stringify({
      id: 3,
      method: 'Runtime.evaluate',
      params: {
        expression: 'document.querySelector("#main").outerHTML',
        returnByValue: true
      }
    }));
  });
  const fs = await import('fs');
  fs.writeFileSync('analysis/live-main-dom.html', mainHtml, 'utf8');
  console.log('Saved analysis/live-main-dom.html, length:', mainHtml.length);
}

ws.close();
process.exit(0);
