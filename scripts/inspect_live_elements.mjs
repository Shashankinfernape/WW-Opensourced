import WebSocket from 'ws';

async function main() {
  const targets = await (await fetch('http://127.0.0.1:9223/json')).json();
  const live = targets.find(t => t.url.includes('web.whatsapp.com') && t.type === 'page');
  const ws = new WebSocket(live.webSocketDebuggerUrl);
  await new Promise(r => ws.on('open', r));

  let reqId = 1;
  const evaluate = (expr) => new Promise(resolve => {
    const id = reqId++;
    const handler = (m) => {
      const d = JSON.parse(m);
      if (d.id === id) {
        ws.off('message', handler);
        resolve(d.result?.result?.value);
      }
    };
    ws.on('message', handler);
    ws.send(JSON.stringify({
      id,
      method: 'Runtime.evaluate',
      params: { expression: expr, returnByValue: true }
    }));
  });

  const pills = await evaluate(`(() => {
    const el = document.querySelector('[role="tablist"]') || document.querySelector('[data-testid="filter-tabs"]') || document.querySelector('button[role="tab"]')?.parentElement;
    if (!el) return 'No tablist found';
    return {
      outerHTML: el.outerHTML.slice(0, 500),
      rect: el.getBoundingClientRect(),
      buttons: Array.from(el.querySelectorAll('button')).map(b => ({
        text: b.innerText,
        rect: b.getBoundingClientRect(),
        classes: b.className,
        bgColor: window.getComputedStyle(b).backgroundColor,
        color: window.getComputedStyle(b).color,
        borderRadius: window.getComputedStyle(b).borderRadius,
        padding: window.getComputedStyle(b).padding,
        height: window.getComputedStyle(b).height,
        fontSize: window.getComputedStyle(b).fontSize,
        fontWeight: window.getComputedStyle(b).fontWeight
      }))
    };
  })()`);

  const archived = await evaluate(`(() => {
    const el = document.querySelector('[data-testid="archived-row"]') || document.querySelector('button[aria-label*="Archived"]') || Array.from(document.querySelectorAll('button, div[role="button"]')).find(b => b.innerText?.includes('Archived'));
    if (!el) return 'No archived row found';
    return {
      outerHTML: el.outerHTML.slice(0, 600),
      rect: el.getBoundingClientRect(),
      classes: el.className,
      height: window.getComputedStyle(el).height,
      padding: window.getComputedStyle(el).padding,
      bgColor: window.getComputedStyle(el).backgroundColor
    };
  })()`);

  const chatRow = await evaluate(`(() => {
    const el = document.querySelector('[data-testid="cell-frame-container"]');
    if (!el) return 'No cell-frame-container found';
    return {
      outerHTML: el.outerHTML.slice(0, 600),
      rect: el.getBoundingClientRect(),
      classes: el.className,
      height: window.getComputedStyle(el).height,
      padding: window.getComputedStyle(el).padding
    };
  })()`);

  console.log('LIVE PILLS:', JSON.stringify(pills, null, 2));
  console.log('LIVE ARCHIVED:', JSON.stringify(archived, null, 2));
  console.log('LIVE CHAT ROW:', JSON.stringify(chatRow, null, 2));

  ws.close();
}

main().catch(console.error);
