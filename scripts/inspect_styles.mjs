const res = await fetch('http://127.0.0.1:9223/json');
const targets = await res.json();
const wa = targets.find(t => t.url.includes('web.whatsapp.com') && t.type === 'page');
const recon = targets.find(t => t.url.includes('5173') && t.type === 'page');

async function getInfo(target, label) {
  const ws = new WebSocket(target.webSocketDebuggerUrl);
  await new Promise(r => ws.onopen = r);
  const result = await new Promise((resolve) => {
    ws.onmessage = evt => resolve(JSON.parse(evt.data).result?.result?.value);
    ws.send(JSON.stringify({
      id: 1,
      method: 'Runtime.evaluate',
      params: {
        expression: `(() => {
          const header = document.querySelector('[data-testid="conversation-header"]');
          const footer = document.querySelector('#main footer');
          const search = document.querySelector('[data-testid="chat-list-search-container"]');
          const pill = document.querySelector('[role="tablist"][aria-label="chat-list-filters"]');
          
          return {
            headerBg: header ? window.getComputedStyle(header).backgroundColor : null,
            footerBg: footer ? window.getComputedStyle(footer).backgroundColor : null,
            searchBg: search ? window.getComputedStyle(search).backgroundColor : null,
            pillBg: pill ? window.getComputedStyle(pill).backgroundColor : null,
          };
        })()`,
        returnByValue: true
      }
    }));
  });
  ws.close();
  console.log(`--- ${label} STYLES ---`, result);
}

await getInfo(wa, 'LIVE WHATSAPP');
await getInfo(recon, 'RECONSTRUCTION');
