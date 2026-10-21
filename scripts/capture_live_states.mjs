import WebSocket from 'ws';
import fs from 'fs';
import { execSync } from 'child_process';

async function captureLiveStates() {
  const res = await fetch('http://127.0.0.1:9223/json');
  const targets = await res.json();
  const wa = targets.find(t => t.url.includes('web.whatsapp.com') && t.type === 'page');

  if (!wa) {
    console.error('No WhatsApp Web page found on port 9223!');
    process.exit(1);
  }

  const ws = new WebSocket(wa.webSocketDebuggerUrl);
  await new Promise(r => ws.on('open', r));

  let idCounter = 1;
  function send(method, params = {}) {
    return new Promise((resolve) => {
      const id = idCounter++;
      const handler = (msg) => {
        const data = JSON.parse(msg);
        if (data.id === id) {
          ws.off('message', handler);
          resolve(data.result);
        }
      };
      ws.on('message', handler);
      ws.send(JSON.stringify({ id, method, params }));
    });
  }

  // Ensure window brought to front
  await send('Page.bringToFront');
  await send('Emulation.setDeviceMetricsOverride', {
    width: 1034,
    height: 737,
    deviceScaleFactor: 1,
    mobile: false
  });
  await new Promise(r => setTimeout(r, 500));

  function captureScreenshot(name) {
    console.log(`Capturing state: ${name}...`);
    const raw = execSync(`rea capture-web-screenshot http://127.0.0.1:9223 ${wa.id} --format json`, { maxBuffer: 50 * 1024 * 1024 });
    const text = raw.toString('utf8').replace(/^\uFEFF/, '');
    const data = JSON.parse(text);
    const artifact = data.normalized_result.artifact;
    fs.writeFileSync(`analysis/compare/live-${name}-full-artifact.json`, JSON.stringify(artifact, null, 2));
    fs.writeFileSync(`analysis/compare/live-${name}-full.png`, Buffer.from(artifact.data_base64, 'base64'));
    return artifact;
  }

  // 1. Live Chat Row Hover State via Input.dispatchMouseEvent
  console.log('Dispatching mouseMoved over chat row (x: 200, y: 350)...');
  await send('Input.dispatchMouseEvent', {
    type: 'mouseMoved',
    x: 200,
    y: 350
  });
  await new Promise(r => setTimeout(r, 500));
  captureScreenshot('chat-row-hover');

  // Move mouse away to reset hover
  await send('Input.dispatchMouseEvent', { type: 'mouseMoved', x: 10, y: 10 });
  await new Promise(r => setTimeout(r, 400));

  // 2. Live Attach Menu State (click attach button)
  console.log('Clicking attach button...');
  await send('Runtime.evaluate', {
    expression: `(() => {
      const btn = Array.from(document.querySelectorAll('button')).find(b => b.getAttribute('aria-label') === 'Attach');
      if (btn) btn.click();
    })()`
  });
  await new Promise(r => setTimeout(r, 600));
  captureScreenshot('attach-menu');

  // Close attach menu by clicking main
  await send('Runtime.evaluate', {
    expression: `(() => {
      const main = document.querySelector('#main');
      if (main) main.click();
    })()`
  });
  await new Promise(r => setTimeout(r, 400));

  // 3. Live Header Menu State (click conversation menu)
  console.log('Clicking conversation header menu button...');
  await send('Runtime.evaluate', {
    expression: `(() => {
      const header = document.querySelector('header[aria-label="Conversation header"]') || document.querySelector('[data-testid="conversation-header"]');
      if (header) {
        const btn = Array.from(header.querySelectorAll('button')).find(b => b.getAttribute('aria-label') === 'Menu');
        if (btn) btn.click();
      }
    })()`
  });
  await new Promise(r => setTimeout(r, 600));
  captureScreenshot('chat-menu');

  // Close menu by clicking body
  await send('Runtime.evaluate', { expression: `document.body.click();` });
  await new Promise(r => setTimeout(r, 400));

  // 4. Status tab
  console.log('Clicking Status tab in rail...');
  await send('Runtime.evaluate', {
    expression: `(() => {
      const btn = Array.from(document.querySelectorAll('button')).find(b => b.getAttribute('aria-label') === 'Status');
      if (btn) btn.click();
    })()`
  });
  await new Promise(r => setTimeout(r, 800));
  captureScreenshot('status-panel');

  // 5. Channels tab
  console.log('Clicking Channels tab in rail...');
  await send('Runtime.evaluate', {
    expression: `(() => {
      const btn = Array.from(document.querySelectorAll('button')).find(b => b.getAttribute('aria-label') === 'Channels');
      if (btn) btn.click();
    })()`
  });
  await new Promise(r => setTimeout(r, 800));
  captureScreenshot('channels-panel');

  // 6. Communities tab
  console.log('Clicking Communities tab in rail...');
  await send('Runtime.evaluate', {
    expression: `(() => {
      const btn = Array.from(document.querySelectorAll('button')).find(b => b.getAttribute('aria-label') === 'Communities');
      if (btn) btn.click();
    })()`
  });
  await new Promise(r => setTimeout(r, 800));
  captureScreenshot('communities-panel');

  // 7. Calls tab
  console.log('Clicking Calls tab in rail...');
  await send('Runtime.evaluate', {
    expression: `(() => {
      const btn = Array.from(document.querySelectorAll('button')).find(b => b.getAttribute('aria-label') === 'Calls');
      if (btn) btn.click();
    })()`
  });
  await new Promise(r => setTimeout(r, 800));
  captureScreenshot('calls-panel');

  // Reset back to Chats tab
  console.log('Resetting back to Chats tab...');
  await send('Runtime.evaluate', {
    expression: `(() => {
      const btn = Array.from(document.querySelectorAll('button')).find(b => b.getAttribute('aria-label') === 'Chats');
      if (btn) btn.click();
    })()`
  });
  await new Promise(r => setTimeout(r, 800));

  ws.close();
  console.log('All live states captured over CDP successfully!');
}

captureLiveStates().catch(console.error);
