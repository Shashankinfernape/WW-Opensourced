import fs from 'fs';
import path from 'path';
import crypto from 'crypto';
import { execSync } from 'child_process';
import WebSocket from 'ws';

const CDP_ENDPOINT = 'http://127.0.0.1:9223';

async function getTargets() {
  const res = await fetch(`${CDP_ENDPOINT}/json/list`);
  const list = await res.json();
  const live = list.find(t => t.url.includes('web.whatsapp.com'))?.id;
  const recon = list.find(t => t.url.includes(':5173'))?.id;
  return { live, recon };
}

async function activate(targetId) {
  try {
    await fetch(`${CDP_ENDPOINT}/json/activate/${targetId}`);
    await new Promise(r => setTimeout(r, 200));
  } catch (e) {}
}

async function cdpEval(targetId, expression) {
  await activate(targetId);
  return new Promise((resolve, reject) => {
    const timer = setTimeout(() => {
      try { ws.close(); } catch (e) {}
      resolve(null);
    }, 4000);

    const ws = new WebSocket(`ws://127.0.0.1:9223/devtools/page/${targetId}`);
    ws.on('open', () => {
      ws.send(JSON.stringify({
        id: 1,
        method: 'Runtime.evaluate',
        params: { expression, returnByValue: true, awaitPromise: true }
      }));
    });
    ws.on('message', data => {
      clearTimeout(timer);
      const msg = JSON.parse(data);
      if (msg.id === 1) {
        ws.close();
        resolve(msg.result?.result?.value);
      }
    });
    ws.on('error', err => {
      clearTimeout(timer);
      reject(err);
    });
  });
}

async function cropViaChrome(reconTargetId, base64Data, sx, sy, sw, sh) {
  await activate(reconTargetId);
  const ws = new WebSocket(`ws://127.0.0.1:9223/devtools/page/${reconTargetId}`);
  await new Promise(r => ws.on('open', r));

  const send = (method, params) => new Promise(res => {
    const id = Math.floor(Math.random() * 100000);
    const handler = raw => {
      const d = JSON.parse(raw);
      if (d.id === id) { ws.removeListener('message', handler); res(d.result); }
    };
    ws.on('message', handler);
    ws.send(JSON.stringify({ id, method, params }));
  });

  const expr = `(async () => {
    const img = new Image();
    img.src = 'data:image/png;base64,${base64Data}';
    await new Promise(r => img.onload = r);
    const canvas = document.createElement('canvas');
    canvas.width = ${sw};
    canvas.height = ${sh};
    const ctx = canvas.getContext('2d');
    ctx.drawImage(img, ${sx}, ${sy}, ${sw}, ${sh}, 0, 0, ${sw}, ${sh});
    return canvas.toDataURL('image/png').split(',')[1];
  })()`;

  const evalRes = await send('Runtime.evaluate', {
    expression: expr,
    awaitPromise: true,
    returnByValue: true
  });

  ws.close();
  const croppedB64 = evalRes.result?.value;
  const buf = Buffer.from(croppedB64, 'base64');
  const sha256 = crypto.createHash('sha256').update(buf).digest('hex');
  return {
    sha256,
    bytes: buf.length,
    media_type: 'image/png',
    data_base64: croppedB64
  };
}

const PANELS = [
  {
    panel: 'calls_panel',
    description: 'Calls panel with call log entries',
    reconUrl: 'http://127.0.0.1:5173/?tab=calls',
    crop: { x: 0, y: 0, w: 496, h: 765 },
    async triggerLive(liveId) {
      await cdpEval(liveId, `(() => {
        const c = document.querySelector('button[aria-label="Calls"]');
        if (c) c.click();
      })()`);
    }
  },
  {
    panel: 'channels_panel',
    description: 'Channels panel with newsletter list',
    reconUrl: 'http://127.0.0.1:5173/?tab=channels',
    crop: { x: 0, y: 0, w: 496, h: 765 },
    async triggerLive(liveId) {
      await cdpEval(liveId, `(() => {
        const c = document.querySelector('button[aria-label="Channels"]');
        if (c) c.click();
      })()`);
    }
  },
  {
    panel: 'communities_drawer',
    description: 'Communities panel',
    reconUrl: 'http://127.0.0.1:5173/?tab=communities',
    crop: { x: 0, y: 0, w: 496, h: 765 },
    async triggerLive(liveId) {
      await cdpEval(liveId, `(() => {
        const c = document.querySelector('button[aria-label="Communities"]');
        if (c) c.click();
      })()`);
    }
  },
  {
    panel: 'status_drawer',
    description: 'Status drawer with story updates',
    reconUrl: 'http://127.0.0.1:5173/?tab=status',
    crop: { x: 0, y: 0, w: 496, h: 765 },
    async triggerLive(liveId) {
      await cdpEval(liveId, `(() => {
        const s = document.querySelector('button[aria-label="Status"]');
        if (s) s.click();
      })()`);
    }
  },
  {
    panel: 'intro_panel',
    description: 'Default introductory empty state panel',
    reconUrl: 'http://127.0.0.1:5173/?chat=none',
    crop: { x: 496, y: 0, w: 944, h: 765 },
    async triggerLive(liveId) {
      await cdpEval(liveId, `(() => {
        const c = document.querySelector('button[aria-label="Chats"]');
        if (c) c.click();
        const back = document.querySelector('button[aria-label="Back"]');
        if (back) back.click();
      })()`);
    }
  }
];

