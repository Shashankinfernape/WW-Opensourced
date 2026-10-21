const res = await fetch('http://127.0.0.1:9223/json');
const targets = await res.json();
const wa = targets.find(t => t.id === '2CA3E36EB10142555423DA69306EFAD5');
const ws = new WebSocket(wa.webSocketDebuggerUrl);
await new Promise(r => ws.onopen = r);

ws.send(JSON.stringify({
  id: 1,
  method: 'Runtime.evaluate',
  params: {
    expression: `(() => {
      const side = document.querySelector('#side');
      const main = document.querySelector('#main');
      const intro = document.querySelector('[data-testid="intro-title"]') || document.querySelector('[data-testid="intro-md-beta-logo-dark"]') || document.querySelector('div[class*="intro"]');
      const search = document.querySelector('[data-testid="chat-list-search"]') || document.querySelector('div[contenteditable="true"]');
      const filter = document.querySelector('button[aria-label*="filter" i]') || document.querySelector('[data-testid="filter-button"]');
      const chatRows = Array.from(document.querySelectorAll('#side [role="listitem"], #side div[data-testid^="list-item-"], #side div[data-testid="cell-frame-container"]'));

      return {
        hasSide: !!side,
        sideRect: side ? side.getBoundingClientRect() : null,
        hasMain: !!main,
        mainRect: main ? main.getBoundingClientRect() : null,
        hasIntro: !!intro,
        introText: intro ? intro.innerText : null,
        chatRowsCount: chatRows.length,
        firstThreeRows: chatRows.slice(0, 3).map(r => ({
          text: r.innerText.replace(/\\s+/g, ' ').trim(),
          testId: r.getAttribute('data-testid')
        }))
      };
    })()`,
    returnByValue: true
  }
}));

ws.onmessage = (evt) => {
  console.log('Columns in Live DOM:', JSON.stringify(JSON.parse(evt.data).result?.result?.value, null, 2));
  ws.close();
  process.exit(0);
};
