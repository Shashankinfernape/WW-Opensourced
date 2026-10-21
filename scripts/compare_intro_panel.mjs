import WebSocket from 'ws';
import fs from 'fs';
import { execSync } from 'child_process';
import crypto from 'crypto';

async function cropRegion(base64Src, x, y, width, height, targetWsUrl) {
  const ws = new WebSocket(targetWsUrl);
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
          img.src = 'data:image/png;base64,${base64Src}';
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

async function runIntroComparison() {
  console.log('--- Starting Intro Panel Full-Screen Comparison ---');
  const res = await fetch('http://127.0.0.1:9223/json');
  const targets = await res.json();
  const recon = targets.find(t => t.url.includes('5173') && t.type === 'page');
  const live = targets.find(t => t.url.includes('web.whatsapp.com') && t.type === 'page');

  if (!recon || !live) {
    console.error('Missing targets:', { recon: !!recon, live: !!live });
    process.exit(1);
  }

  // 1. Activate Live tab and ensure intro panel is displayed
  console.log('Activating live tab...');
  let ws = new WebSocket(live.webSocketDebuggerUrl);
  await new Promise(r => ws.on('open', r));
  ws.send(JSON.stringify({ id: 1, method: 'Page.bringToFront' }));
  await new Promise(r => setTimeout(r, 600));

  // Check if live has intro panel; if not, close chat
  const hasIntro = await new Promise(res => {
    const h = (m) => {
      const d = JSON.parse(m);
      if (d.id === 2) { ws.off('message', h); res(d.result?.result?.value); }
    };
    ws.on('message', h);
    ws.send(JSON.stringify({
      id: 2,
      method: 'Runtime.evaluate',
      params: {
        expression: `(() => {
          const intro = document.querySelector('[data-testid="intro-panel"]');
          if (intro) return true;
          // Click close chat
          const menuBtn = document.querySelector('header[data-testid="conversation-header"] button[aria-label="Menu"]') || Array.from(document.querySelectorAll('header[data-testid="conversation-header"] button')).pop();
          if (menuBtn) menuBtn.click();
          return false;
        })()`,
        returnByValue: true
      }
    }));
  });

  if (!hasIntro) {
    await new Promise(r => setTimeout(r, 400));
    await new Promise(res => {
      const h = (m) => {
        const d = JSON.parse(m);
        if (d.id === 3) { ws.off('message', h); res(); }
      };
      ws.on('message', h);
      ws.send(JSON.stringify({
        id: 3,
        method: 'Runtime.evaluate',
        params: {
          expression: `(() => {
            const items = Array.from(document.querySelectorAll('div[role="button"], li, [role="menuitem"]'));
            const closeItem = items.find(it => it.innerText && it.innerText.includes('Close chat'));
            if (closeItem) closeItem.click();
          })()`
        }
      }));
    });
    await new Promise(r => setTimeout(r, 600));
  }

  // Get live intro rect
  const liveIntroRect = await new Promise(res => {
    const h = (m) => {
      const d = JSON.parse(m);
      if (d.id === 4) { ws.off('message', h); res(d.result?.result?.value); }
    };
    ws.on('message', h);
    ws.send(JSON.stringify({
      id: 4,
      method: 'Runtime.evaluate',
      params: {
        expression: `(() => {
          const intro = document.querySelector('[data-testid="intro-panel"]');
          if (!intro) return null;
          const r = intro.getBoundingClientRect();
          return { x: Math.round(r.x), y: Math.round(r.y), width: Math.round(r.width), height: Math.round(r.height) };
        })()`,
        returnByValue: true
      }
    }));
  });
  console.log('Live intro rect:', liveIntroRect);
  ws.close();

  // Capture Live screenshot
  console.log('Capturing live screenshot...');
  const liveRaw = execSync(`rea capture-web-screenshot http://127.0.0.1:9223 ${live.id} --format json`, { maxBuffer: 50 * 1024 * 1024 });
  const liveData = JSON.parse(liveRaw.toString('utf8').replace(/^\uFEFF/, ''));
  const liveArtifact = liveData.normalized_result.artifact;
  fs.writeFileSync('analysis/compare/live-intro-full.png', Buffer.from(liveArtifact.data_base64, 'base64'));

  // 2. Activate Recon tab
  console.log('Activating recon tab...');
  ws = new WebSocket(recon.webSocketDebuggerUrl);
  await new Promise(r => ws.on('open', r));
  ws.send(JSON.stringify({ id: 1, method: 'Page.bringToFront' }));
  ws.send(JSON.stringify({ id: 2, method: 'Page.reload' }));
  await new Promise(r => setTimeout(r, 1200));

  // Get recon intro rect
  const reconIntroRect = await new Promise(res => {
    const h = (m) => {
      const d = JSON.parse(m);
      if (d.id === 3) { ws.off('message', h); res(d.result?.result?.value); }
    };
    ws.on('message', h);
    ws.send(JSON.stringify({
      id: 3,
      method: 'Runtime.evaluate',
      params: {
        expression: `(() => {
          const intro = document.querySelector('[data-testid="intro-panel"]');
          if (!intro) return null;
          const r = intro.getBoundingClientRect();
          return { x: Math.round(r.x), y: Math.round(r.y), width: Math.round(r.width), height: Math.round(r.height) };
        })()`,
        returnByValue: true
      }
    }));
  });
  console.log('Recon intro rect:', reconIntroRect);
  ws.close();

  // Capture Recon screenshot
  console.log('Capturing recon screenshot...');
  const reconRaw = execSync(`rea capture-web-screenshot http://127.0.0.1:9223 ${recon.id} --format json`, { maxBuffer: 50 * 1024 * 1024 });
  const reconData = JSON.parse(reconRaw.toString('utf8').replace(/^\uFEFF/, ''));
  const reconArtifact = reconData.normalized_result.artifact;
  fs.writeFileSync('analysis/compare/recon-intro-full.png', Buffer.from(reconArtifact.data_base64, 'base64'));

  // 3. Crop both to intro rect
  const rect = liveIntroRect || reconIntroRect || { x: 496, y: 0, width: 944, height: 765 };
  console.log('Cropping intro region:', rect);

  const croppedLive = await cropRegion(liveArtifact.data_base64, rect.x, rect.y, rect.width, rect.height, recon.webSocketDebuggerUrl);
  const croppedRecon = await cropRegion(reconArtifact.data_base64, rect.x, rect.y, rect.width, rect.height, recon.webSocketDebuggerUrl);

  fs.writeFileSync('analysis/compare/live-intro-cropped.png', croppedLive.buffer);
  fs.writeFileSync('analysis/compare/recon-intro-cropped.png', croppedRecon.buffer);

  const liveCropArtifact = {
    sha256: croppedLive.sha256,
    bytes: croppedLive.bytes,
    media_type: 'image/png',
    data_base64: croppedLive.data_base64
  };
  const reconCropArtifact = {
    sha256: croppedRecon.sha256,
    bytes: croppedRecon.bytes,
    media_type: 'image/png',
    data_base64: croppedRecon.data_base64
  };

  fs.writeFileSync('analysis/compare/live-intro-crop-artifact.json', JSON.stringify(liveCropArtifact, null, 2));
  fs.writeFileSync('analysis/compare/recon-intro-crop-artifact.json', JSON.stringify(reconCropArtifact, null, 2));

  // 4. Run rea compare-web-screenshots
  console.log('Comparing cropped artifacts with rea compare-web-screenshots...');
  const diffRaw = execSync(`rea compare-web-screenshots analysis/compare/live-intro-crop-artifact.json analysis/compare/recon-intro-crop-artifact.json --channel-threshold 10 --format json`);
  const diffResult = JSON.parse(diffRaw.toString('utf8').replace(/^\uFEFF/, ''));
  fs.writeFileSync('analysis/compare/intro-panel.json', JSON.stringify(diffResult, null, 2));

  console.log('\n--- Intro Panel Comparison Result ---');
  console.log('Compared Pixels:', diffResult.normalized_result.compared_pixels);
  console.log('Changed Pixels:', diffResult.normalized_result.changed_pixels);
  console.log('Changed Ratio:', (diffResult.normalized_result.changed_ratio * 100).toFixed(2) + '%');
  console.log('Mean Delta:', diffResult.normalized_result.mean_channel_delta);
}

runIntroComparison().catch(console.error);
