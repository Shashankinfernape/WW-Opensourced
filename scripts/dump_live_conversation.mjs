import WebSocket from 'ws';
import fs from 'fs';

async function main() {
  const targets = await (await fetch('http://127.0.0.1:9223/json')).json();
  const live = targets.find(t => t.url.includes('web.whatsapp.com') && t.type === 'page');
  const ws = new WebSocket(live.webSocketDebuggerUrl);
  await new Promise(r => ws.on('open', r));

  const dom = await new Promise(resolve => {
    ws.on('message', m => {
      const d = JSON.parse(m);
      if (d.id === 1) resolve(d.result?.result?.value);
    });
    ws.send(JSON.stringify({
      id: 1,
      method: 'Runtime.evaluate',
      params: {
        expression: `(() => {
          const wrapper = document.querySelector('[data-testid="conversation-panel-wrapper"]');
          return wrapper ? wrapper.outerHTML : null;
        })()`,
        returnByValue: true
      }
    }));
  });

  if (dom) {
    fs.writeFileSync('analysis/live-conversation-view.html', dom);
    console.log(`Saved analysis/live-conversation-view.html (${dom.length} bytes)`);
  } else {
    console.log('No conversation panel wrapper found');
  }

  ws.close();
}

main().catch(console.error);
