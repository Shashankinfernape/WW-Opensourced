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
  console.log(`Comparing Component: ${name} [${x}, ${y}, ${width}, ${height}]`);
  
  const liveBuf = fs.readFileSync('target_artifacts/whatsapp-web/live-screenshot.png');
  const reconBuf = fs.readFileSync('target_artifacts/whatsapp-web/recon-screenshot.png');
  
  const liveCrop = await cropRegion(liveBuf, x, y, width, height);
  const reconCrop = await cropRegion(reconBuf, x, y, width, height);
  
  const liveArtifact = {
    sha256: liveCrop.sha256,
    bytes: liveCrop.bytes,
    media_type: liveCrop.media_type,
    data_base64: liveCrop.data_base64
  };
  const reconArtifact = {
    sha256: reconCrop.sha256,
    bytes: reconCrop.bytes,
    media_type: reconCrop.media_type,
    data_base64: reconCrop.data_base64
  };
  
  fs.writeFileSync(`analysis/compare/live-${name}-artifact.json`, JSON.stringify(liveArtifact, null, 2));
  fs.writeFileSync(`analysis/compare/recon-${name}-artifact.json`, JSON.stringify(reconArtifact, null, 2));
  
  const reaDiffRaw = execSync(
    `rea compare-web-screenshots analysis/compare/live-${name}-artifact.json analysis/compare/recon-${name}-artifact.json --channel-threshold 5 --format json`,
    { maxBuffer: 50 * 1024 * 1024 }
  );
  const reaDiffText = reaDiffRaw.toString('utf8').replace(/^\uFEFF/, '');
  fs.writeFileSync(`analysis/compare/${name}.json`, reaDiffText);
  
  const diffData = JSON.parse(reaDiffText);
  const res = diffData.normalized_result;
  console.log(`Compared pixels: ${res.compared_pixels}`);
  console.log(`Changed pixels: ${res.changed_pixels}`);
  console.log(`Changed ratio: ${(res.changed_ratio * 100).toFixed(2)}%`);
  console.log(`Mean channel delta: ${res.mean_absolute_channel_delta}`);
  return {
    rect: [x, y, width, height],
    compared_pixels: res.compared_pixels,
    changed_pixels: res.changed_pixels,
    changed_ratio: res.changed_ratio,
    mean_absolute_channel_delta: res.mean_absolute_channel_delta
  };
}

const results = {};
// 1. Nav Rail
results['nav-rail'] = await runCompare('nav-rail', 0, 0, 64, 737);

// 2. Chat List Header
results['chatlist-header'] = await runCompare('chatlist-header', 65, 0, 413, 64);

// 3. Search Bar
results['chatlist-search-bar'] = await runCompare('chatlist-search-bar', 65, 64, 413, 48);

// 4. Filter Pills
results['chatlist-filter-pills'] = await runCompare('chatlist-filter-pills', 65, 112, 413, 42);

// 5. Archived Row
results['archived-row'] = await runCompare('archived-row', 65, 230, 413, 50);

// 6. Conversation Header
results['chat-header'] = await runCompare('chat-header', 478, 0, 556, 64);

// 7. Composer Bar
results['composer'] = await runCompare('composer', 478, 673, 556, 64);

fs.writeFileSync('analysis/compare/summary.json', JSON.stringify(results, null, 2));
console.log('\nAll comparisons completed successfully! Summary written to analysis/compare/summary.json');
