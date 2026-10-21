import WebSocket from 'ws';
import fs from 'fs';

async function inspectExactPixelsSearch() {
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
    const imgLive = new Image();
    imgLive.src = 'data:image/png;base64,${liveBuf.toString('base64')}';
    await new Promise(r => imgLive.onload = r);

    const imgRecon = new Image();
    imgRecon.src = 'data:image/png;base64,${reconBuf.toString('base64')}';
    await new Promise(r => imgRecon.onload = r);

    const canvas = document.createElement('canvas');
    canvas.width = 1034;
    canvas.height = 737;
    const ctx = canvas.getContext('2d');

    // Get live search bar pixels
    ctx.clearRect(0, 0, 1034, 737);
    ctx.drawImage(imgLive, 0, 0);
    const liveSearch = ctx.getImageData(65, 64, 413, 48).data;

    // Get recon search bar pixels
    ctx.clearRect(0, 0, 1034, 737);
    ctx.drawImage(imgRecon, 0, 0);
    const reconSearch = ctx.getImageData(65, 64, 413, 48).data;

    let diffCount = 0;
    for (let i = 0; i < liveSearch.length; i += 4) {
      const dr = Math.abs(liveSearch[i] - reconSearch[i]);
      const dg = Math.abs(liveSearch[i+1] - reconSearch[i+1]);
      const db = Math.abs(liveSearch[i+2] - reconSearch[i+2]);
      const da = Math.abs(liveSearch[i+3] - reconSearch[i+3]);
      if (dr > 0 || dg > 0 || db > 0 || da > 0) {
        diffCount++;
      }
    }

    return { totalPixels: 413 * 48, diffCount };
  })()`);

  ws.close();
  console.log('Pixel by pixel comparison of chatlist-search-bar [65, 64, 413, 48]:', comparison);
}

inspectExactPixelsSearch().catch(console.error);
