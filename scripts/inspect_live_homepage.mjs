import WebSocket from 'ws';

async function inspectLive() {
  const res = await fetch('http://127.0.0.1:9223/json');
  const targets = await res.json();
  const wa = targets.find(t => t.url.includes('web.whatsapp.com') && t.type === 'page');
  if (!wa) {
    console.error('Live WA target not found on port 9223');
    return;
  }
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

  // Get current window bounds
  const win = await send('Browser.getWindowForTarget');
  console.log('Live Window Bounds:', win?.bounds);

  const evalRes = await send('Runtime.evaluate', {
    expression: `(() => {
      const app = document.querySelector('#app');
      const side = document.querySelector('#side');
      const main = document.querySelector('#main');
      const intro = document.querySelector('[data-testid="intro-title"]') || document.querySelector('[data-testid*="intro"]') || document.querySelector('[data-asset-intro-image-dark]') || document.querySelector('.intro-body');
      
      return {
        innerWidth: window.innerWidth,
        innerHeight: window.innerHeight,
        hasMain: !!main,
        mainChildren: main ? Array.from(main.children).map(c => ({ tag: c.tagName, className: c.className, testid: c.getAttribute('data-testid') })) : null,
        mainHtmlSnippet: main ? main.outerHTML.slice(0, 1500) : null,
        sideWidth: side ? side.getBoundingClientRect().width : null,
        mainWidth: main ? main.getBoundingClientRect().width : null,
        introSnippet: intro ? intro.outerHTML.slice(0, 800) : null,
        title: document.title,
        bodyClasses: document.body.className,
        htmlClasses: document.documentElement.className,
        activeElement: document.activeElement ? document.activeElement.tagName + '.' + document.activeElement.className : null
      };
    })()`,
    returnByValue: true
  });
  console.log('Live DOM Info:', JSON.stringify(evalRes.result.value, null, 2));
  ws.close();
}

inspectLive().catch(console.error);
