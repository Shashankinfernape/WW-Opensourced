import { execSync } from 'child_process';
import fs from 'fs';
import crypto from 'crypto';

const LIVE_TARGET = '33AE831CE803E57482AFAF475003C698';
const RECON_TARGET = '6C1EB6BEA99DB77BBB6E025B42EC3834';

async function activate(targetId) {
  try {
    await fetch(`http://127.0.0.1:9223/json/activate/${targetId}`);
  } catch (e) {}
}

async function cropViaChrome(base64Data, sx, sy, sw, sh) {
  const ws = new WebSocket(`ws://127.0.0.1:9223/devtools/page/${RECON_TARGET}`);
  await new Promise(r => ws.onopen = r);

  const send = (method, params) => new Promise(res => {
    const id = Math.floor(Math.random() * 100000);
    const handler = e => {
      const d = JSON.parse(e.data);
      if (d.id === id) { ws.removeEventListener('message', handler); res(d.result); }
    };
    ws.addEventListener('message', handler);
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
  const sha = crypto.createHash('sha256').update(buf).digest('hex');

  return {
    sha256: sha,
    bytes: buf.length,
    media_type: 'image/png',
    data_base64: croppedB64
  };
}

async function main() {
  console.log('=== Panel 1: Strict Left Sidebar (0..496px) REA Verification ===\n');

  // 1. Capture Full Viewports
  console.log('1. Capturing Live WhatsApp Web via REA...');
  await activate(LIVE_TARGET);
  const liveScRaw = execSync(`npx rea capture-web-screenshot http://127.0.0.1:9223 ${LIVE_TARGET} --format json`, { encoding: 'utf8' });
  const liveSc = JSON.parse(liveScRaw.replace(/^\uFEFF/, ''));

  console.log('2. Capturing Reconstruction via REA...');
  await activate(RECON_TARGET);
  const reconScRaw = execSync(`npx rea capture-web-screenshot http://127.0.0.1:9223 ${RECON_TARGET} --format json`, { encoding: 'utf8' });
  const reconSc = JSON.parse(reconScRaw.replace(/^\uFEFF/, ''));

  // 3. Crop to Left 496px (x: 0..496, y: 0..765)
  console.log('3. Cropping strictly to left 496px sidebar (x: 0..496, y: 0..765)...');
  const liveCropped = await cropViaChrome(liveSc.normalized_result.artifact.data_base64, 0, 0, 496, 765);
  const reconCropped = await cropViaChrome(reconSc.normalized_result.artifact.data_base64, 0, 0, 496, 765);

  fs.writeFileSync('analysis/panel_1_cropped_live_art.json', JSON.stringify(liveCropped), 'utf8');
  fs.writeFileSync('analysis/panel_1_cropped_recon_art.json', JSON.stringify(reconCropped), 'utf8');

  // Also save PNG images for inspection
  fs.writeFileSync('analysis/panel_1_cropped_live.png', Buffer.from(liveCropped.data_base64, 'base64'));
  fs.writeFileSync('analysis/panel_1_cropped_recon.png', Buffer.from(reconCropped.data_base64, 'base64'));

  // 4. Compare with REA
  console.log('4. Running rea compare-web-screenshots on cropped 496px artifacts...');
  const diffRaw = execSync(`npx rea compare-web-screenshots analysis/panel_1_cropped_live_art.json analysis/panel_1_cropped_recon_art.json --channel-threshold 5 --format json`, { encoding: 'utf8' });
  const diff = JSON.parse(diffRaw.replace(/^\uFEFF/, ''));

  const diffEvId = diff.evidence_id;
  const compPixels = diff.normalized_result.compared_pixels;
  const chgPixels = diff.normalized_result.changed_pixels;
  const chgRatio = diff.normalized_result.changed_ratio;
  const accuracy = ((1 - chgRatio) * 100).toFixed(2) + '%';
  const status = chgRatio < 0.15 ? 'PASS' : 'FAIL';

  console.log('\n--- STRICT SIDEBAR (496px) VERIFICATION RESULT ---');
  console.log('Diff Evidence ID:', diffEvId);
  console.log('Compared Pixels:', compPixels.toLocaleString(), '(expected 496 * 765 = 379,440)');
  console.log('Changed Pixels:', chgPixels.toLocaleString());
  console.log('Changed Ratio:', (chgRatio * 100).toFixed(2) + '%');
  console.log('Accuracy Match:', accuracy);
  console.log('Status (< 15% threshold):', status);
}

main().catch(console.error);
