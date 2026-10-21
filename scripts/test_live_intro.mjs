import WebSocket from 'ws';
import fs from 'fs';

async function testCloseChat() {
  const res = await fetch('http://127.0.0.1:9223/json');
  const targets = await res.json();
  const wa = targets.find(t => t.url.includes('web.whatsapp.com') && t.type === 'page');
  const ws = new WebSocket(wa.webSocketDebuggerUrl);
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

  // Open conversation menu
  await send('Runtime.evaluate', {
    expression: `(() => {
      const menuBtn = document.querySelector('header[data-testid="conversation-header"] button[aria-label="Menu"]') || Array.from(document.querySelectorAll('header[data-testid="conversation-header"] button')).pop();
      if (menuBtn) menuBtn.click();
    })()`
  });
  await new Promise(r => setTimeout(r, 400));

  // Click 'Close chat'
  const clicked = await send('Runtime.evaluate', {
    expression: `(() => {
      const items = Array.from(document.querySelectorAll('div[role="button"], li, [role="menuitem"]'));
      const closeItem = items.find(it => it.innerText && it.innerText.includes('Close chat'));
      if (closeItem) {
        closeItem.click();
        return true;
      }
      return false;
    })()`,
    returnByValue: true
  });
  console.log('Close chat clicked:', clicked);
  await new Promise(r => setTimeout(r, 800));

  // Inspect the main/empty state DOM
  const mainInfo = await send('Runtime.evaluate', {
    expression: `(() => {
      const main = document.querySelector('#main');
      const intro = document.querySelector('[data-testid="intro-title"]') || document.querySelector('[data-testid*="intro"]') || document.querySelector('.intro-body') || document.querySelector('[data-testid="conversation-panel-wrapper"]');
      const allDivs = Array.from(document.querySelectorAll('div')).filter(d => d.innerText && (d.innerText.includes('WhatsApp for Windows') || d.innerText.includes('Download WhatsApp') || d.innerText.includes('Send and receive messages')));
      return {
        hasMain: !!main,
        mainHtml: main ? main.outerHTML.slice(0, 3000) : null,
        introHtml: intro ? intro.outerHTML.slice(0, 3000) : null,
        matchingDivs: allDivs.map(d => ({ className: d.className, testid: d.getAttribute('data-testid'), text: d.innerText.slice(0, 200), html: d.outerHTML.slice(0, 500) }))
      };
    })()`,
    returnByValue: true
  });
  console.log('Main Info after close chat:', JSON.stringify(mainInfo.result.value, null, 2));

  // Capture screenshot of the empty/intro state
  const shot = await send('Page.captureScreenshot', { format: 'png' });
  fs.writeFileSync('analysis/compare/live-intro-screen.png', Buffer.from(shot.data, 'base64'));
  console.log('Saved analysis/compare/live-intro-screen.png');

  ws.close();
}
testCloseChat().catch(console.error);
