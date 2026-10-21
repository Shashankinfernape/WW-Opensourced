import WebSocket from 'ws';

async function main() {
  const targets = await (await fetch('http://127.0.0.1:9223/json')).json();
  const recon = targets.find(t => t.url.includes('5173') && t.type === 'page');
  const live = targets.find(t => t.url.includes('web.whatsapp.com') && t.type === 'page');

  async function getPills(url) {
    const ws = new WebSocket(url);
    await new Promise(r => ws.on('open', r));
    const result = await new Promise(resolve => {
      ws.on('message', m => {
        const d = JSON.parse(m);
        if (d.id === 1) resolve(d.result?.result?.value);
      });
      ws.send(JSON.stringify({
        id: 1,
        method: 'Runtime.evaluate',
        params: {
          expression: `(() => {
            const container = Array.from(document.querySelectorAll('div, ul')).find(el => {
              const text = el.innerText?.trim();
              return text && text.includes('All') && text.includes('Unread') && text.includes('Groups');
            });
            const pills = Array.from(document.querySelectorAll('button')).filter(b => {
              const t = b.innerText?.trim();
              return t === 'All' || t?.startsWith('Unread') || t === 'Favourites' || t === 'Groups';
            }).map(b => {
              const r = b.getBoundingClientRect();
              const s = window.getComputedStyle(b);
              return {
                text: b.innerText,
                classes: b.className,
                rect: { x: r.x, y: r.y, w: r.width, h: r.height },
                padding: s.padding,
                margin: s.margin,
                fontSize: s.fontSize,
                fontWeight: s.fontWeight,
                backgroundColor: s.backgroundColor,
                color: s.color,
                borderRadius: s.borderRadius
              };
            });
            return {
              containerClasses: container?.className,
              containerRect: container ? { x: container.getBoundingClientRect().x, y: container.getBoundingClientRect().y, w: container.getBoundingClientRect().width, h: container.getBoundingClientRect().height } : null,
              pills
            };
          })()`,
          returnByValue: true
        }
      }));
    });
    ws.close();
    return result;
  }

  const liveData = await getPills(live.webSocketDebuggerUrl);
  const reconData = await getPills(recon.webSocketDebuggerUrl);

  console.log('=== LIVE PILLS ===');
  console.log(JSON.stringify(liveData, null, 2));

  console.log('\n=== RECON PILLS ===');
  console.log(JSON.stringify(reconData, null, 2));
}

main().catch(console.error);
