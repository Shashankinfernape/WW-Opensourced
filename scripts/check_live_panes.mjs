import WebSocket from 'ws';

const ws = new WebSocket('ws://127.0.0.1:9223/devtools/page/33AE831CE803E57482AFAF475003C698');
ws.on('open', () => {
  ws.send(JSON.stringify({
    id: 1,
    method: 'Runtime.evaluate',
    params: {
      expression: `(() => {
        const panes = Array.from(document.querySelectorAll('#side, #main, [data-testid="chatlist"], [data-testid="conversation-panel-wrapper"], [data-testid="drawer-left"], [data-testid="intro-panel"], [data-testid="navbar"]')).map(el => {
          const r = el.getBoundingClientRect();
          return {
            id: el.id,
            dataTestid: el.getAttribute('data-testid'),
            rect: { x: r.x, y: r.y, w: r.width, h: r.height }
          };
        });
        return panes;
      })()`,
      returnByValue: true
    }
  }));
});
ws.on('message', d => {
  const msg = JSON.parse(d);
  if (msg.id === 1) {
    console.log(JSON.stringify(msg.result?.result?.value, null, 2));
    ws.close();
  }
});
