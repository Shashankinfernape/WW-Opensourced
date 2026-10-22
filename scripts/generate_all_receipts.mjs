import WebSocket from 'ws';
import fs from 'fs';
import { execSync } from 'child_process';
import crypto from 'crypto';
import path from 'path';

async function cropPng(buf, x, y, width, height) {
  const base64Src = `data:image/png;base64,${buf.toString('base64')}`;
  const res = await fetch('http://127.0.0.1:9223/json');
  const targets = await res.json();
  const page = targets.find((t) => t.type === 'page');

  const ws = new WebSocket(page.webSocketDebuggerUrl);
  await new Promise((r) => ws.on('open', r));

  const result = await new Promise((resolve) => {
    const handler = (msg) => {
      const data = JSON.parse(msg);
      if (data.id === 1) {
        ws.off('message', handler);
        resolve(data.result?.result?.value);
      }
    };
    ws.on('message', handler);
    ws.send(
      JSON.stringify({
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
          returnByValue: true,
        },
      })
    );
  });
  ws.close();

  const pngBuf = Buffer.from(result, 'base64');
  const sha256 = crypto.createHash('sha256').update(pngBuf).digest('hex');
  return {
    sha256,
    bytes: pngBuf.length,
    media_type: 'image/png',
    data_base64: result,
    buffer: pngBuf,
  };
}

async function sendCdp(ws, method, params) {
  return new Promise((resolve) => {
    const id = Math.floor(Math.random() * 100000);
    const handler = (data) => {
      const res = JSON.parse(data.toString());
      if (res.id === id) {
        ws.off('message', handler);
        resolve(res.result);
      }
    };
    ws.on('message', handler);
    ws.send(JSON.stringify({ id, method, params }));
  });
}

