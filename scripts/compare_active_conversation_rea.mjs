import WebSocket from 'ws';
import fs from 'fs';
import { execSync } from 'child_process';
import crypto from 'crypto';

async function cropRegionFromBuffer(imageBuffer, x, y, width, height) {
  const base64Src = `data:image/png;base64,${imageBuffer.toString('base64')}`;
  const res = await fetch('http://127.0.0.1:9223/json');
  const targets = await res.json();
  const page = targets.find(t => t.type === 'page');

  const ws = new WebSocket(page.webSocketDebuggerUrl);
  await new Promise(r => ws.on('open', r));

  const result = await new Promise((resolve) => {
    const handler = (msg) => {
      const data = JSON.parse(msg);
      if (data.id === 1) {
        ws.off('message', handler);
        resolve(data.result?.result?.value);
      }
    };
    ws.on('message', handler);
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

async function main() {
  const targets = await (await fetch('http://127.0.0.1:9223/json')).json();
  const recon = targets.find(t => t.url.includes('5173') && t.type === 'page');
  const live = targets.find(t => t.url.includes('web.whatsapp.com') && t.type === 'page');

  if (!recon || !live) {
    console.error('Missing target tabs!');
    process.exit(1);
  }

  // 1. Bring live to front and capture live active chat
  console.log('Capturing live active chat screenshot...');
  const liveWs = new WebSocket(live.webSocketDebuggerUrl);
  await new Promise(r => liveWs.on('open', r));
  liveWs.send(JSON.stringify({ id: 1, method: 'Page.bringToFront' }));
  await new Promise(r => setTimeout(r, 600));
  liveWs.close();

  const liveRaw = execSync(`rea capture-web-screenshot http://127.0.0.1:9223 ${live.id} --format json`, { maxBuffer: 50 * 1024 * 1024 });
  const liveData = JSON.parse(liveRaw.toString('utf8').replace(/^\uFEFF/, ''));
  const liveArtifact = liveData.normalized_result.artifact;
  fs.writeFileSync('analysis/compare/live-active-chat-full.png', Buffer.from(liveArtifact.data_base64, 'base64'));

  // 2. Bring recon to front, open Alex Rivera chat, and capture recon active chat
  console.log('Opening chat in recon and capturing screenshot...');
  const reconWs = new WebSocket(recon.webSocketDebuggerUrl);
  await new Promise(r => reconWs.on('open', r));
  reconWs.send(JSON.stringify({ id: 1, method: 'Page.bringToFront' }));
  reconWs.send(JSON.stringify({
    id: 2,
    method: 'Runtime.evaluate',
    params: {
      expression: `(() => {
        const rows = Array.from(document.querySelectorAll('[data-testid="cell-frame-container"]'));
        const row1 = rows.find(r => (r.textContent || r.innerText || '').includes('Alex Rivera'));
        if (row1) row1.click();
      })()`
    }
  }));
  await new Promise(r => setTimeout(r, 600));
  reconWs.close();

  const reconRaw = execSync(`rea capture-web-screenshot http://127.0.0.1:9223 ${recon.id} --format json`, { maxBuffer: 50 * 1024 * 1024 });
  const reconData = JSON.parse(reconRaw.toString('utf8').replace(/^\uFEFF/, ''));
  const reconArtifact = reconData.normalized_result.artifact;
  fs.writeFileSync('analysis/compare/recon-active-chat-full.png', Buffer.from(reconArtifact.data_base64, 'base64'));

  const liveBuf = Buffer.from(liveArtifact.data_base64, 'base64');
  const reconBuf = Buffer.from(reconArtifact.data_base64, 'base64');

  // Compare sections of active chat
  const sections = [
    { name: 'active-chat-header', rect: [496, 0, 944, 64] },
    { name: 'active-chat-composer', rect: [496, 701, 944, 64] },
    { name: 'active-chat-wallpaper-strip', rect: [496, 64, 944, 150] },
  ];

  console.log('\n--- Active Chat Regional REA Diff ---');
  for (const sec of sections) {
    const [x, y, w, h] = sec.rect;
    const liveCrop = await cropRegionFromBuffer(liveBuf, x, y, w, h);
    const reconCrop = await cropRegionFromBuffer(reconBuf, x, y, w, h);

    fs.writeFileSync(`analysis/compare/live-${sec.name}-artifact.json`, JSON.stringify(liveCrop, null, 2));
    fs.writeFileSync(`analysis/compare/recon-${sec.name}-artifact.json`, JSON.stringify(reconCrop, null, 2));

    const reaDiffRaw = execSync(
      `rea compare-web-screenshots analysis/compare/live-${sec.name}-artifact.json analysis/compare/recon-${sec.name}-artifact.json --channel-threshold 10 --format json`,
      { maxBuffer: 50 * 1024 * 1024 }
    );
    const diffData = JSON.parse(reaDiffRaw.toString('utf8').replace(/^\uFEFF/, ''));
    const res = diffData.normalized_result;
    const pct = (res.changed_ratio * 100).toFixed(2) + '%';
    console.log(`[${sec.name}] Compared: ${res.compared_pixels}, Changed: ${res.changed_pixels}, Ratio: ${pct}, Status: ${res.status}`);
  }
}

main().catch(console.error);
