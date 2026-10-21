import fs from 'fs';
import WebSocket from 'ws';
import crypto from 'crypto';

async function testCrops() {
  const liveBuf = fs.readFileSync('target_artifacts/whatsapp-web/live-screenshot.png');
  const reconBuf = fs.readFileSync('target_artifacts/whatsapp-web/recon-screenshot.png');

  const liveB64 = `data:image/png;base64,${liveBuf.toString('base64')}`;
  const reconB64 = `data:image/png;base64,${reconBuf.toString('base64')}`;

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

  // Crop header [65, 0, 413, 64] from live
  const cropLiveHeader = await evaluate(`(async () => {
    const img = new Image();
    img.src = '${liveB64}';
    await new Promise(r => img.onload = r);
    const canvas = document.createElement('canvas');
    canvas.width = 413;
    canvas.height = 64;
    const ctx = canvas.getContext('2d');
    ctx.drawImage(img, 65, 0, 413, 64, 0, 0, 413, 64);
    return canvas.toDataURL('image/png').split(',')[1];
  })()`);

  // Crop header [65, 0, 413, 64] from recon
  const cropReconHeader = await evaluate(`(async () => {
    const img = new Image();
    img.src = '${reconB64}';
    await new Promise(r => img.onload = r);
    const canvas = document.createElement('canvas');
    canvas.width = 413;
    canvas.height = 64;
    const ctx = canvas.getContext('2d');
    ctx.drawImage(img, 65, 0, 413, 64, 0, 0, 413, 64);
    return canvas.toDataURL('image/png').split(',')[1];
  })()`);

  ws.close();

  const bufLive = Buffer.from(cropLiveHeader, 'base64');
  const bufRecon = Buffer.from(cropReconHeader, 'base64');

  const hashLive = crypto.createHash('sha256').update(bufLive).digest('hex');
  const hashRecon = crypto.createHash('sha256').update(bufRecon).digest('hex');

  console.log('bufLive length:', bufLive.length, 'sha256:', hashLive);
  console.log('bufRecon length:', bufRecon.length, 'sha256:', hashRecon);
  console.log('Equal?:', hashLive === hashRecon);
}

testCrops().catch(console.error);
