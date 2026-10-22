import fs from 'fs';
import crypto from 'crypto';
import { execSync } from 'child_process';
import WebSocket from 'ws';

const reconTargetId = '6C1EB6BEA99DB77BBB6E025B42EC3834';

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
  const sha256 = crypto.createHash('sha256').update(buf).digest('hex');
  return {
    sha256,
    bytes: buf.length,
    media_type: 'image/png',
    data_base64: croppedB64
  };
}

async function run() {
  const fixedReconPng = fs.readFileSync('analysis/recon_profile_fixed.png');
  const croppedRecon = await cropViaChrome(fixedReconPng.toString('base64'), 0, 0, 496, 765);
  fs.writeFileSync('analysis/panel_2_cropped_fixed_recon_art.json', JSON.stringify(croppedRecon, null, 2));

  console.log('Comparing cropped live vs fixed recon with rea compare-web-screenshots...');
  const out = execSync('npx rea compare-web-screenshots analysis/panel_2_cropped_live_art.json analysis/panel_2_cropped_fixed_recon_art.json --channel-threshold 5 --format json', {
    encoding: 'utf8'
  });
  const res = JSON.parse(out);
  console.log('Result:');
  console.log('Compared pixels:', res.normalized_result?.compared_pixels);
  console.log('Changed pixels:', res.normalized_result?.changed_pixels);
  console.log('Changed ratio:', (res.normalized_result?.changed_ratio * 100).toFixed(2) + '%');
  console.log('Accuracy match:', ((1 - res.normalized_result?.changed_ratio) * 100).toFixed(2) + '%');
}

run();
