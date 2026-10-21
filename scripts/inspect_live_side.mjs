const res = await fetch('http://127.0.0.1:9223/json');
const targets = await res.json();
const wa = targets.find(t => t.url.includes('web.whatsapp.com') && t.type === 'page');
const ws = new WebSocket(wa.webSocketDebuggerUrl);
await new Promise(r => ws.onopen = r);

ws.send(JSON.stringify({
  id: 1,
  method: 'Runtime.evaluate',
  params: {
    expression: `(() => {
      const side = document.querySelector('#side');
      if (!side) return { error: 'No #side' };
      const sideRect = side.getBoundingClientRect();
      
      // Top header of side
      const header = side.querySelector('header');
      // Search bar container
      const searchContainer = side.querySelector('[data-testid="chat-list-search"]') || side.querySelector('div[tabindex="-1"]');
      // Filter pills container
      const filterPills = Array.from(side.querySelectorAll('button[role="tab"], [data-testid^="filter-pill-"]'));
      // Sync banner / connectivity banner
      const banner = side.querySelector('[data-testid="banner"]') || side.querySelector('div[class*="banner"]');
      // Archived row
      const archived = side.querySelector('[data-testid="cell-frame-container"]');
      
      return {
        sideRect: { x: sideRect.x, y: sideRect.y, width: sideRect.width, height: sideRect.height },
        sideClasses: side.className,
        header: header ? {
          classes: header.className,
          rect: header.getBoundingClientRect(),
          title: header.querySelector('h1, [role="heading"]')?.innerText,
          buttons: Array.from(header.querySelectorAll('button')).map(b => ({
            ariaLabel: b.getAttribute('aria-label'),
            dataTestId: b.getAttribute('data-testid'),
            iconTitle: b.querySelector('title')?.textContent
          }))
        } : null,
        filterPills: filterPills.map(p => ({
          text: p.innerText,
          ariaSelected: p.getAttribute('aria-selected'),
          className: p.className
        })),
        archivedRow: archived ? {
          classes: archived.className,
          rect: archived.getBoundingClientRect(),
          text: archived.innerText.replace(/\\s+/g, ' ')
        } : null
      };
    })()`,
    returnByValue: true
  }
}));

ws.onmessage = (evt) => {
  console.log('Live #side structure:', JSON.stringify(JSON.parse(evt.data).result?.result?.value, null, 2));
  ws.close();
  process.exit(0);
};
