import WebSocket from 'ws';
import fs from 'fs';
import { execSync } from 'child_process';

async function main() {
  const targets = await (await fetch('http://127.0.0.1:9223/json')).json();
  const live = targets.find(t => t.url.includes('web.whatsapp.com') && t.type === 'page');
  const recon = targets.find(t => t.url.includes('5173') && t.type === 'page');

  // Set Recon to home state (selectedChatId = null, leftDrawer = none, activeTab = chats)
  console.log('Resetting Recon to home state...');
  let ws = new WebSocket(recon.webSocketDebuggerUrl);
  await new Promise(r => ws.on('open', r));
  await new Promise(res => {
    ws.send(JSON.stringify({ id: 1, method: 'Page.bringToFront' }));
    setTimeout(res, 200);
  });
  await new Promise(res => {
    ws.send(JSON.stringify({
      id: 2,
      method: 'Runtime.evaluate',
      params: {
        expression: `(() => {
          // click chats tab in rail
          const chatsBtn = document.querySelector('button[aria-label="Chats"]');
          if (chatsBtn) chatsBtn.click();
          // click back if drawer open
          const back = document.querySelector('button[aria-label="Back"]');
          if (back) back.click();
        })()`
      }
    }));
    setTimeout(res, 500);
  });
  // reload recon to ensure fresh clean state
  await new Promise(res => {
    ws.send(JSON.stringify({ id: 3, method: 'Page.reload' }));
    setTimeout(res, 1500);
  });
  ws.close();

  // Reset Live to home state
  console.log('Resetting Live to home state...');
  ws = new WebSocket(live.webSocketDebuggerUrl);
  await new Promise(r => ws.on('open', r));
  await new Promise(res => {
    ws.send(JSON.stringify({ id: 1, method: 'Page.bringToFront' }));
    setTimeout(res, 200);
  });
  await new Promise(res => {
    ws.send(JSON.stringify({
      id: 2,
      method: 'Runtime.evaluate',
      params: {
        expression: `(() => {
          // close any open drawer in live
          const back = document.querySelector('button[aria-label="Back"]');
          if (back) back.click();
          const chatsBtn = document.querySelector('button[aria-label="Chats"]');
          if (chatsBtn) chatsBtn.click();
        })()`
      }
    }));
    setTimeout(res, 800);
  });
  ws.close();

  // Capture both full screen
  console.log('Capturing Live & Recon full screens with REA...');
  const liveRaw = execSync(`rea capture-web-screenshot http://127.0.0.1:9223 ${live.id} --format json`);
  const reconRaw = execSync(`rea capture-web-screenshot http://127.0.0.1:9223 ${recon.id} --format json`);

  const liveArtifact = JSON.parse(liveRaw.toString('utf8').replace(/^\uFEFF/, '')).normalized_result.artifact;
  const reconArtifact = JSON.parse(reconRaw.toString('utf8').replace(/^\uFEFF/, '')).normalized_result.artifact;

  fs.writeFileSync('analysis/compare/live-homepage-artifact.json', JSON.stringify(liveArtifact, null, 2));
  fs.writeFileSync('analysis/compare/recon-homepage-artifact.json', JSON.stringify(reconArtifact, null, 2));

  fs.writeFileSync('analysis/compare/live-homepage.png', Buffer.from(liveArtifact.data_base64, 'base64'));
  fs.writeFileSync('analysis/compare/recon-homepage.png', Buffer.from(reconArtifact.data_base64, 'base64'));

  console.log('Running REA full screen comparison...');
  const diffRaw = execSync(`rea compare-web-screenshots analysis/compare/live-homepage-artifact.json analysis/compare/recon-homepage-artifact.json --channel-threshold 10 --format json`);
  const diff = JSON.parse(diffRaw.toString('utf8').replace(/^\uFEFF/, ''));

  console.log('\n=== FULLSCREEN HOMEPAGE REA RESULT ===');
  console.log('Compared Pixels:', diff.normalized_result.compared_pixels);
  console.log('Changed Pixels: ', diff.normalized_result.changed_pixels);
  console.log('Diff Ratio:     ', (diff.normalized_result.changed_ratio * 100).toFixed(2) + '%');
  console.log('Status:         ', diff.normalized_result.status);
}

main().catch(console.error);
