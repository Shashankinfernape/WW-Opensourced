import WebSocket from 'ws';

function evalCDP(expr) {
  return new Promise((resolve, reject) => {
    const ws = new WebSocket('ws://127.0.0.1:9223/devtools/page/33AE831CE803E57482AFAF475003C698');
    ws.on('open', () => {
      ws.send(JSON.stringify({
        id: 1,
        method: 'Runtime.evaluate',
        params: { expression: expr, returnByValue: true }
      }));
    });
    ws.on('message', data => {
      const msg = JSON.parse(data);
      if (msg.id === 1) {
        ws.close();
        resolve(msg.result?.result?.value);
      }
    });
    ws.on('error', reject);
  });
}

async function run() {
  console.log('Clicking Back button on live WhatsApp...');
  const res = await evalCDP(`(() => {
    const btn = document.querySelector('button[aria-label="Back"]');
    if (btn) {
      btn.click();
      return { clicked: true };
    }
    return { clicked: false };
  })()`);
  console.log('Back button clicked:', res);
}

run();
