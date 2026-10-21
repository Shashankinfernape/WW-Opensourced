import WebSocket from 'ws';

async function checkRecon() {
  const res = await fetch('http://127.0.0.1:9223/json');
  const targets = await res.json();
  const recon = targets.find(t => t.url.includes('127.0.0.1:5173') && t.type === 'page');
  const ws = new WebSocket(recon.webSocketDebuggerUrl);
  await new Promise(r => ws.on('open', r));

  let id = 1;
  const send = (method, params = {}) => new Promise(resolve => {
    const cur = id++;
    const h = (m) => {
      const d = JSON.parse(m);
      if (d.id === cur) { ws.off('message', h); resolve(d.result); }
    };
    ws.on('message', h);
    ws.send(JSON.stringify({ id: cur, method, params }));
  });

  await send('Page.reload');
  await new Promise(r => setTimeout(r, 1200));

  const domCheck = await send('Runtime.evaluate', {
    expression: `(() => {
      const intro = document.querySelector('[data-testid="intro-panel"]');
      const actionTiles = document.querySelector('[data-testid="intro-panel-empty-state-action-tile-group"]');
      const main = document.querySelector('#main');
      return {
        hasIntro: !!intro,
        introTitle: document.querySelector('[data-testid="intro_panel_v2_title_card"]')?.innerText,
        hasActionTiles: !!actionTiles,
        actionTilesCount: actionTiles ? actionTiles.children.length : 0,
        hasMain: !!main
      };
    })()`,
    returnByValue: true
  });
  console.log('Reconstruction DOM state:', JSON.stringify(domCheck.result.value, null, 2));

  ws.close();
}
checkRecon().catch(console.error);
