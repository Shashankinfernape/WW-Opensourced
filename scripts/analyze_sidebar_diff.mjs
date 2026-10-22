import fs from 'fs';

const RECON_TARGET = '6C1EB6BEA99DB77BBB6E025B42EC3834';

async function analyzeDiffDistribution() {
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

  const liveB64 = JSON.parse(fs.readFileSync('analysis/panel_1_cropped_live_art.json', 'utf8')).data_base64;
  const reconB64 = JSON.parse(fs.readFileSync('analysis/panel_1_cropped_recon_art.json', 'utf8')).data_base64;

  const expr = `(async () => {
    const load = (b64) => new Promise(r => {
      const img = new Image();
      img.onload = () => r(img);
      img.src = 'data:image/png;base64,' + b64;
    });

    const [img1, img2] = await Promise.all([load('${liveB64}'), load('${reconB64}')]);
    const canvas = document.createElement('canvas');
    canvas.width = 496;
    canvas.height = 765;
    const ctx = canvas.getContext('2d');

    ctx.drawImage(img1, 0, 0);
    const d1 = ctx.getImageData(0, 0, 496, 765).data;

    ctx.clearRect(0, 0, 496, 765);
    ctx.drawImage(img2, 0, 0);
    const d2 = ctx.getImageData(0, 0, 496, 765).data;

    // Regions: Rail (0..64), Header (64..496, y: 0..60), Search/Filter (y: 60..150), Rows (y: 150..765)
    let railDiff = 0, headerDiff = 0, searchDiff = 0, rowsDiff = 0;

    for (let y = 0; y < 765; y++) {
      for (let x = 0; x < 496; x++) {
        const idx = (y * 496 + x) * 4;
        const diffR = Math.abs(d1[idx] - d2[idx]);
        const diffG = Math.abs(d1[idx+1] - d2[idx+1]);
        const diffB = Math.abs(d1[idx+2] - d2[idx+2]);
        const isDiff = (diffR > 5 || diffG > 5 || diffB > 5);

        if (isDiff) {
          if (x < 64) railDiff++;
          else if (y < 60) headerDiff++;
          else if (y < 150) searchDiff++;
          else rowsDiff++;
        }
      }
    }

    return {
      railDiff: { count: railDiff, total: 64 * 765, ratio: (railDiff / (64 * 765) * 100).toFixed(2) + '%' },
      headerDiff: { count: headerDiff, total: 432 * 60, ratio: (headerDiff / (432 * 60) * 100).toFixed(2) + '%' },
      searchDiff: { count: searchDiff, total: 432 * 90, ratio: (searchDiff / (432 * 90) * 100).toFixed(2) + '%' },
      rowsDiff: { count: rowsDiff, total: 432 * (765 - 150), ratio: (rowsDiff / (432 * 615) * 100).toFixed(2) + '%' }
    };
  })()`;

  const evalRes = await send('Runtime.evaluate', {
    expression: expr,
    awaitPromise: true,
    returnByValue: true
  });

  console.log('Sidebar region-by-region diff analysis:');
  console.log(JSON.stringify(evalRes.result?.value, null, 2));
  ws.close();
}

analyzeDiffDistribution().catch(console.error);
