import fs from 'fs';
import WebSocket from 'ws';

async function main() {
  const targets = await (await fetch('http://127.0.0.1:9223/json')).json();
  const recon = targets.find(t => t.url.includes('5173') && t.type === 'page');

  const liveCropData = JSON.parse(fs.readFileSync('analysis/compare/live-pills-only-artifact.json', 'utf8'));
  const reconCropData = JSON.parse(fs.readFileSync('analysis/compare/recon-pills-only-artifact.json', 'utf8'));

  const ws = new WebSocket(recon.webSocketDebuggerUrl);
  await new Promise(r => ws.on('open', r));

  const result = await new Promise(resolve => {
    ws.on('message', m => {
      const d = JSON.parse(m);
      if (d.id === 1) resolve(d.result?.result?.value);
    });
    ws.send(JSON.stringify({
      id: 1,
      method: 'Runtime.evaluate',
      params: {
        expression: `(async () => {
          function load(b64) {
            return new Promise(res => {
              const img = new Image();
              img.onload = () => res(img);
              img.src = 'data:image/png;base64,' + b64;
            });
          }
          const [img1, img2] = await Promise.all([load('${liveCropData.data_base64}'), load('${reconCropData.data_base64}')]);
          const c1 = document.createElement('canvas');
          c1.width = img1.width; c1.height = img1.height;
          const ctx1 = c1.getContext('2d');
          ctx1.drawImage(img1, 0, 0);
          const d1 = ctx1.getImageData(0, 0, img1.width, img1.height).data;

          const c2 = document.createElement('canvas');
          c2.width = img2.width; c2.height = img2.height;
          const ctx2 = c2.getContext('2d');
          ctx2.drawImage(img2, 0, 0);
          const d2 = ctx2.getImageData(0, 0, img2.width, img2.height).data;

          const cols = {};
          let totalDiff = 0;
          for (let y = 0; y < img1.height; y++) {
            for (let x = 0; x < img1.width; x++) {
              const idx = (img1.width * y + x) * 4;
              const dr = Math.abs(d1[idx] - d2[idx]);
              const dg = Math.abs(d1[idx+1] - d2[idx+1]);
              const db = Math.abs(d1[idx+2] - d2[idx+2]);
              if (dr > 10 || dg > 10 || db > 10) {
                totalDiff++;
                const colKey = Math.floor(x / 50) * 50;
                cols[colKey] = (cols[colKey] || 0) + 1;
              }
            }
          }
          return { totalDiff, totalPixels: img1.width * img1.height, cols };
        })()`,
        awaitPromise: true,
        returnByValue: true
      }
    }));
  });

  console.log('Result:', result);
  ws.close();
}

main().catch(console.error);
