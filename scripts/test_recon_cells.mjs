import WebSocket from 'ws';

async function main() {
  const targets = await (await fetch('http://127.0.0.1:9223/json')).json();
  const recon = targets.find(t => t.url.includes('5173') && t.type === 'page');
  const ws = new WebSocket(recon.webSocketDebuggerUrl);
  await new Promise(r => ws.on('open', r));

  const res = await new Promise(resolve => {
    ws.on('message', m => {
      const d = JSON.parse(m);
      if (d.id === 1) resolve(d.result?.result?.value);
    });
    ws.send(JSON.stringify({
      id: 1,
      method: 'Runtime.evaluate',
      params: {
        expression: `(() => {
          const cells = Array.from(document.querySelectorAll('[data-testid="cell-frame-container"]'));
          return cells.map(c => ({
            innerText: c.innerText,
            textContent: c.textContent,
            title: c.querySelector('[data-testid="cell-frame-title"]')?.textContent
          }));
        })()`,
        returnByValue: true
      }
    }));
  });

  console.log('RECON CELLS:', res);
  ws.close();
}

main().catch(console.error);
