import WebSocket from 'ws';
import fs from 'fs';

async function detailDiffs() {
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

    // 1. Conversation Header: inspect avatar area (x: 478+16 to 478+56, y: 12 to 52)
    ctx.clearRect(0, 0, 1034, 737);
    ctx.drawImage(imgLive, 0, 0);
    const liveAvatar = ctx.getImageData(478 + 16, 12, 40, 40).data;

    ctx.clearRect(0, 0, 1034, 737);
    ctx.drawImage(imgRecon, 0, 0);
    const reconAvatar = ctx.getImageData(478 + 16, 12, 40, 40).data;

    let avatarDiff = 0;
    for (let i = 0; i < liveAvatar.length; i += 4) {
      if (Math.max(
        Math.abs(liveAvatar[i] - reconAvatar[i]),
        Math.abs(liveAvatar[i+1] - reconAvatar[i+1]),
        Math.abs(liveAvatar[i+2] - reconAvatar[i+2])
      ) > 5) avatarDiff++;
    }

    // 2. Inspect text area (x: 478 + 70 to 478 + 300, y: 12 to 52)
    ctx.clearRect(0, 0, 1034, 737);
    ctx.drawImage(imgLive, 0, 0);
    const liveTitle = ctx.getImageData(478 + 70, 12, 230, 40).data;

    ctx.clearRect(0, 0, 1034, 737);
    ctx.drawImage(imgRecon, 0, 0);
    const reconTitle = ctx.getImageData(478 + 70, 12, 230, 40).data;

    let titleDiff = 0;
    for (let i = 0; i < liveTitle.length; i += 4) {
      if (Math.max(
        Math.abs(liveTitle[i] - reconTitle[i]),
        Math.abs(liveTitle[i+1] - reconTitle[i+1]),
        Math.abs(liveTitle[i+2] - reconTitle[i+2])
      ) > 5) titleDiff++;
    }

    // 3. Inspect actions area (x: 478 + 350 to 478 + 556, y: 12 to 52)
    ctx.clearRect(0, 0, 1034, 737);
    ctx.drawImage(imgLive, 0, 0);
    const liveActions = ctx.getImageData(478 + 350, 12, 206, 40).data;

    ctx.clearRect(0, 0, 1034, 737);
    ctx.drawImage(imgRecon, 0, 0);
    const reconActions = ctx.getImageData(478 + 350, 12, 206, 40).data;

    let actionsDiff = 0;
    for (let i = 0; i < liveActions.length; i += 4) {
      if (Math.max(
        Math.abs(liveActions[i] - reconActions[i]),
        Math.abs(liveActions[i+1] - reconActions[i+1]),
        Math.abs(liveActions[i+2] - reconActions[i+2])
      ) > 5) actionsDiff++;
    }

    return {
      conversationHeader: {
        totalDiff: 4330,
        avatarDiff,
        titleDiff,
        actionsDiff
      }
    };
  })()`);

  ws.close();
  console.log('Detailed header diff breakdown:', result);
}

detailDiffs().catch(console.error);
