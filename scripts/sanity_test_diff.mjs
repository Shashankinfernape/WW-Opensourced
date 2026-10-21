import WebSocket from 'ws';
import fs from 'fs';
import { execSync } from 'child_process';
import crypto from 'crypto';

async function runSanityTest() {
  const liveBuf = fs.readFileSync('target_artifacts/whatsapp-web/live-screenshot.png');

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

  // Generate deliberately altered header (add a 50x20 red rectangle in the center)
  const alteredBase64 = await evaluate(`(async () => {
    const img = new Image();
    img.src = 'data:image/png;base64,${liveBuf.toString('base64')}';
    await new Promise(r => img.onload = r);
    const canvas = document.createElement('canvas');
    canvas.width = 413;
    canvas.height = 64;
    const ctx = canvas.getContext('2d');
    ctx.drawImage(img, 65, 0, 413, 64, 0, 0, 413, 64);
    
    // Deliberate alteration: red box
    ctx.fillStyle = '#ff0000';
    ctx.fillRect(100, 20, 50, 20);
    
    return canvas.toDataURL('image/png').split(',')[1];
  })()`);

  ws.close();

  const alteredBuf = Buffer.from(alteredBase64, 'base64');
  const alteredSha256 = crypto.createHash('sha256').update(alteredBuf).digest('hex');

  const alteredArtifact = {
    sha256: alteredSha256,
    bytes: alteredBuf.length,
    media_type: 'image/png',
    data_base64: alteredBase64
  };

  fs.writeFileSync('analysis/compare/altered-chatlist-header-artifact.json', JSON.stringify(alteredArtifact, null, 2));

  console.log('--- SANITY TEST: LIVE HEADER VS DELIBERATELY ALTERED HEADER ---');
  console.log('Live Header Artifact SHA-256:   ', JSON.parse(fs.readFileSync('analysis/compare/live-chatlist-header-artifact.json', 'utf8')).sha256);
  console.log('Altered Header Artifact SHA-256:', alteredSha256);

  const rawDiff = execSync(
    'rea compare-web-screenshots analysis/compare/live-chatlist-header-artifact.json analysis/compare/altered-chatlist-header-artifact.json --channel-threshold 5 --format json',
    { maxBuffer: 10 * 1024 * 1024 }
  );

  const diffData = JSON.parse(rawDiff.toString('utf8').replace(/^\uFEFF/, ''));
  const resNorm = diffData.normalized_result;

  console.log('Channel threshold used: 5');
  console.log('Compared pixels: ', resNorm.compared_pixels);
  console.log('Changed pixels:  ', resNorm.changed_pixels);
  console.log('Changed ratio:   ', (resNorm.changed_ratio * 100).toFixed(2) + '%');
  console.log('Mean channel delta:', resNorm.mean_absolute_channel_delta);
}

runSanityTest().catch(console.error);
