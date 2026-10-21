import fs from 'fs';
import path from 'path';
import crypto from 'crypto';
import { execSync } from 'child_process';
import WebSocket from 'ws';

const liveTargetId = '33AE831CE803E57482AFAF475003C698';
const reconTargetId = '6C1EB6BEA99DB77BBB6E025B42EC3834';
const cdpEndpoint = 'http://127.0.0.1:9223';

async function cropViaChrome(base64Data, sx, sy, sw, sh) {
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
  const sha = crypto.createHash('sha256').update(buf).digest('hex');

  return {
    sha256: sha,
    bytes: buf.length,
    media_type: 'image/png',
    data_base64: croppedB64
  };
}

async function main() {
  console.log('=== Panel 1: REA Comparator 1 (DOM & Accessibility Tree Diff) ===');

  // 1. Inspect Live Web Page
  console.log('1. Capturing Live inspect-web-page...');
  const liveInspectPath = path.resolve('analysis/panel_1_live_inspect.json');
  const liveInspectOut = execSync(
    `npx rea inspect-web-page ${cdpEndpoint} ${liveTargetId} --include-accessibility-text --format json`,
    { encoding: 'utf8', maxBuffer: 50 * 1024 * 1024 }
  );
  fs.writeFileSync(liveInspectPath, liveInspectOut, 'utf8');
  const liveInspectParsed = JSON.parse(liveInspectOut);
  console.log('  -> Live Inspect Evidence ID:', liveInspectParsed.evidence_id);

  // 2. Inspect Recon Web Page
  console.log('2. Capturing Recon inspect-web-page...');
  const reconInspectPath = path.resolve('analysis/panel_1_recon_inspect.json');
  const reconInspectOut = execSync(
    `npx rea inspect-web-page ${cdpEndpoint} ${reconTargetId} --include-accessibility-text --format json`,
    { encoding: 'utf8', maxBuffer: 50 * 1024 * 1024 }
  );
  fs.writeFileSync(reconInspectPath, reconInspectOut, 'utf8');
  const reconInspectParsed = JSON.parse(reconInspectOut);
  console.log('  -> Recon Inspect Evidence ID:', reconInspectParsed.evidence_id);

  // 3. Compare Web Captures (DOM & Accessibility Tree Diff)
  console.log('3. Running rea compare-web-captures...');
  const captureDiffOut = execSync(
    `npx rea compare-web-captures "${liveInspectPath}" "${reconInspectPath}" --format json`,
    { encoding: 'utf8', maxBuffer: 50 * 1024 * 1024 }
  );
  fs.writeFileSync('analysis/panel_1_capture_diff.json', captureDiffOut, 'utf8');
  const captureDiff = JSON.parse(captureDiffOut);
  console.log('  -> Compare Web Captures Evidence ID:', captureDiff.evidence_id);
  console.log('  -> Structural Match Details:', JSON.stringify(captureDiff.normalized_result || captureDiff.summary || {}, null, 2).slice(0, 500));

  console.log('\n=== Panel 1: REA Comparator 3 (Strict Cropped 496px Pixel Diff) ===');

  // 4. Capture Live & Recon Web Screenshots
  console.log('4. Capturing Live Screenshot via REA...');
  const liveScOut = execSync(
    `npx rea capture-web-screenshot ${cdpEndpoint} ${liveTargetId} --format json`,
    { encoding: 'utf8', maxBuffer: 50 * 1024 * 1024 }
  );
  const liveSc = JSON.parse(liveScOut);

  console.log('5. Capturing Recon Screenshot via REA...');
  const reconScOut = execSync(
    `npx rea capture-web-screenshot ${cdpEndpoint} ${reconTargetId} --format json`,
    { encoding: 'utf8', maxBuffer: 50 * 1024 * 1024 }
  );
  const reconSc = JSON.parse(reconScOut);

  // Crop strictly to x: 0..496, y: 0..765
  console.log('6. Cropping live & recon to 496x765 sidebar via Chrome canvas...');
  const croppedLive = await cropViaChrome(liveSc.raw_result.png_base64, 0, 0, 496, 765);
  const croppedRecon = await cropViaChrome(reconSc.raw_result.png_base64, 0, 0, 496, 765);

  fs.writeFileSync('analysis/panel_1_cropped_live.png', Buffer.from(croppedLive.data_base64, 'base64'));
  fs.writeFileSync('analysis/panel_1_cropped_recon.png', Buffer.from(croppedRecon.data_base64, 'base64'));

  fs.writeFileSync('analysis/panel_1_cropped_live_art.json', JSON.stringify({
    schema: 'PngDigestArtifact',
    kind: 'png-artifact',
    png_base64: croppedLive.data_base64,
    width: 496,
    height: 765
  }, null, 2));

  fs.writeFileSync('analysis/panel_1_cropped_recon_art.json', JSON.stringify({
    schema: 'PngDigestArtifact',
    kind: 'png-artifact',
    png_base64: croppedRecon.data_base64,
    width: 496,
    height: 765
  }, null, 2));

  // Run compare-web-screenshots
  console.log('7. Running rea compare-web-screenshots on cropped 496px sidebar...');
  const scDiffOut = execSync(
    `npx rea compare-web-screenshots analysis/panel_1_cropped_live_art.json analysis/panel_1_cropped_recon_art.json --channel-threshold 5 --format json`,
    { encoding: 'utf8', maxBuffer: 50 * 1024 * 1024 }
  );
  fs.writeFileSync('analysis/panel_1_cropped_diff_res.json', scDiffOut, 'utf8');
  const scDiff = JSON.parse(scDiffOut);

  console.log('\n--- CROPPED SIDEBAR (496px) PIXEL DIFF RESULTS ---');
  console.log('Diff Evidence ID:', scDiff.evidence_id);
  console.log('Compared Pixels:', scDiff.normalized_result?.comparison?.compared_pixels);
  console.log('Changed Pixels:', scDiff.normalized_result?.comparison?.changed_pixels);
  console.log('Changed Ratio:', ((scDiff.normalized_result?.comparison?.changed_ratio ?? 0) * 100).toFixed(2) + '%');
  console.log('Accuracy Match:', ((1 - (scDiff.normalized_result?.comparison?.changed_ratio ?? 0)) * 100).toFixed(2) + '%');
  console.log('Status (< 15% threshold):', (scDiff.normalized_result?.comparison?.changed_ratio ?? 1) < 0.15 ? 'PASS' : 'FAIL');
}

main().catch(err => {
  console.error('Execution error:', err);
  process.exit(1);
});
