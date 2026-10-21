import WebSocket from 'ws';
import fs from 'fs';
import { execSync } from 'child_process';
import crypto from 'crypto';

async function cropRegion(base64Data, x, y, width, height, ws, sendMsg) {
  const base64Src = `data:image/png;base64,${base64Data}`;
  const res = await sendMsg(ws, 'Runtime.evaluate', {
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
  });

  const croppedBase64 = res.result.value;
  const pngBuf = Buffer.from(croppedBase64, 'base64');
  const sha256 = crypto.createHash('sha256').update(pngBuf).digest('hex');
  return {
    sha256,
    bytes: pngBuf.length,
    media_type: 'image/png',
    data_base64: croppedBase64,
    viewport_width: width,
    viewport_height: height
  };
}

async function runBreakpointTest() {
  const res = await fetch('http://127.0.0.1:9223/json');
  const targets = await res.json();
  const wa = targets.find(t => t.url.includes('web.whatsapp.com') && t.type === 'page');
  const recon = targets.find(t => t.url.includes('127.0.0.1:5173') && t.type === 'page');

  if (!wa || !recon) {
    console.error('Could not find both live and recon targets on port 9223');
    process.exit(1);
  }

  const wsWa = new WebSocket(wa.webSocketDebuggerUrl);
  const wsRecon = new WebSocket(recon.webSocketDebuggerUrl);
  await Promise.all([
    new Promise(r => wsWa.on('open', r)),
    new Promise(r => wsRecon.on('open', r))
  ]);

  let idCounter = 1;
  function sendMsg(ws, method, params = {}) {
    return new Promise(resolve => {
      const id = idCounter++;
      const handler = (msg) => {
        const d = JSON.parse(msg);
        if (d.id === id) { ws.off('message', handler); resolve(d.result); }
      };
      ws.on('message', handler);
      ws.send(JSON.stringify({ id, method, params }));
    });
  }

  // Ensure window is normal (not minimized)
  const win = await sendMsg(wsWa, 'Browser.getWindowForTarget');
  if (win.result?.windowId) {
    await sendMsg(wsWa, 'Browser.setWindowBounds', {
      windowId: win.result.windowId,
      bounds: { windowState: 'normal' }
    });
  }
  await sendMsg(wsWa, 'Page.bringToFront');
  await sendMsg(wsRecon, 'Page.bringToFront');

  // Reload recon to get latest build
  await sendMsg(wsRecon, 'Page.reload');
  await new Promise(r => setTimeout(r, 1200));

  const results = {};

  for (const width of [1440, 600]) {
    console.log(`\n=== Testing Breakpoint: ${width}x737 ===`);
    // Set viewport on both
    await sendMsg(wsWa, 'Emulation.setDeviceMetricsOverride', { width, height: 737, deviceScaleFactor: 1, mobile: false });
    await sendMsg(wsRecon, 'Emulation.setDeviceMetricsOverride', { width, height: 737, deviceScaleFactor: 1, mobile: false });
    await new Promise(r => setTimeout(r, 800));

    // Get measurements
    const measureExpr = `(() => {
      const rail = document.querySelector('header');
      const side = document.querySelector('#side_column') || document.querySelector('#side');
      const main = document.querySelector('#main');
      const rRail = rail?.getBoundingClientRect();
      const rSide = side?.getBoundingClientRect();
      const rMain = main?.getBoundingClientRect();
      return {
        railWidth: rRail ? Math.round(rRail.width) : 64,
        sideWidth: rSide ? Math.round(rSide.width) : 0,
        mainWidth: rMain ? Math.round(rMain.width) : 0
      };
    })()`;

    const liveMeas = (await sendMsg(wsWa, 'Runtime.evaluate', { expression: measureExpr, returnByValue: true })).result.value;
    const reconMeas = (await sendMsg(wsRecon, 'Runtime.evaluate', { expression: measureExpr, returnByValue: true })).result.value;

    console.log(`Live measurements at ${width}:`, liveMeas);
    console.log(`Recon measurements at ${width}:`, reconMeas);

    // Capture screenshots
    console.log(`Capturing live screenshot at ${width}...`);
    await sendMsg(wsWa, 'Page.bringToFront');
    const liveShot = await sendMsg(wsWa, 'Page.captureScreenshot', { format: 'png' });
    const liveData = liveShot.data;

    console.log(`Capturing recon screenshot at ${width}...`);
    await sendMsg(wsRecon, 'Page.bringToFront');
    const reconShot = await sendMsg(wsRecon, 'Page.captureScreenshot', { format: 'png' });
    const reconData = reconShot.data;

    // 1. Crop Nav Rail: [0, 0, 64, 737]
    const liveRailCrop = await cropRegion(liveData, 0, 0, 64, 737, wsRecon, sendMsg);
    const reconRailCrop = await cropRegion(reconData, 0, 0, 64, 737, wsRecon, sendMsg);
    fs.writeFileSync(`analysis/compare/live-${width}-rail-artifact.json`, JSON.stringify(liveRailCrop, null, 2));
    fs.writeFileSync(`analysis/compare/recon-${width}-rail-artifact.json`, JSON.stringify(reconRailCrop, null, 2));

    const railDiffRaw = execSync(`rea compare-web-screenshots analysis/compare/live-${width}-rail-artifact.json analysis/compare/recon-${width}-rail-artifact.json --channel-threshold 5 --format json`, { maxBuffer: 50 * 1024 * 1024 });
    const railDiff = JSON.parse(railDiffRaw.toString('utf8').replace(/^\uFEFF/, '')).normalized_result;

    // 2. Crop Side Header: [65, 0, min(liveSide, reconSide), 64]
    const sideW = Math.min(Math.floor(liveMeas.sideWidth || 336), Math.floor(reconMeas.sideWidth || 336));
    const liveSideCrop = await cropRegion(liveData, 65, 0, sideW, 64, wsRecon, sendMsg);
    const reconSideCrop = await cropRegion(reconData, 65, 0, sideW, 64, wsRecon, sendMsg);
    fs.writeFileSync(`analysis/compare/live-${width}-side-artifact.json`, JSON.stringify(liveSideCrop, null, 2));
    fs.writeFileSync(`analysis/compare/recon-${width}-side-artifact.json`, JSON.stringify(reconSideCrop, null, 2));

    const sideDiffRaw = execSync(`rea compare-web-screenshots analysis/compare/live-${width}-side-artifact.json analysis/compare/recon-${width}-side-artifact.json --channel-threshold 5 --format json`, { maxBuffer: 50 * 1024 * 1024 });
    const sideDiff = JSON.parse(sideDiffRaw.toString('utf8').replace(/^\uFEFF/, '')).normalized_result;

    results[`width_${width}`] = {
      width,
      liveMeas,
      reconMeas,
      railDiff: {
        compared_pixels: railDiff.compared_pixels,
        changed_pixels: railDiff.changed_pixels,
        changed_ratio: railDiff.changed_ratio,
        mean_delta: railDiff.mean_absolute_channel_delta
      },
      sideHeaderDiff: {
        compared_pixels: sideDiff.compared_pixels,
        changed_pixels: sideDiff.changed_pixels,
        changed_ratio: sideDiff.changed_ratio,
        mean_delta: sideDiff.mean_absolute_channel_delta
      }
    };

    fs.writeFileSync(`analysis/compare/breakpoint-${width}.json`, JSON.stringify(results[`width_${width}`], null, 2));
    console.log(`Rail diff at ${width}: ${(railDiff.changed_ratio * 100).toFixed(2)}% (${railDiff.changed_pixels} / ${railDiff.compared_pixels})`);
    console.log(`Side header diff at ${width}: ${(sideDiff.changed_ratio * 100).toFixed(2)}% (${sideDiff.changed_pixels} / ${sideDiff.compared_pixels})`);
  }

  // Restore 1034x737
  await sendMsg(wsWa, 'Emulation.setDeviceMetricsOverride', { width: 1034, height: 737, deviceScaleFactor: 1, mobile: false });
  await sendMsg(wsRecon, 'Emulation.setDeviceMetricsOverride', { width: 1034, height: 737, deviceScaleFactor: 1, mobile: false });

  wsWa.close();
  wsRecon.close();

  fs.writeFileSync('analysis/compare/breakpoints-summary.json', JSON.stringify(results, null, 2));
  console.log('\nBreakpoint test finished successfully. Summary saved to analysis/compare/breakpoints-summary.json');
}

runBreakpointTest().catch(console.error);
