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
    let idCounter = 1;
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

async function runStatesComparison() {
  const res = await fetch('http://127.0.0.1:9223/json');
  const targets = await res.json();
  const recon = targets.find(t => t.url.includes('5173') && t.type === 'page');

  if (!recon) {
    console.error('No reconstruction tab found!');
    process.exit(1);
  }

  const ws = new WebSocket(recon.webSocketDebuggerUrl);
  await new Promise(r => ws.on('open', r));

  let idCounter = 1;
  function send(method, params = {}) {
    return new Promise((resolve) => {
      const id = idCounter++;
      const handler = (msg) => {
        const data = JSON.parse(msg);
        if (data.id === id) {
          ws.off('message', handler);
          resolve(data.result);
        }
      };
      ws.on('message', handler);
      ws.send(JSON.stringify({ id, method, params }));
    });
  }

  await send('Page.bringToFront');
  await send('Emulation.setDeviceMetricsOverride', {
    width: 1034,
    height: 737,
    deviceScaleFactor: 1,
    mobile: false
  });
  await new Promise(r => setTimeout(r, 500));

  function captureReconScreenshot(name) {
    console.log(`Capturing recon state: ${name}...`);
    const raw = execSync(`rea capture-web-screenshot http://127.0.0.1:9223 ${recon.id} --format json`, { maxBuffer: 50 * 1024 * 1024 });
    const text = raw.toString('utf8').replace(/^\uFEFF/, '');
    const data = JSON.parse(text);
    const artifact = data.normalized_result.artifact;
    fs.writeFileSync(`analysis/compare/recon-${name}-full-artifact.json`, JSON.stringify(artifact, null, 2));
    fs.writeFileSync(`analysis/compare/recon-${name}-full.png`, Buffer.from(artifact.data_base64, 'base64'));
    return artifact;
  }

  // 1. Chat Row Hover State (mouseMoved over second row: x: 200, y: 350)
  await send('Input.dispatchMouseEvent', { type: 'mouseMoved', x: 200, y: 350 });
  await new Promise(r => setTimeout(r, 500));
  captureReconScreenshot('chat-row-hover');
  await send('Input.dispatchMouseEvent', { type: 'mouseMoved', x: 10, y: 10 });
  await new Promise(r => setTimeout(r, 300));

  // 2. Attach Menu State (click attach button)
  await send('Runtime.evaluate', {
    expression: `(() => {
      const btn = Array.from(document.querySelectorAll('button')).find(b => b.getAttribute('aria-label') === 'Attach');
      if (btn) btn.click();
    })()`
  });
  await new Promise(r => setTimeout(r, 600));
  captureReconScreenshot('attach-menu');
  await send('Runtime.evaluate', {
    expression: `(() => {
      const main = document.querySelector('#main');
      if (main) main.click();
    })()`
  });
  await new Promise(r => setTimeout(r, 300));

  // 3. Chat Menu State
  await send('Runtime.evaluate', {
    expression: `(() => {
      const header = document.querySelector('[data-testid="conversation-header"]');
      if (header) {
        const btn = Array.from(header.querySelectorAll('button')).find(b => b.getAttribute('aria-label') === 'Menu');
        if (btn) btn.click();
      }
    })()`
  });
  await new Promise(r => setTimeout(r, 600));
  captureReconScreenshot('chat-menu');
  await send('Runtime.evaluate', { expression: `document.body.click();` });
  await new Promise(r => setTimeout(r, 300));

  // 4. Status panel
  await send('Runtime.evaluate', {
    expression: `(() => {
      const btn = Array.from(document.querySelectorAll('button')).find(b => b.getAttribute('aria-label') === 'Status');
      if (btn) btn.click();
    })()`
  });
  await new Promise(r => setTimeout(r, 800));
  captureReconScreenshot('status-panel');

  // 5. Channels panel
  await send('Runtime.evaluate', {
    expression: `(() => {
      const btn = Array.from(document.querySelectorAll('button')).find(b => b.getAttribute('aria-label') === 'Channels');
      if (btn) btn.click();
    })()`
  });
  await new Promise(r => setTimeout(r, 800));
  captureReconScreenshot('channels-panel');

  // 6. Communities panel
  await send('Runtime.evaluate', {
    expression: `(() => {
      const btn = Array.from(document.querySelectorAll('button')).find(b => b.getAttribute('aria-label') === 'Communities');
      if (btn) btn.click();
    })()`
  });
  await new Promise(r => setTimeout(r, 800));
  captureReconScreenshot('communities-panel');

  // 7. Calls panel
  await send('Runtime.evaluate', {
    expression: `(() => {
      const btn = Array.from(document.querySelectorAll('button')).find(b => b.getAttribute('aria-label') === 'Calls');
      if (btn) btn.click();
    })()`
  });
  await new Promise(r => setTimeout(r, 800));
  captureReconScreenshot('calls-panel');

  // Reset back to Chats tab
  await send('Runtime.evaluate', {
    expression: `(() => {
      const btn = Array.from(document.querySelectorAll('button')).find(b => b.getAttribute('aria-label') === 'Chats');
      if (btn) btn.click();
    })()`
  });
  await new Promise(r => setTimeout(r, 800));
  ws.close();

  // Now, run region comparisons for each state!
  console.log('\n--- Cropping and comparing regional states ---');

  const comparisons = [
    { name: 'chat-row-hover', file: 'chat-row-hover', rect: [65, 320, 413, 72] },
    { name: 'chat-row-selected', file: 'live-screenshot', reconFile: 'recon-screenshot', rect: [65, 280, 413, 72] },
    { name: 'wallpaper-area', file: 'live-screenshot', reconFile: 'recon-screenshot', rect: [478, 64, 556, 609] },
    { name: 'bubbles-structure', file: 'live-screenshot', reconFile: 'recon-screenshot', rect: [478, 64, 556, 300] },
    { name: 'attach-menu', file: 'attach-menu', rect: [478, 400, 300, 273] },
    { name: 'chat-menu', file: 'chat-menu', rect: [800, 64, 220, 280] },
    { name: 'status-panel', file: 'status-panel', rect: [65, 0, 413, 737] },
    { name: 'channels-panel', file: 'channels-panel', rect: [65, 0, 413, 737] },
    { name: 'communities-panel', file: 'communities-panel', rect: [65, 0, 413, 737] },
    { name: 'calls-panel', file: 'calls-panel', rect: [65, 0, 413, 737] },
  ];

  const results = {};

  for (const comp of comparisons) {
    const livePngPath = comp.file.includes('screenshot')
      ? `target_artifacts/whatsapp-web/${comp.file}.png`
      : `analysis/compare/live-${comp.file}-full.png`;
    const reconPngPath = (comp.reconFile || comp.file).includes('screenshot')
      ? `target_artifacts/whatsapp-web/${comp.reconFile || comp.file}.png`
      : `analysis/compare/recon-${comp.file}-full.png`;

    const liveBuf = fs.readFileSync(livePngPath);
    const reconBuf = fs.readFileSync(reconPngPath);

    const [x, y, w, h] = comp.rect;
    const liveCrop = await cropRegionFromBuffer(liveBuf, x, y, w, h);
    const reconCrop = await cropRegionFromBuffer(reconBuf, x, y, w, h);

    const liveArt = { sha256: liveCrop.sha256, bytes: liveCrop.bytes, media_type: liveCrop.media_type, data_base64: liveCrop.data_base64 };
    const reconArt = { sha256: reconCrop.sha256, bytes: reconCrop.bytes, media_type: reconCrop.media_type, data_base64: reconCrop.data_base64 };

    fs.writeFileSync(`analysis/compare/live-${comp.name}-crop-artifact.json`, JSON.stringify(liveArt, null, 2));
    fs.writeFileSync(`analysis/compare/recon-${comp.name}-crop-artifact.json`, JSON.stringify(reconArt, null, 2));

    const diffRaw = execSync(
      `rea compare-web-screenshots analysis/compare/live-${comp.name}-crop-artifact.json analysis/compare/recon-${comp.name}-crop-artifact.json --channel-threshold 5 --format json`,
      { maxBuffer: 50 * 1024 * 1024 }
    );
    const diffData = JSON.parse(diffRaw.toString('utf8').replace(/^\uFEFF/, ''));
    const r = diffData.normalized_result;

    console.log(`[${comp.name}] Compared: ${r.compared_pixels}, Changed: ${r.changed_pixels}, Ratio: ${(r.changed_ratio * 100).toFixed(2)}%, Delta: ${r.mean_absolute_channel_delta}`);
    results[comp.name] = {
      rect: comp.rect,
      compared_pixels: r.compared_pixels,
      changed_pixels: r.changed_pixels,
      changed_ratio: r.changed_ratio,
      mean_absolute_channel_delta: r.mean_absolute_channel_delta
    };
  }

  fs.writeFileSync('analysis/compare/states-summary.json', JSON.stringify(results, null, 2));
  console.log('\nAll states compared successfully! Output written to analysis/compare/states-summary.json');
}

runStatesComparison().catch(console.error);
