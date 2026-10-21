import fs from 'fs';
import crypto from 'crypto';
import { execSync } from 'child_process';

async function cropRegion(imageBuffer, x, y, width, height) {
  const base64Src = `data:image/png;base64,${imageBuffer.toString('base64')}`;
  const res = await fetch('http://127.0.0.1:9223/json');
  const targets = await res.json();
  const page = targets.find(t => t.type === 'page');
  
  const ws = new WebSocket(page.webSocketDebuggerUrl);
  await new Promise(r => ws.onopen = r);
  
  const result = await new Promise((resolve) => {
    ws.onmessage = (evt) => {
      const data = JSON.parse(evt.data);
      if (data.id === 1) {
        resolve(data.result?.result?.value);
      }
    };
    ws.send(JSON.stringify({
      id: 1,
      method: 'Runtime.evaluate',
      params: {
        expression: `(async () => {
          const img = new Image();
          img.src = '${base64Src}';
          await new Promise(r => img.onload = r);
          const canvas = document.createElement('canvas');
          canvas.width = ${width};
          canvas.height = ${height};
          const ctx = canvas.getContext('2d');
          ctx.drawImage(img, ${x}, ${y}, ${width}, ${height}, 0, 0, ${width}, ${height});
          return canvas.toDataURL('image/png').split(',')[1];
        })()`,
        awaitPromise: true,
        returnByValue: true
      }
    }));
  });
  
  ws.close();
  const pngBuf = Buffer.from(result, 'base64');
  const sha256 = crypto.createHash('sha256').update(pngBuf).digest('hex');
  return {
    sha256,
    bytes: pngBuf.length,
    media_type: 'image/png',
    data_base64: result,
    buffer: pngBuf
  };
}

async function runCompare(name, x, y, width, height) {
  console.log(`\n========================================`);
  console.log(`Comparing: ${name} [${x}, ${y}, ${width}, ${height}]`);
  
  const liveBuf = fs.readFileSync('target_artifacts/whatsapp-web/live-screenshot.png');
  const reconBuf = fs.readFileSync('target_artifacts/whatsapp-web/recon-screenshot.png');
  
  const liveCrop = await cropRegion(liveBuf, x, y, width, height);
  const reconCrop = await cropRegion(reconBuf, x, y, width, height);
  
  fs.writeFileSync(`analysis/compare/live-${name}-artifact.json`, JSON.stringify(liveCrop, null, 2));
  fs.writeFileSync(`analysis/compare/recon-${name}-artifact.json`, JSON.stringify(reconCrop, null, 2));
  
  const reaDiffRaw = execSync(
    `rea compare-web-screenshots analysis/compare/live-${name}-artifact.json analysis/compare/recon-${name}-artifact.json --channel-threshold 5 --format json`,
    { maxBuffer: 50 * 1024 * 1024 }
  );
  const diffData = JSON.parse(reaDiffRaw.toString('utf8').replace(/^\uFEFF/, ''));
  const res = diffData.normalized_result;
  console.log(`Compared pixels: ${res.compared_pixels}`);
  console.log(`Changed pixels: ${res.changed_pixels}`);
  console.log(`Changed ratio: ${(res.changed_ratio * 100).toFixed(2)}%`);
  return res;
}

await runCompare('search-only', 65, 64, 413, 48);
await runCompare('pills-only', 65, 112, 413, 42);
await runCompare('composer-only', 478, 673, 556, 64);
