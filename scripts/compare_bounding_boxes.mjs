const res = await fetch('http://127.0.0.1:9223/json');
const targets = await res.json();
const wa = targets.find(t => t.url.includes('web.whatsapp.com') && t.type === 'page');
const recon = targets.find(t => t.url.includes('5173') && t.type === 'page');

async function getRects(target, label) {
  const ws = new WebSocket(target.webSocketDebuggerUrl);
  await new Promise(r => ws.onopen = r);
  const result = await new Promise((resolve) => {
    ws.onmessage = (evt) => {
      resolve(JSON.parse(evt.data).result?.result?.value);
    };
    ws.send(JSON.stringify({
      id: 1,
      method: 'Runtime.evaluate',
      params: {
        expression: `(() => {
          const side = document.querySelector('#side');
          const header = document.querySelector('[data-testid="conversation-header"]');
          const footer = document.querySelector('footer');
          const search = document.querySelector('[data-testid="chat-list-search-container"]');
          const archived = document.querySelector('[data-testid="cell-frame-container"]');
          
          const getR = el => el ? { x: Math.round(el.getBoundingClientRect().x), y: Math.round(el.getBoundingClientRect().y), w: Math.round(el.getBoundingClientRect().width), h: Math.round(el.getBoundingClientRect().height) } : null;
          return {
            side: getR(side),
            header: getR(header),
            footer: getR(footer),
            search: getR(search),
            archived: getR(archived)
          };
        })()`,
        returnByValue: true
      }
    }));
  });
  ws.close();
  console.log(`--- ${label} RECTS ---`, JSON.stringify(result, null, 2));
}

await getRects(wa, 'LIVE WHATSAPP');
await getRects(recon, 'RECONSTRUCTION');
