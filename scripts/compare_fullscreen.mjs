import WebSocket from 'ws';
import fs from 'fs';

async function compareFullScreen() {
  const res = await fetch('http://127.0.0.1:9223/json');
  const targets = await res.json();
  const wa = targets.find(t => t.url.includes('web.whatsapp.com') && t.type === 'page');
  const recon = targets.find(t => t.url.includes('127.0.0.1:5173') && t.type === 'page');

  if (!wa || !recon) {
    console.error('Could not find both targets on port 9223');
    return;
  }

  const wsWa = new WebSocket(wa.webSocketDebuggerUrl);
  const wsRecon = new WebSocket(recon.webSocketDebuggerUrl);
  await Promise.all([
    new Promise(r => wsWa.on('open', r)),
    new Promise(r => wsRecon.on('open', r))
  ]);

  let id = 1;
  const send = (ws, method, params = {}) => new Promise(res => {
    const cur = id++;
    const h = (m) => {
      const d = JSON.parse(m);
      if (d.id === cur) { ws.off('message', h); res(d.result); }
    };
    ws.on('message', h);
    ws.send(JSON.stringify({ id: cur, method, params }));
  });

  // Clear any device metrics override so it uses natural maximized viewport!
  await send(wsWa, 'Emulation.clearDeviceMetricsOverride');
  await send(wsRecon, 'Emulation.clearDeviceMetricsOverride');
  await send(wsRecon, 'Page.reload');
  await new Promise(r => setTimeout(r, 1200));

  const liveInfo = await send(wsWa, 'Runtime.evaluate', {
    expression: `(() => {
      return {
        innerWidth: window.innerWidth,
        innerHeight: window.innerHeight,
        outerWidth: window.outerWidth,
        outerHeight: window.outerHeight,
        devicePixelRatio: window.devicePixelRatio,
        rail: document.querySelector('header')?.getBoundingClientRect(),
        side: document.querySelector('#side')?.getBoundingClientRect(),
        main: document.querySelector('#main')?.getBoundingClientRect(),
        header: document.querySelector('[data-testid="conversation-header"]')?.getBoundingClientRect(),
        composer: document.querySelector('footer')?.getBoundingClientRect(),
        doodle: document.querySelector('[data-testid="conversation-background-default_chat_wallpaper"]')?.style.cssText,
        appWrapper: document.querySelector('.app-wrapper-web')?.className,
        appWrapperStyle: window.getComputedStyle(document.querySelector('.app-wrapper-web') || document.body).cssText
      };
    })()`,
    returnByValue: true
  });

  const reconInfo = await send(wsRecon, 'Runtime.evaluate', {
    expression: `(() => {
      return {
        innerWidth: window.innerWidth,
        innerHeight: window.innerHeight,
        rail: document.querySelector('header')?.getBoundingClientRect(),
        side: document.querySelector('#side_column')?.getBoundingClientRect(),
        main: document.querySelector('#main')?.getBoundingClientRect(),
        header: document.querySelector('[data-testid="conversation-header"]')?.getBoundingClientRect(),
        composer: document.querySelector('footer')?.getBoundingClientRect(),
      };
    })()`,
    returnByValue: true
  });

  console.log('Live Fullscreen Info:', JSON.stringify(liveInfo.result.value, null, 2));
  console.log('Recon Fullscreen Info:', JSON.stringify(reconInfo.result.value, null, 2));

  // Capture full screenshots of both
  await send(wsWa, 'Page.bringToFront');
  const liveShot = await send(wsWa, 'Page.captureScreenshot', { format: 'png' });
  await send(wsRecon, 'Page.bringToFront');
  const reconShot = await send(wsRecon, 'Page.captureScreenshot', { format: 'png' });

  fs.writeFileSync('analysis/compare/live-fullscreen.png', Buffer.from(liveShot.data, 'base64'));
  fs.writeFileSync('analysis/compare/recon-fullscreen.png', Buffer.from(reconShot.data, 'base64'));

  console.log('Saved analysis/compare/live-fullscreen.png and recon-fullscreen.png');

  wsWa.close();
  wsRecon.close();
}

compareFullScreen().catch(console.error);
