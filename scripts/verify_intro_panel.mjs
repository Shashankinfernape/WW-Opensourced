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

function cdpEval(targetId, expression) {
  return new Promise((resolve, reject) => {
    const ws = new WebSocket(`ws://127.0.0.1:9223/devtools/page/${targetId}`);
    ws.on('open', () => {
      ws.send(JSON.stringify({
        id: 1,
        method: 'Runtime.evaluate',
        params: { expression, returnByValue: true, awaitPromise: true }
      }));
    });
    ws.on('message', data => {
      const msg = JSON.parse(data);
      if (msg.id === 1) {
        ws.close();
        resolve(msg.result?.result?.value);
      }
    });
    ws.on('error', reject);
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

async function run() {
  const { live, recon } = await getTargets();
  console.log('Targets:', { live, recon });

  // 1. Live: click Chats and close drawers
  await activate(live);
  await cdpEval(live, `(() => {
    const c = document.querySelector('button[aria-label="Chats"]');
    if (c) c.click();
    const back = document.querySelector('button[aria-label="Back"]');
    if (back) back.click();
  })()`);
  await new Promise(r => setTimeout(r, 1000));

  // 2. Capture live screenshot
  const liveScRaw = execSync(`npx rea capture-web-screenshot ${CDP_ENDPOINT} ${live} --format json`, { encoding: 'utf8' });
  const liveSc = JSON.parse(liveScRaw.replace(/^\uFEFF/, ''));
  const livePngB64 = liveSc.normalized_result?.artifact?.data_base64;

  // 3. Recon: navigate to /?chat=none
  await activate(recon);
  await cdpEval(recon, `window.location.href = "http://127.0.0.1:5173/?chat=none";`);
  await new Promise(r => setTimeout(r, 2000));
  await activate(recon);

  // 4. Capture recon screenshot
  const reconScRaw = execSync(`npx rea capture-web-screenshot ${CDP_ENDPOINT} ${recon} --format json`, { encoding: 'utf8' });
  const reconSc = JSON.parse(reconScRaw.replace(/^\uFEFF/, ''));
  const reconPngB64 = reconSc.normalized_result?.artifact?.data_base64;

  // 5. Crop IntroPanel region (x: 496..1440, w: 944, h: 765)
  const croppedLive = await cropViaChrome(recon, livePngB64, 496, 0, 944, 765);
  const croppedRecon = await cropViaChrome(recon, reconPngB64, 496, 0, 944, 765);

  const outDir = 'analysis/scenarios_16';
  const liveCropPath = path.join(outDir, `intro_panel_cropped_live.json`);
  const reconCropPath = path.join(outDir, `intro_panel_cropped_recon.json`);
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

  console.log(`-> Intro Panel Evidence ID: ${diff.evidence_id}`);
  console.log(`-> Compared: ${compared}, Changed: ${changed} (${(changedRatio * 100).toFixed(2)}%), Accuracy: ${accuracy} [${status}]`);

  const ledgerPath = 'analysis/audit_16_panels_ledger.json';
  const ledger = JSON.parse(fs.readFileSync(ledgerPath, 'utf8'));
  const existingIdx = ledger.findIndex(x => x.panel === 'intro_panel');
  const entry = {
    panel: 'intro_panel',
    description: 'Default introductory empty state panel',
    url: 'http://127.0.0.1:5173/?chat=none',
    evidence_id: diff.evidence_id,
    compared_pixels: compared,
    changed_pixels: changed,
    changed_ratio: changedRatio,
    accuracy,
    status
  };
  if (existingIdx >= 0) ledger[existingIdx] = entry;
  else ledger.push(entry);
  fs.writeFileSync(ledgerPath, JSON.stringify(ledger, null, 2), 'utf8');
}

run().catch(console.error);
