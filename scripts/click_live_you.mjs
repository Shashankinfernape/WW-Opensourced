import WebSocket from 'ws';

async function clickYou() {
  const targets = await (await fetch('http://127.0.0.1:9223/json')).json();
  const live = targets.find(t => t.url.includes('web.whatsapp.com') && t.type === 'page');

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

  const click = await send('Runtime.evaluate', {
    expression: `(() => {
      const btn = document.querySelector('button[aria-label="You"]');
      if (btn) { btn.click(); return true; }
      return false;
    })()`,
    returnByValue: true
  });
  console.log('Clicked You:', click.result.value);

  await new Promise(r => setTimeout(r, 600));

  const menu = await send('Runtime.evaluate', {
    expression: `(() => {
      const items = Array.from(document.querySelectorAll('[role="menuitem"], [role="button"], li')).map(el => el.innerText.trim()).filter(Boolean);
      const menuEl = document.querySelector('[role="menu"]') || document.querySelector('[data-testid*="menu"]') || document.querySelector('.copyable-area');
      return {
        items: items.slice(0, 20),
        html: menuEl ? menuEl.outerHTML.slice(0, 2000) : null
      };
    })()`,
    returnByValue: true
  });
  console.log('Menu items:', menu.result.value.items);
  console.log('Menu html preview:', menu.result.value.html?.slice(0, 500));

  ws.close();
}

clickYou().catch(console.error);
