import fs from 'fs';
import crypto from 'crypto';
import { execSync } from 'child_process';

async function cropRegion(imageBuffer, x, y, width, height) {
  const base64Src = `data:image/png;base64,${imageBuffer.toString('base64')}`;
  
  // Use CDP on port 9223 to crop via canvas
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

const liveBuf = fs.readFileSync('target_artifacts/whatsapp-web/live-screenshot.png');
const reconBuf = fs.readFileSync('target_artifacts/whatsapp-web/recon-screenshot.png');

console.log('Cropping Nav Rail region [0, 0, 64, 737]...');
const liveCrop = await cropRegion(liveBuf, 0, 0, 64, 737);
const reconCrop = await cropRegion(reconBuf, 0, 0, 64, 737);

fs.writeFileSync('analysis/compare/live-nav-rail.png', liveCrop.buffer);
fs.writeFileSync('analysis/compare/recon-nav-rail.png', reconCrop.buffer);

const liveCropArtifact = {
  sha256: liveCrop.sha256,
  bytes: liveCrop.bytes,
  media_type: liveCrop.media_type,
  data_base64: liveCrop.data_base64
};
const reconCropArtifact = {
  sha256: reconCrop.sha256,
  bytes: reconCrop.bytes,
  media_type: reconCrop.media_type,
  data_base64: reconCrop.data_base64
};

fs.writeFileSync('analysis/compare/live-nav-rail-artifact.json', JSON.stringify(liveCropArtifact, null, 2));
fs.writeFileSync('analysis/compare/recon-nav-rail-artifact.json', JSON.stringify(reconCropArtifact, null, 2));

console.log('Running rea compare-web-screenshots on Nav Rail region...');
const reaDiffRaw = execSync(
  'rea compare-web-screenshots analysis/compare/live-nav-rail-artifact.json analysis/compare/recon-nav-rail-artifact.json --channel-threshold 5 --format json',
  { maxBuffer: 50 * 1024 * 1024 }
);
const reaDiffText = reaDiffRaw.toString('utf8').replace(/^\uFEFF/, '');
fs.writeFileSync('analysis/compare/nav-rail.json', reaDiffText);

const diffData = JSON.parse(reaDiffText);
console.log('REA compare result for Nav Rail:');
console.log(JSON.stringify(diffData.normalized_result, null, 2));