async function run() {
  console.log('=== RESUMING REA PANEL VERIFICATION PIPELINE ===\n');
  const outDir = 'analysis/scenarios_16';
  fs.mkdirSync(outDir, { recursive: true });

  const ledgerPath = 'analysis/audit_16_panels_ledger.json';
  let ledger = [];
  if (fs.existsSync(ledgerPath)) {
    ledger = JSON.parse(fs.readFileSync(ledgerPath, 'utf8'));
  }

  for (let i = 0; i < PANELS.length; i++) {
    const p = PANELS[i];
    console.log(`\n[${i + 1}/${PANELS.length}] Running REA on: ${p.panel} (${p.description})`);

    const { live, recon } = await getTargets();
    if (!live || !recon) {
      console.error('Missing target: live=', live, 'recon=', recon);
      process.exit(1);
    }

    // 1. Trigger state on live
    await p.triggerLive(live);
    await new Promise(r => setTimeout(r, 600));

    // 2. Capture live screenshot with rea capture-web-screenshot
    await activate(live);
    const liveScRaw = execSync(`npx rea capture-web-screenshot ${CDP_ENDPOINT} ${live} --format json`, { encoding: 'utf8' });
    const liveSc = JSON.parse(liveScRaw.replace(/^\uFEFF/, ''));
    const livePngB64 = liveSc.normalized_result?.artifact?.data_base64;

    // 3. Navigate Recon target
    await cdpEval(recon, `window.location.href = "${p.reconUrl}";`);
    await new Promise(r => setTimeout(r, 1000));
    await activate(recon);

    // 4. Capture recon screenshot with rea capture-web-screenshot
    const reconScRaw = execSync(`npx rea capture-web-screenshot ${CDP_ENDPOINT} ${recon} --format json`, { encoding: 'utf8' });
    const reconSc = JSON.parse(reconScRaw.replace(/^\uFEFF/, ''));
    const reconPngB64 = reconSc.normalized_result?.artifact?.data_base64;

    // 5. Crop both to panel bounds
    const croppedLive = await cropViaChrome(recon, livePngB64, p.crop.x, p.crop.y, p.crop.w, p.crop.h);
    const croppedRecon = await cropViaChrome(recon, reconPngB64, p.crop.x, p.crop.y, p.crop.w, p.crop.h);

    const liveCropPath = path.join(outDir, `${p.panel}_cropped_live.json`);
    const reconCropPath = path.join(outDir, `${p.panel}_cropped_recon.json`);
    fs.writeFileSync(liveCropPath, JSON.stringify(croppedLive, null, 2), 'utf8');
    fs.writeFileSync(reconCropPath, JSON.stringify(croppedRecon, null, 2), 'utf8');

    // 6. Compare with rea compare-web-screenshots
    const diffRaw = execSync(`npx rea compare-web-screenshots "${liveCropPath}" "${reconCropPath}" --channel-threshold 5 --format json`, { encoding: 'utf8' });
    const diff = JSON.parse(diffRaw.replace(/^\uFEFF/, ''));

    const compared = diff.normalized_result?.compared_pixels || 0;
    const changed = diff.normalized_result?.changed_pixels || 0;
    const changedRatio = diff.normalized_result?.changed_ratio || 0;
    const accuracy = ((1 - changedRatio) * 100).toFixed(2) + '%';
    const status = changedRatio < 0.15 ? 'PASS' : 'WARN';

    console.log(`  -> Evidence ID: ${diff.evidence_id}`);
    console.log(`  -> Compared: ${compared}, Changed: ${changed} (${(changedRatio * 100).toFixed(2)}%), Accuracy: ${accuracy} [${status}]`);

    const existingIdx = ledger.findIndex(x => x.panel === p.panel);
    const entry = {
      panel: p.panel,
      description: p.description,
      url: p.reconUrl,
      evidence_id: diff.evidence_id,
      compared_pixels: compared,
      changed_pixels: changed,
      changed_ratio: changedRatio,
      accuracy,
      status
    };
    if (existingIdx >= 0) {
      ledger[existingIdx] = entry;
    } else {
      ledger.push(entry);
    }
  }

  fs.writeFileSync(ledgerPath, JSON.stringify(ledger, null, 2), 'utf8');
  console.log('\n=== COMPLETE PIPELINE FINISHED. Updated analysis/audit_16_panels_ledger.json ===');
}

run().catch(console.error);