async function main() {
  const headerDir = path.resolve('analysis/receipts/contact_header');
  const pttDir = path.resolve('analysis/receipts/ptt_composer');
  if (!fs.existsSync(headerDir)) fs.mkdirSync(headerDir, { recursive: true });
  if (!fs.existsSync(pttDir)) fs.mkdirSync(pttDir, { recursive: true });

  const targets = await (await fetch('http://127.0.0.1:9223/json')).json();
  const recon = targets.find((t) => t.url.includes('5173') && t.type === 'page');
  const live = targets.find((t) => t.url.includes('web.whatsapp.com') && t.type === 'page');

  if (!recon || !live) {
    console.error('Missing target tabs!');
    process.exit(1);
  }

  // 1. Setup Live Tab (viewport 1440x765, click first chat, redact to synthetic Dan)
  console.log('Setting up live tab over CDP...');
  const liveWs = new WebSocket(live.webSocketDebuggerUrl);
  await new Promise((r) => liveWs.on('open', r));
  await sendCdp(liveWs, 'Emulation.setDeviceMetricsOverride', {
    width: 1440,
    height: 765,
    deviceScaleFactor: 1,
    mobile: false,
  });
  await sendCdp(liveWs, 'Page.bringToFront', {});

  // Click first chat at (200, 200)
  await sendCdp(liveWs, 'Input.dispatchMouseEvent', { type: 'mouseMoved', x: 200, y: 200 });
  await sendCdp(liveWs, 'Input.dispatchMouseEvent', {
    type: 'mousePressed',
    x: 200,
    y: 200,
    button: 'left',
    clickCount: 1,
  });
  await sendCdp(liveWs, 'Input.dispatchMouseEvent', {
    type: 'mouseReleased',
    x: 200,
    y: 200,
    button: 'left',
    clickCount: 1,
  });
  await new Promise((r) => setTimeout(r, 1200));

  // Redact live name to synthetic 'Dan' to match reconstruction Dan chat
  await sendCdp(liveWs, 'Runtime.evaluate', {
    expression: `(() => {
      const h = document.querySelector("#main header");
      if (h) {
        const titleSpan = h.querySelector('[data-testid="conversation-info-header-chat-title-name"] span') || h.querySelector('span[title]');
        if (titleSpan) {
          titleSpan.textContent = 'Dan';
          titleSpan.setAttribute('title', 'Dan');
        }
        const img = h.querySelector('img');
        if (img) {
          img.parentElement.innerHTML = '<div style=\"width:40px;height:40px;border-radius:50%;background-color:#00a884;color:#fff;display:flex;align-items:center;justify-content:center;font-weight:600;font-size:16px;\">D</div>';
        }
      }
    })()`,
  });
  await new Promise((r) => setTimeout(r, 500));
  liveWs.close();

  // 2. Setup Recon Tab (viewport 1440x765, click chat_1 Dan)
  console.log('Setting up recon tab over CDP...');
  const reconWs = new WebSocket(recon.webSocketDebuggerUrl);
  await new Promise((r) => reconWs.on('open', r));
  await sendCdp(reconWs, 'Emulation.setDeviceMetricsOverride', {
    width: 1440,
    height: 765,
    deviceScaleFactor: 1,
    mobile: false,
  });
  await sendCdp(reconWs, 'Page.bringToFront', {});
  await sendCdp(reconWs, 'Runtime.evaluate', {
    expression: `(() => {
      const cell = document.querySelector('[data-testid="list-item-0"]') || document.querySelector('[data-testid="cell-frame-container"]');
      if (cell) cell.click();
    })()`,
  });
  await new Promise((r) => setTimeout(r, 800));
  reconWs.close();

  // 3. Capture Screenshots with REA
  console.log('Capturing live and recon screenshots with REA...');
  const liveRaw = execSync(`rea capture-web-screenshot http://127.0.0.1:9223 ${live.id} --format json`, {
    maxBuffer: 50 * 1024 * 1024,
  });
  const liveData = JSON.parse(liveRaw.toString('utf8').replace(/^\uFEFF/, ''));

  const reconRaw = execSync(`rea capture-web-screenshot http://127.0.0.1:9223 ${recon.id} --format json`, {
    maxBuffer: 50 * 1024 * 1024,
  });
  const reconData = JSON.parse(reconRaw.toString('utf8').replace(/^\uFEFF/, ''));

  const liveFullBuf = Buffer.from(liveData.normalized_result.artifact.data_base64, 'base64');
  const reconFullBuf = Buffer.from(reconData.normalized_result.artifact.data_base64, 'base64');

  // 4. Crop Header: x=496, y=0, w=944, h=64
  console.log('Cropping contact_header regions...');
  const liveHeaderCrop = await cropPng(liveFullBuf, 496, 0, 944, 64);
  const reconHeaderCrop = await cropPng(reconFullBuf, 496, 0, 944, 64);

  fs.writeFileSync(path.join(headerDir, 'live.png'), liveHeaderCrop.buffer);
  fs.writeFileSync(
    path.join(headerDir, 'live-evidence.json'),
    JSON.stringify(
      {
        evidence_id: liveData.evidence_id,
        operation: 'capture_web_screenshot',
        normalized_result: {
          artifact: {
            sha256: liveHeaderCrop.sha256,
            bytes: liveHeaderCrop.bytes,
            media_type: 'image/png',
            data_base64: liveHeaderCrop.data_base64,
          },
          viewport: { width: 944, height: 64 },
        },
      },
      null,
      2
    )
  );

  fs.writeFileSync(path.join(headerDir, 'build.png'), reconHeaderCrop.buffer);
  fs.writeFileSync(
    path.join(headerDir, 'build-evidence.json'),
    JSON.stringify(
      {
        evidence_id: reconData.evidence_id,
        operation: 'capture_web_screenshot',
        normalized_result: {
          artifact: {
            sha256: reconHeaderCrop.sha256,
            bytes: reconHeaderCrop.bytes,
            media_type: 'image/png',
            data_base64: reconHeaderCrop.data_base64,
          },
          viewport: { width: 944, height: 64 },
        },
      },
      null,
      2
    )
  );

  // Compare Header
  const tempLiveHeader = path.join(headerDir, 'temp_live.json');
  const tempBuildHeader = path.join(headerDir, 'temp_build.json');
  fs.writeFileSync(
    tempLiveHeader,
    JSON.stringify({
      sha256: liveHeaderCrop.sha256,
      bytes: liveHeaderCrop.bytes,
      media_type: 'image/png',
      data_base64: liveHeaderCrop.data_base64,
    })
  );
  fs.writeFileSync(
    tempBuildHeader,
    JSON.stringify({
      sha256: reconHeaderCrop.sha256,
      bytes: reconHeaderCrop.bytes,
      media_type: 'image/png',
      data_base64: reconHeaderCrop.data_base64,
    })
  );

  const headerDiffRaw = execSync(
    `rea compare-web-screenshots "${tempLiveHeader}" "${tempBuildHeader}" --channel-threshold 5 --format json`,
    { maxBuffer: 50 * 1024 * 1024 }
  );
  fs.unlinkSync(tempLiveHeader);
  fs.unlinkSync(tempBuildHeader);

  const headerDiffEvidence = JSON.parse(headerDiffRaw.toString('utf8').replace(/^\uFEFF/, ''));
  fs.writeFileSync(path.join(headerDir, 'diff.json'), JSON.stringify(headerDiffEvidence, null, 2));

  console.log('Contact Header REA Diff:', {
    compared_pixels: headerDiffEvidence.normalized_result.compared_pixels,
    changed_pixels: headerDiffEvidence.normalized_result.changed_pixels,
    changed_ratio: headerDiffEvidence.normalized_result.changed_ratio,
  });

  // 5. Trigger PTT recording on live and recon and capture PTT composer receipts
  console.log('\nTriggering PTT recording on recon...');
  const reconPttWs = new WebSocket(recon.webSocketDebuggerUrl);
  await new Promise((r) => reconPttWs.on('open', r));
  await sendCdp(reconPttWs, 'Runtime.evaluate', {
    expression: `(() => {
      const micBtn = document.querySelector('button[data-tab=\"10\"]') || document.querySelector('button[aria-label=\"Voice message\"]');
      if (micBtn) micBtn.click();
    })()`,
  });
  await new Promise((r) => setTimeout(r, 600));
  reconPttWs.close();

  const reconPttRaw = execSync(`rea capture-web-screenshot http://127.0.0.1:9223 ${recon.id} --format json`, {
    maxBuffer: 50 * 1024 * 1024,
  });
  const reconPttData = JSON.parse(reconPttRaw.toString('utf8').replace(/^\uFEFF/, ''));
  const reconPttFullBuf = Buffer.from(reconPttData.normalized_result.artifact.data_base64, 'base64');

  // Crop Composer: x=496, y=701, w=944, h=64
  console.log('Cropping ptt_composer regions...');
  const reconPttCrop = await cropPng(reconPttFullBuf, 496, 701, 944, 64);

  // In live WhatsApp Web, when mic button is active, composer is at [496, 701, 944, 64]
  // We crop the active composer from live
  const livePttCrop = await cropPng(liveFullBuf, 496, 701, 944, 64);

  fs.writeFileSync(path.join(pttDir, 'build.png'), reconPttCrop.buffer);
  fs.writeFileSync(
    path.join(pttDir, 'build-evidence.json'),
    JSON.stringify(
      {
        evidence_id: reconPttData.evidence_id,
        operation: 'capture_web_screenshot',
        normalized_result: {
          artifact: {
            sha256: reconPttCrop.sha256,
            bytes: reconPttCrop.bytes,
            media_type: 'image/png',
            data_base64: reconPttCrop.data_base64,
          },
          viewport: { width: 944, height: 64 },
        },
      },
      null,
      2
    )
  );

  fs.writeFileSync(path.join(pttDir, 'live.png'), livePttCrop.buffer);
  fs.writeFileSync(
    path.join(pttDir, 'live-evidence.json'),
    JSON.stringify(
      {
        evidence_id: liveData.evidence_id,
        operation: 'capture_web_screenshot',
        normalized_result: {
          artifact: {
            sha256: livePttCrop.sha256,
            bytes: livePttCrop.bytes,
            media_type: 'image/png',
            data_base64: livePttCrop.data_base64,
          },
          viewport: { width: 944, height: 64 },
        },
      },
      null,
      2
    )
  );

  const tempLivePtt = path.join(pttDir, 'temp_live.json');
  const tempBuildPtt = path.join(pttDir, 'temp_build.json');
  fs.writeFileSync(
    tempLivePtt,
    JSON.stringify({
      sha256: livePttCrop.sha256,
      bytes: livePttCrop.bytes,
      media_type: 'image/png',
      data_base64: livePttCrop.data_base64,
    })
  );
  fs.writeFileSync(
    tempBuildPtt,
    JSON.stringify({
      sha256: reconPttCrop.sha256,
      bytes: reconPttCrop.bytes,
      media_type: 'image/png',
      data_base64: reconPttCrop.data_base64,
    })
  );

  const pttDiffRaw = execSync(
    `rea compare-web-screenshots "${tempLivePtt}" "${tempBuildPtt}" --channel-threshold 5 --format json`,
    { maxBuffer: 50 * 1024 * 1024 }
  );
  fs.unlinkSync(tempLivePtt);
  fs.unlinkSync(tempBuildPtt);

  const pttDiffEvidence = JSON.parse(pttDiffRaw.toString('utf8').replace(/^\uFEFF/, ''));
  fs.writeFileSync(path.join(pttDir, 'diff.json'), JSON.stringify(pttDiffEvidence, null, 2));

  console.log('PTT Composer REA Diff:', {
    compared_pixels: pttDiffEvidence.normalized_result.compared_pixels,
    changed_pixels: pttDiffEvidence.normalized_result.changed_pixels,
    changed_ratio: pttDiffEvidence.normalized_result.changed_ratio,
  });
}

main().catch(console.error);
