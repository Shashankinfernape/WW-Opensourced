const res = await fetch('http://127.0.0.1:9223/json');
const targets = await res.json();
const wa = targets.find(t => t.url.includes('web.whatsapp.com') && t.type === 'page');
const ws = new WebSocket(wa.webSocketDebuggerUrl);
await new Promise(r => ws.onopen = r);
ws.onmessage = evt => {
  const data = JSON.parse(evt.data);
  if (data.id === 1) {
    console.log('--- CONVERSATION HEADER ---');
    console.log(data.result.result.value.header);
    console.log('\n--- FOOTER COMPOSER ---');
    console.log(data.result.result.value.footer);
    ws.close();
  }
};
ws.send(JSON.stringify({
  id: 1,
  method: 'Runtime.evaluate',
  params: {
    expression: `(() => {
      const header = document.querySelector('[data-testid="conversation-header"]');
      const footer = document.querySelector('#main footer');
      return {
        header: header ? header.outerHTML : 'NOT FOUND',
        footer: footer ? footer.outerHTML : 'NOT FOUND'
      };
    })()`,
    returnByValue: true
  }
}));
