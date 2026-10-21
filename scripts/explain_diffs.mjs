import WebSocket from 'ws';
import fs from 'fs';

async function explainDiffs() {
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

  const regions = [
    { name: 'filter-pills', x: 65, y: 112, w: 413, h: 42 },
    { name: 'archived-row', x: 65, y: 230, w: 413, h: 50 },
    { name: 'conversation-header', x: 478, y: 0, w: 556, h: 64 },
  ];

  for (const reg of regions) {
    const analysis = await evaluate(`(async () => {
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

      ctx.clearRect(0, 0, 1034, 737);
      ctx.drawImage(imgLive, 0, 0);
      const liveData = ctx.getImageData(${reg.x}, ${reg.y}, ${reg.w}, ${reg.h}).data;

      ctx.clearRect(0, 0, 1034, 737);
      ctx.drawImage(imgRecon, 0, 0);
      const reconData = ctx.getImageData(${reg.x}, ${reg.y}, ${reg.w}, ${reg.h}).data;

      let diffCount = 0;
      let diffLocations = [];
      let totalChannelDelta = 0;

      for (let i = 0; i < liveData.length; i += 4) {
        const dr = Math.abs(liveData[i] - reconData[i]);
        const dg = Math.abs(liveData[i+1] - reconData[i+1]);
        const db = Math.abs(liveData[i+2] - reconData[i+2]);
        const da = Math.abs(liveData[i+3] - reconData[i+3]);
        const maxDelta = Math.max(dr, dg, db, da);

        if (maxDelta > 5) {
          diffCount++;
          totalChannelDelta += (dr + dg + db + da) / 4;
          if (diffLocations.length < 5) {
            const idx = i / 4;
            diffLocations.push({
              relX: idx % ${reg.w},
              relY: Math.floor(idx / ${reg.w}),
              liveRgba: [liveData[i], liveData[i+1], liveData[i+2], liveData[i+3]],
              reconRgba: [reconData[i], reconData[i+1], reconData[i+2], reconData[i+3]],
            });
          }
        }
      }

      return {
        totalPixels: ${reg.w} * ${reg.h},
        diffCount,
        ratio: (diffCount / (${reg.w} * ${reg.h}) * 100).toFixed(2) + '%',
        diffLocations
      };
    })()`);

    console.log(`\n--- Region: ${reg.name} ---`);
    console.log(analysis);
  }

  ws.close();
}

explainDiffs().catch(console.error);
