import fs from 'fs';
import { execSync } from 'child_process';
import crypto from 'crypto';
import WebSocket from 'ws';

async function crop(dataBase64, x, y, width, height, wsUrl) {
  const ws = new WebSocket(wsUrl);
  await new Promise(r => ws.on('open', r));

  const result = await new Promise(resolve => {
    let id = 1;
    ws.on('message', m => {
      const d = JSON.parse(m);
      if (d.id === 1) {
        ws.close();
        resolve(d.result?.result?.value);
      }
    });
    ws.send(JSON.stringify({
      id: 1,
      method: 'Runtime.evaluate',
      params: {
        expression: `(async () => {
          const img = new Image();
          img.src = 'data:image/png;base64,${dataBase64}';
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
      }
    }));
  });

  const buf = Buffer.from(result, 'base64');
  const sha256 = crypto.createHash('sha256').update(buf).digest('hex');
  return {
    sha256,
    bytes: buf.length,
    media_type: 'image/png',
    data_base64: result,
    buffer: buf
  };
}

async function runDiff() {
  const targetsRes = await fetch('http://127.0.0.1:9223/json');
  const targets = await targetsRes.json();
  const recon = targets.find(t => t.url.includes('5173') && t.type === 'page');
  const live = targets.find(t => t.url.includes('web.whatsapp.com') && t.type === 'page');

  // Bring recon to front and reload to landing state
  console.log('Activating recon tab...');
  let ws = new WebSocket(recon.webSocketDebuggerUrl);
  await new Promise(r => ws.on('open', r));
  ws.send(JSON.stringify({ id: 1, method: 'Page.bringToFront' }));
  ws.send(JSON.stringify({ id: 2, method: 'Page.reload' }));
  await new Promise(r => setTimeout(r, 1200));
  ws.close();

  // Capture fresh recon with rea
  console.log('Capturing recon with rea...');
  const reconRaw = execSync(`rea capture-web-screenshot http://127.0.0.1:9223 ${recon.id} --format json`);
  const reconArtifact = JSON.parse(reconRaw.toString('utf8').replace(/^\uFEFF/, '')).normalized_result.artifact;

  // Bring live to front
  console.log('Activating live tab...');
  ws = new WebSocket(live.webSocketDebuggerUrl);
  await new Promise(r => ws.on('open', r));
  ws.send(JSON.stringify({ id: 1, method: 'Page.bringToFront' }));
  await new Promise(r => setTimeout(r, 600));
  ws.close();

  // Capture fresh live with rea
  console.log('Capturing live with rea...');
  const liveRaw = execSync(`rea capture-web-screenshot http://127.0.0.1:9223 ${live.id} --format json`);
  const liveArtifact = JSON.parse(liveRaw.toString('utf8').replace(/^\uFEFF/, '')).normalized_result.artifact;

  // Save full screenshots
  fs.writeFileSync('analysis/compare/recon-fullscreen.png', Buffer.from(reconArtifact.data_base64, 'base64'));
  fs.writeFileSync('analysis/compare/live-fullscreen.png', Buffer.from(liveArtifact.data_base64, 'base64'));

  // 1. Compare Intro Panel: [496, 0, 944, 765]
  console.log('Cropping Intro Panel region [496, 0, 944, 765]...');
  const liveIntro = await crop(liveArtifact.data_base64, 496, 0, 944, 765, recon.webSocketDebuggerUrl);
  const reconIntro = await crop(reconArtifact.data_base64, 496, 0, 944, 765, recon.webSocketDebuggerUrl);

  fs.writeFileSync('analysis/compare/live-intro-crop.json', JSON.stringify(liveIntro, null, 2));
  fs.writeFileSync('analysis/compare/recon-intro-crop.json', JSON.stringify(reconIntro, null, 2));

  console.log('Running rea compare-web-screenshots on Intro Panel...');
  const introDiffRaw = execSync(`rea compare-web-screenshots analysis/compare/live-intro-crop.json analysis/compare/recon-intro-crop.json --channel-threshold 10 --format json`);
  const introDiff = JSON.parse(introDiffRaw.toString('utf8').replace(/^\uFEFF/, ''));
  fs.writeFileSync('analysis/compare/intro-panel.json', JSON.stringify(introDiff, null, 2));

  console.log('Intro Panel Diff:');
  console.log('  Compared pixels:', introDiff.normalized_result.compared_pixels);
  console.log('  Changed pixels:', introDiff.normalized_result.changed_pixels);
  console.log('  Changed ratio:', (introDiff.normalized_result.changed_ratio * 100).toFixed(2) + '%');

  // 2. Compare Chat List: [64, 0, 432, 765]
  console.log('\nCropping Chat List region [64, 0, 432, 765]...');
  const liveChatList = await crop(liveArtifact.data_base64, 64, 0, 432, 765, recon.webSocketDebuggerUrl);
  const reconChatList = await crop(reconArtifact.data_base64, 64, 0, 432, 765, recon.webSocketDebuggerUrl);

  fs.writeFileSync('analysis/compare/live-chatlist-crop.json', JSON.stringify(liveChatList, null, 2));
  fs.writeFileSync('analysis/compare/recon-chatlist-crop.json', JSON.stringify(reconChatList, null, 2));

  console.log('Running rea compare-web-screenshots on Chat List...');
  const chatListDiffRaw = execSync(`rea compare-web-screenshots analysis/compare/live-chatlist-crop.json analysis/compare/recon-chatlist-crop.json --channel-threshold 10 --format json`);
  const chatListDiff = JSON.parse(chatListDiffRaw.toString('utf8').replace(/^\uFEFF/, ''));
  fs.writeFileSync('analysis/compare/chatlist.json', JSON.stringify(chatListDiff, null, 2));

  console.log('Chat List Diff:');
  console.log('  Compared pixels:', chatListDiff.normalized_result.compared_pixels);
  console.log('  Changed pixels:', chatListDiff.normalized_result.changed_pixels);
  console.log('  Changed ratio:', (chatListDiff.normalized_result.changed_ratio * 100).toFixed(2) + '%');
}

runDiff().catch(console.error);
