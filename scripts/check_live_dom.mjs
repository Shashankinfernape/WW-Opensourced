const res = await fetch('http://127.0.0.1:9223/json');
const targets = await res.json();
const wa = targets.find(t => t.id === '2CA3E36EB10142555423DA69306EFAD5');
const ws = new WebSocket(wa.webSocketDebuggerUrl);
await new Promise(r => ws.onopen = r);
ws.send(JSON.stringify({
  id: 1,
  method: 'Runtime.evaluate',
  params: {
    expression: `(() => {
      const rail = document.querySelector('header[data-testid="chatlist-header"]') || document.querySelector('header') || document.querySelector('nav');
      const side = document.querySelector('#side');
      const rect = rail ? rail.getBoundingClientRect() : null;
      return {
        railFound: !!rail,
        railTag: rail ? rail.tagName : null,
        railTestId: rail ? rail.getAttribute('data-testid') : null,
        railClasses: rail ? rail.className : null,
        railRect: rect ? { x: rect.x, y: rect.y, width: rect.width, height: rect.height } : null,
        railBg: rail ? window.getComputedStyle(rail).backgroundColor : null,
        sideBg: side ? window.getComputedStyle(side).backgroundColor : null
      };
    })()`,
    returnByValue: true
  }
}));
ws.onmessage = (evt) => {
  console.log('Rail info:', JSON.stringify(JSON.parse(evt.data).result?.result?.value, null, 2));
  ws.close();
  process.exit(0);
};
