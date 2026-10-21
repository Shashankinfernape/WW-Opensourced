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
          const wrapper = document.querySelector('[data-testid="conversation-panel-wrapper"]');
          if (!wrapper) return 'no wrapper';
          const header = wrapper.querySelector('header, [data-testid="conversation-header"]');
          const body = wrapper.querySelector('[data-testid="conversation-panel-body"], #main');
          const footer = wrapper.querySelector('footer');
          const bubbles = Array.from(wrapper.querySelectorAll('[data-testid="msg-container"], div.message-in, div.message-out')).map(el => ({
            cls: el.className,
            text: el.innerText?.slice(0, 50)
          }));
          return {
            headerText: header?.innerText?.split('\\n')[0],
            footerExists: !!footer,
            bubblesCount: bubbles.length,
            bubblesSample: bubbles.slice(0, 3)
          };
        })()`,
        returnByValue: true
      }
    }));
  });

  console.log('Live Active Chat:', res);
  ws.close();
}

main().catch(console.error);
