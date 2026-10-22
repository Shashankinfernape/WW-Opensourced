import WebSocket from 'ws';

const ws = new WebSocket('ws://127.0.0.1:9223/devtools/page/33AE831CE803E57482AFAF475003C698');
ws.on('open', () => {
  ws.send(JSON.stringify({
    id: 1,
    method: 'Runtime.evaluate',
    params: {
      expression: `(() => {
        const buttons = Array.from(document.querySelectorAll('button, [role="button"]')).map(b => ({
          ariaLabel: b.getAttribute('aria-label'),
          title: b.getAttribute('title'),
          dataTestid: b.getAttribute('data-testid'),
          text: b.textContent.trim().slice(0, 30),
          rect: b.getBoundingClientRect()
        })).filter(b => b.ariaLabel || b.title || b.dataTestid || b.text);
        return buttons;
      })()`,
      returnByValue: true
    }
  }));
});

ws.on('message', data => {
  const msg = JSON.parse(data);
  if (msg.id === 1) {
    console.log(JSON.stringify(msg.result?.result?.value, null, 2));
    ws.close();
  }
});
