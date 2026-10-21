import WebSocket from 'ws';
import fs from 'fs';

async function detailPillsAndArchived() {
  const liveBuf = fs.readFileSync('target_artifacts/whatsapp-web/live-screenshot.png');
  const reconBuf = fs.readFileSync('target_artifacts/whatsapp-web/recon-screenshot.png');

  const res = await fetch('http://127.0.0.1:9223/json');
  const targets = await res.json();
  const page = targets.find(t => t.type === 'page');

  const ws = new WebSocket(page.webSocketDebuggerUrl);
  await new Promise(r => ws.on('open', r));

  let idCounter = 1;
  function evaluate(expr) {
    return new Promise((resolve) => {
      const id = idCounter++;
      const handler = (msg) => {
        const data = JSON.parse(msg);
        if (data.id === id) {
          ws.off('message', handler);
          resolve(data.result?.result?.value);
        }
      };
      ws.on('message', handler);
      ws.send(JSON.stringify({
        id,
        method: 'Runtime.evaluate',
        params: { expression: expr, awaitPromise: true, returnByValue: true }
      }));
    });
  }

  const result = await evaluate(`(async () => {
    const imgLive = new Image();
    imgLive.src = 'data:image/png;base64,${liveBuf.toString('base64')}';
    await new Promise(r => imgLive.onload = r);

    const imgRecon = new Image();
    imgRecon.src = 'data:image/png;base64,${reconBuf.toString('base64')}';
    await new Promise(r => imgRecon.onload = r);

    const canvas = document.createElement('canvas');
    canvas.width = 1034;
    canvas.height = 737;
    const ctx = canvas.getContext('2d');

    // Filter pills (x: 65, y: 112, w: 413, h: 42)
    ctx.clearRect(0, 0, 1034, 737);
    ctx.drawImage(imgLive, 0, 0);
    const livePills = ctx.getImageData(65, 112, 413, 42).data;

    ctx.clearRect(0, 0, 1034, 737);
    ctx.drawImage(imgRecon, 0, 0);
    const reconPills = ctx.getImageData(65, 112, 413, 42).data;

    // Split filter pills into columns:
    // "All" pill: 0-60
    // "Unread" pill: 60-140
    // "Favourites" pill: 140-240
    // "Groups" pill: 240-330
    // "+" button: 330-413
    let pillsBreakdown = { all: 0, unread: 0, favourites: 0, groups: 0, addBtn: 0 };
    for (let i = 0; i < livePills.length; i += 4) {
      if (Math.max(
        Math.abs(livePills[i] - reconPills[i]),
        Math.abs(livePills[i+1] - reconPills[i+1]),
        Math.abs(livePills[i+2] - reconPills[i+2])
      ) > 5) {
        const x = (i / 4) % 413;
        if (x < 60) pillsBreakdown.all++;
        else if (x < 140) pillsBreakdown.unread++;
        else if (x < 240) pillsBreakdown.favourites++;
        else if (x < 330) pillsBreakdown.groups++;
        else pillsBreakdown.addBtn++;
      }
    }

    // Archived row (x: 65, y: 230, w: 413, h: 50)
    ctx.clearRect(0, 0, 1034, 737);
    ctx.drawImage(imgLive, 0, 0);
    const liveArch = ctx.getImageData(65, 230, 413, 50).data;

    ctx.clearRect(0, 0, 1034, 737);
    ctx.drawImage(imgRecon, 0, 0);
    const reconArch = ctx.getImageData(65, 230, 413, 50).data;

    // Check Y distribution in archived row:
    let top10px = 0; // y: 0-10 (transition from butterbar)
    let body30px = 0; // y: 10-40 (archived text and icon)
    let bottom10px = 0; // y: 40-50 (bottom border / start of first chat row)
    for (let i = 0; i < liveArch.length; i += 4) {
      if (Math.max(
        Math.abs(liveArch[i] - reconArch[i]),
        Math.abs(liveArch[i+1] - reconArch[i+1]),
        Math.abs(liveArch[i+2] - reconArch[i+2])
      ) > 5) {
        const y = Math.floor((i / 4) / 413);
        if (y < 10) top10px++;
        else if (y < 40) body30px++;
        else bottom10px++;
      }
    }

    return { pillsBreakdown, archivedBreakdown: { top10px, body30px, bottom10px } };
  })()`);

  ws.close();
  console.log('Breakdown results:', result);
}

detailPillsAndArchived().catch(console.error);
