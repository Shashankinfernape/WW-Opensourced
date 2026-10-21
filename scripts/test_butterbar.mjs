import WebSocket from 'ws';

async function main() {
  const targets = await (await fetch('http://127.0.0.1:9223/json')).json();
  const live = targets.find(t => t.url.includes('web.whatsapp.com') && t.type === 'page');
  const ws = new WebSocket(live.webSocketDebuggerUrl);
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
          const row = document.querySelector('[role="row"]');
          return row ? row.outerHTML : null;
        })()`,
        returnByValue: true
      }
    }));
  });

  console.log('LIVE FIRST CHAT ROW FULL HTML:');
  console.log(res);
  ws.close();
}

main().catch(console.error);
