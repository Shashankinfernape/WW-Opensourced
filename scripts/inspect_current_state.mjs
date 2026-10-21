import WebSocket from 'ws';

async function main() {
  const targets = await (await fetch('http://127.0.0.1:9223/json')).json();
  const live = targets.find(t => t.url.includes('web.whatsapp.com') && t.type === 'page');
  const recon = targets.find(t => t.url.includes('5173') && t.type === 'page');

  async function check(t, name) {
    const ws = new WebSocket(t.webSocketDebuggerUrl);
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
            const sideHeader = document.querySelector('header h2, header [data-testid="wa-wordmark"]')?.innerText || 'wordmark';
            const main = document.querySelector('#main');
            const intro = document.querySelector('[data-testid="intro-panel"]');
            const mainHeader = document.querySelector('[data-testid="conversation-header"]')?.innerText;
            const sideWidth = document.querySelector('#side, #side_column')?.getBoundingClientRect()?.width;
            const mainWidth = (main || intro)?.getBoundingClientRect()?.width;
            const openDrawer = document.querySelector('[data-testid*="drawer"]')?.getAttribute('data-testid');
            return {
              sideHeader,
              hasMain: !!main,
              hasIntro: !!intro,
              mainHeader: mainHeader?.split('\\n')[0],
              sideWidth,
              mainWidth,
              openDrawer
            };
          })()`,
          returnByValue: true
        }
      }));
    });
    console.log(name, res);
    ws.close();
  }

  await check(live, 'LIVE:');
  await check(recon, 'RECON:');
}

main().catch(console.error);
