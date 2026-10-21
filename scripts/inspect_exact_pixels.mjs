import WebSocket from 'ws';
import fs from 'fs';

async function inspectExactPixels() {
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

  const comparison = await evaluate(`(async () => {
    // 1. Load live
    const imgLive = new Image();
    imgLive.src = 'data:image/png;base64,${liveBuf.toString('base64')}';
    await new Promise(r => imgLive.onload = r);

    // 2. Load recon
    const imgRecon = new Image();
    imgRecon.src = 'data:image/png;base64,${reconBuf.toString('base64')}';
    await new Promise(r => imgRecon.onload = r);

    const canvas = document.createElement('canvas');
    canvas.width = 1034;
    canvas.height = 737;
    const ctx = canvas.getContext('2d');

    // Get live header pixels
    ctx.clearRect(0, 0, 1034, 737);
    ctx.drawImage(imgLive, 0, 0);
    const liveHeader = ctx.getImageData(65, 0, 413, 64).data;

    // Get recon header pixels
    ctx.clearRect(0, 0, 1034, 737);
    ctx.drawImage(imgRecon, 0, 0);
    const reconHeader = ctx.getImageData(65, 0, 413, 64).data;

    let diffCount = 0;
    let diffSample = [];
    for (let i = 0; i < liveHeader.length; i += 4) {
      const dr = Math.abs(liveHeader[i] - reconHeader[i]);
      const dg = Math.abs(liveHeader[i+1] - reconHeader[i+1]);
      const db = Math.abs(liveHeader[i+2] - reconHeader[i+2]);
      const da = Math.abs(liveHeader[i+3] - reconHeader[i+3]);
      if (dr > 0 || dg > 0 || db > 0 || da > 0) {
        diffCount++;
        if (diffSample.length < 5) {
          const pixelIdx = i / 4;
          const px = pixelIdx % 413;
          const py = Math.floor(pixelIdx / 413);
          diffSample.push({ px, py, live: [liveHeader[i], liveHeader[i+1], liveHeader[i+2], liveHeader[i+3]], recon: [reconHeader[i], reconHeader[i+1], reconHeader[i+2], reconHeader[i+3]] });
        }
      }
    }

    return { totalPixels: 413 * 64, diffCount, diffSample };
  })()`);

  ws.close();
  console.log('Pixel by pixel comparison of chatlist-header [65, 0, 413, 64]:', comparison);
}

inspectExactPixels().catch(console.error);
