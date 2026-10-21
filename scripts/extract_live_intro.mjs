import WebSocket from 'ws';
import fs from 'fs';

async function getIntroHtml() {
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

  const intro = await send('Runtime.evaluate', {
    expression: `(() => {
      const p = document.querySelector('[data-testid="intro-panel"]');
      if (!p) return null;
      return {
        html: p.outerHTML,
        title: p.querySelector('h1, h2, [data-testid*="title"], .title')?.innerText,
        text: p.innerText,
        rect: { x: p.getBoundingClientRect().x, y: p.getBoundingClientRect().y, width: p.getBoundingClientRect().width, height: p.getBoundingClientRect().height }
      };
    })()`,
    returnByValue: true
  });

  console.log('Intro text:\n', intro.result.value.text);
  console.log('\nIntro title:', intro.result.value.title);
  console.log('Intro rect:', intro.result.value.rect);
  fs.writeFileSync('analysis/live-intro-panel.html', intro.result.value.html);
  console.log('Saved analysis/live-intro-panel.html');

  ws.close();
}
getIntroHtml().catch(console.error);
