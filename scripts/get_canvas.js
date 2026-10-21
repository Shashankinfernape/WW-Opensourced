const fs = require('fs');
const ws = new WebSocket('ws://127.0.0.1:9222/devtools/page/2D0E840D62F22130552887F93BEDABE9');

ws.onopen = () => {
  ws.send(JSON.stringify({
    id: 1,
    method: 'Runtime.evaluate',
    params: {
      expression: 'document.querySelector("canvas") ? document.querySelector("canvas").toDataURL() : ""'
    }
  }));
};

ws.onmessage = (e) => {
  const msg = JSON.parse(e.data);
  if (msg.result && msg.result.result && msg.result.result.value) {
    fs.writeFileSync('captures/qr-canvas.txt', msg.result.result.value, 'utf8');
    console.log('Saved QR canvas dataURL, length:', msg.result.result.value.length);
  } else {
    console.log('No canvas data found:', msg);
  }
  ws.close();
};

ws.onerror = (err) => console.error(err);
