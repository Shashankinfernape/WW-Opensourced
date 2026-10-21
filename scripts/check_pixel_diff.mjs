import WebSocket from 'ws';
import fs from 'fs';

async function checkPixels() {
  const liveBuf = fs.readFileSync('target_artifacts/whatsapp-web/live-screenshot.png');
  const reconBuf = fs.readFileSync('target_artifacts/whatsapp-web/recon-screenshot.png');

  const res = await fetch('http://127.0.0.1:9223/json');
  const targets = await res.json();
  const page = targets.find(t => t.type === 'page');

  const ws = new WebSocket(page.webSocketDebuggerUrl);
  await new Promise(r => ws.on('open', r));

  let idCounter = 1;
  function evaluate(expr) {
    return new Promise((resolve) => {
      const id = idCounter++;
      const handler = (msg) => {
        const data = JSON.parse(msg);
        if (data.id === id) {
          ws.off('message', handler);
          resolve(data.result?.result?.value);
        }
      };
      ws.on('message', handler);
      ws.send(JSON.stringify({
        id,
        method: 'Runtime.evaluate',
        params: { expression: expr, awaitPromise: true, returnByValue: true }
      }));
    });
  }

  // Get raw RGBA sample from live header
  const liveSample = await evaluate(`(async () => {
    const img = new Image();
    img.src = 'data:image/png;base64,${liveBuf.toString('base64')}';
    await new Promise(r => img.onload = r);
    const canvas = document.createElement('canvas');
    canvas.width = img.width;
    canvas.height = img.height;
    const ctx = canvas.getContext('2d');
    ctx.drawImage(img, 0, 0);
    const data = ctx.getImageData(65, 0, 413, 64).data;
    // return hash or sum or sample
    let sum = 0;
    for (let i = 0; i < data.length; i++) sum += data[i];
    return { width: img.width, height: img.height, sum, sample: Array.from(data.slice(0, 20)) };
  })()`);

  // Get raw RGBA sample from recon header
  const reconSample = await evaluate(`(async () => {
    const img = new Image();
    img.src = 'data:image/png;base64,${reconBuf.toString('base64')}';
    await new Promise(r => img.onload = r);
    const canvas = document.createElement('canvas');
    canvas.width = img.width;
    canvas.height = img.height;
    const ctx = canvas.getContext('2d');
    ctx.drawImage(img, 0, 0);
    const data = ctx.getImageData(65, 0, 413, 64).data;
    let sum = 0;
    for (let i = 0; i < data.length; i++) sum += data[i];
    return { width: img.width, height: img.height, sum, sample: Array.from(data.slice(0, 20)) };
  })()`);

  ws.close();
  console.log('Live header sample:', liveSample);
  console.log('Recon header sample:', reconSample);
}

checkPixels().catch(console.error);
