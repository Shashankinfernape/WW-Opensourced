import WebSocket from 'ws';

async function inspectDetails() {
  const res = await fetch('http://127.0.0.1:9223/json');
  const targets = await res.json();
  const wa = targets.find(t => t.url.includes('web.whatsapp.com') && t.type === 'page');
  const recon = targets.find(t => t.url.includes('127.0.0.1:5173') && t.type === 'page');

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

  const getDetailsExpr = `(() => {
    const getRect = el => {
      if (!el) return null;
      const r = el.getBoundingClientRect();
      return { x: Math.round(r.x), y: Math.round(r.y), width: Math.round(r.width), height: Math.round(r.height) };
    };
    const getStyle = el => {
      if (!el) return null;
      const s = window.getComputedStyle(el);
      return {
        backgroundColor: s.backgroundColor,
        color: s.color,
        fontSize: s.fontSize,
        fontFamily: s.fontFamily,
        padding: s.padding,
        margin: s.margin,
        borderBottom: s.borderBottom,
        display: s.display,
        width: s.width,
        height: s.height
      };
    };

    return {
      rail: {
        rect: getRect(document.querySelector('header[data-testid="chatlist-header"]') || document.querySelector('header')),
        style: getStyle(document.querySelector('header[data-testid="chatlist-header"]') || document.querySelector('header'))
      },
      side: {
        rect: getRect(document.querySelector('#side')),
        style: getStyle(document.querySelector('#side'))
      },
      chatlistHeader: {
        rect: getRect(document.querySelector('[data-testid="chatlist-header"]')),
        style: getStyle(document.querySelector('[data-testid="chatlist-header"]'))
      },
      searchContainer: {
        rect: getRect(document.querySelector('[data-testid="chat-list-search-container"]')),
        style: getStyle(document.querySelector('[data-testid="chat-list-search-container"]'))
      },
      filterPills: {
        rect: getRect(document.querySelector('[role="tablist"]')),
        style: getStyle(document.querySelector('[role="tablist"]'))
      },
      conversationHeader: {
        rect: getRect(document.querySelector('[data-testid="conversation-header"]')),
        style: getStyle(document.querySelector('[data-testid="conversation-header"]'))
      },
      main: {
        rect: getRect(document.querySelector('#main')),
        style: getStyle(document.querySelector('#main'))
      },
      composer: {
        rect: getRect(document.querySelector('footer')),
        style: getStyle(document.querySelector('footer'))
      },
      composerInput: {
        rect: getRect(document.querySelector('footer [contenteditable="true"]') || document.querySelector('footer div[role="textbox"]')),
        style: getStyle(document.querySelector('footer [contenteditable="true"]') || document.querySelector('footer div[role="textbox"]'))
      }
    };
  })()`;

  const liveDetails = (await send(wsWa, 'Runtime.evaluate', { expression: getDetailsExpr, returnByValue: true })).result.value;
  const reconDetails = (await send(wsRecon, 'Runtime.evaluate', { expression: getDetailsExpr, returnByValue: true })).result.value;

  console.log('=== LIVE GEOMETRY & STYLES ===\n', JSON.stringify(liveDetails, null, 2));
  console.log('=== RECON GEOMETRY & STYLES ===\n', JSON.stringify(reconDetails, null, 2));

  wsWa.close();
  wsRecon.close();
}

inspectDetails().catch(console.error);
