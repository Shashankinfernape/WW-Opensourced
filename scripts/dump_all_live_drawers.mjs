import WebSocket from 'ws';
import fs from 'fs';
import { execSync } from 'child_process';

async function main() {
  const targets = await (await fetch('http://127.0.0.1:9223/json')).json();
  const live = targets.find(t => t.url.includes('web.whatsapp.com') && t.type === 'page');
  if (!live) {
    console.error('Live WhatsApp Web not found');
    return;
  }

  const ws = new WebSocket(live.webSocketDebuggerUrl);
  await new Promise(r => ws.on('open', r));

  let id = 1;
  const send = (method, params = {}) => new Promise(res => {
    const cur = id++;
    const h = (m) => {
      const d = JSON.parse(m);
      if (d.id === cur) { ws.off('message', h); res(d.result); }
    };
    ws.on('message', h);
    ws.send(JSON.stringify({ id: cur, method, params }));
  });

  await send('Page.bringToFront');

  const tabs = [
    { name: 'channels', label: 'Channels' },
    { name: 'communities', label: 'Communities' },
    { name: 'calls', label: 'Calls' },
    { name: 'settings', label: 'Settings' },
    { name: 'profile', label: 'Profile' },
    { name: 'chats', label: 'Chats' }
  ];

  for (const tab of tabs) {
    console.log(`\nNavigating to ${tab.name}...`);
    const clicked = await send('Runtime.evaluate', {
      expression: `(() => {
        const btn = document.querySelector('button[aria-label="${tab.label}"]') ||
                    Array.from(document.querySelectorAll('button')).find(b => b.getAttribute('aria-label') === '${tab.label}' || b.innerText.includes('${tab.label}'));
        if (btn) {
          btn.click();
          return true;
        }
        return false;
      })()`,
      returnByValue: true
    });
    console.log(`Clicked ${tab.name}:`, clicked.result.value);

    // Wait for transition
    await new Promise(r => setTimeout(r, 1000));

    // Capture DOM
    const dom = await send('Runtime.evaluate', {
      expression: `(() => {
        const el = document.querySelector('#side') ||
                   document.querySelector('#side_column') ||
                   document.querySelector('[data-testid$="-drawer"]') ||
                   document.querySelector('.copyable-area');
        return el ? el.outerHTML : null;
      })()`,
      returnByValue: true
    });

    if (dom.result.value) {
      fs.writeFileSync(`analysis/live-${tab.name}-drawer.html`, dom.result.value, 'utf8');
      console.log(`Saved live-${tab.name}-drawer.html (${dom.result.value.length} bytes)`);
    } else {
      console.log(`Could not find drawer element for ${tab.name}`);
    }

    // Capture screenshot via rea
    const artifactPath = `analysis/compare/live-${tab.name}-artifact.json`;
    try {
      execSync(`wsl rea capture-web-screenshot --port 9223 --output /mnt/c/Users/user/Desktop/El\\ projecto/WW/${artifactPath}`, { stdio: 'inherit' });
      console.log(`Captured ${artifactPath}`);
    } catch (e) {
      console.error(`Failed to capture REA screenshot for ${tab.name}:`, e.message);
    }
  }

  ws.close();
}

main().catch(console.error);
