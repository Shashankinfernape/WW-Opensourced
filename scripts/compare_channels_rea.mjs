import fs from 'fs';
import { execSync } from 'child_process';
import crypto from 'crypto';
import WebSocket from 'ws';

async function crop(dataBase64, x, y, width, height, wsUrl) {
  const ws = new WebSocket(wsUrl);
  await new Promise(r => ws.on('open', r));

  const result = await new Promise(resolve => {
    let id = 1;
    ws.on('message', m => {
      const d = JSON.parse(m);
      if (d.id === 1) {
        ws.close();
        resolve(d.result?.result?.value);
      }
    });
    ws.send(JSON.stringify({
      id: 1,
      method: 'Runtime.evaluate',
      params: {
        expression: `(async () => {
          const img = new Image();
          img.src = 'data:image/png;base64,${dataBase64}';
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

  const buf = Buffer.from(result, 'base64');
  const sha256 = crypto.createHash('sha256').update(buf).digest('hex');
  return {
    sha256,
    bytes: buf.length,
    media_type: 'image/png',
    data_base64: result,
    buffer: buf
  };
}

async function main() {
  const targets = await (await fetch('http://127.0.0.1:9223/json')).json();
  const recon = targets.find(t => t.url.includes('5173') && t.type === 'page');
  const live = targets.find(t => t.url.includes('web.whatsapp.com') && t.type === 'page');

  // Activate Recon and click Channels
  console.log('Activating Recon and clicking Channels...');
  let ws = new WebSocket(recon.webSocketDebuggerUrl);
  await new Promise(r => ws.on('open', r));
  await new Promise(res => {
    ws.send(JSON.stringify({ id: 1, method: 'Page.bringToFront' }));
    setTimeout(res, 200);
  });
  await new Promise(res => {
    ws.send(JSON.stringify({
      id: 2,
      method: 'Runtime.evaluate',
      params: {
        expression: `(() => {
          const btn = document.querySelector('button[aria-label="Channels"]');
          if (btn) btn.click();
        })()`
      }
    }));
    setTimeout(res, 800);
  });
  ws.close();

  // Capture Recon with REA
  console.log('Capturing Recon with REA...');
  const reconRaw = execSync(`rea capture-web-screenshot http://127.0.0.1:9223 ${recon.id} --format json`);
  const reconArtifact = JSON.parse(reconRaw.toString('utf8').replace(/^\uFEFF/, '')).normalized_result.artifact;

  // Activate Live and click Channels
  console.log('Activating Live and clicking Channels...');
  ws = new WebSocket(live.webSocketDebuggerUrl);
  await new Promise(r => ws.on('open', r));
  await new Promise(res => {
    ws.send(JSON.stringify({ id: 1, method: 'Page.bringToFront' }));
    setTimeout(res, 200);
  });
  await new Promise(res => {
    ws.send(JSON.stringify({
      id: 2,
      method: 'Runtime.evaluate',
      params: {
        expression: `(() => {
          const btn = document.querySelector('button[aria-label="Channels"]');
          if (btn) btn.click();
        })()`
      }
    }));
    setTimeout(res, 800);
  });
  ws.close();

  // Capture Live with REA
  console.log('Capturing Live with REA...');
  const liveRaw = execSync(`rea capture-web-screenshot http://127.0.0.1:9223 ${live.id} --format json`);
  const liveArtifact = JSON.parse(liveRaw.toString('utf8').replace(/^\uFEFF/, '')).normalized_result.artifact;

  // Crop Channels drawer region: [64, 0, 432, 765]
  console.log('Cropping Channels Drawer region [64, 0, 432, 765]...');
  const liveCrop = await crop(liveArtifact.data_base64, 64, 0, 432, 765, recon.webSocketDebuggerUrl);
  const reconCrop = await crop(reconArtifact.data_base64, 64, 0, 432, 765, recon.webSocketDebuggerUrl);

  fs.writeFileSync('analysis/compare/live-channels-crop.json', JSON.stringify(liveCrop, null, 2));
  fs.writeFileSync('analysis/compare/recon-channels-crop.json', JSON.stringify(reconCrop, null, 2));

  console.log('Running rea compare-web-screenshots on Channels Drawer...');
  const diffRaw = execSync(`rea compare-web-screenshots analysis/compare/live-channels-crop.json analysis/compare/recon-channels-crop.json --channel-threshold 10 --format json`);
  const diff = JSON.parse(diffRaw.toString('utf8').replace(/^\uFEFF/, ''));
  fs.writeFileSync('analysis/compare/channels-drawer.json', JSON.stringify(diff, null, 2));

  console.log('\n=== CHANNELS DRAWER REA COMPARISON RESULT ===');
  console.log('Compared Pixels:', diff.normalized_result.compared_pixels);
  console.log('Changed Pixels: ', diff.normalized_result.changed_pixels);
  console.log('Diff Ratio:     ', (diff.normalized_result.changed_ratio * 100).toFixed(2) + '%');
  console.log('Status:         ', diff.normalized_result.status);
}

main().catch(console.error);
