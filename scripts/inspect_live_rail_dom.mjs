// Detailed inspection of differences between live and recon nav rail
const res = await fetch('http://127.0.0.1:9223/json');
const targets = await res.json();
const wa = targets.find(t => t.id === '2CA3E36EB10142555423DA69306EFAD5');
const ws = new WebSocket(wa.webSocketDebuggerUrl);
await new Promise(r => ws.onopen = r);

// Query live DOM for icons, badges, tooltips, selected items in rail
ws.send(JSON.stringify({
  id: 1,
  method: 'Runtime.evaluate',
  params: {
    expression: `(() => {
      const header = document.querySelector('header[data-testid="chatlist-header"]');
      if (!header) return { error: 'No header' };
      
      const buttons = Array.from(header.querySelectorAll('button, div[role="button"], span[data-icon]'));
      const buttonsInfo = buttons.map(b => {
        const rect = b.getBoundingClientRect();
        const badge = b.querySelector('[aria-label], span[class*="badge"], span[class*="unread"]');
        const icon = b.querySelector('span[data-icon]') || b;
        return {
          tag: b.tagName,
          ariaLabel: b.getAttribute('aria-label'),
          dataIcon: icon.getAttribute('data-icon'),
          rect: { top: Math.round(rect.top), left: Math.round(rect.left), width: Math.round(rect.width), height: Math.round(rect.height) },
          hasBadge: !!badge,
          badgeText: badge ? badge.innerText : null,
          isSelected: b.getAttribute('aria-selected') === 'true' || b.classList.contains('active') || b.getAttribute('data-tab') === '1'
        };
      });

      // Also get the avatar at the bottom
      const avatar = header.querySelector('img, [role="button"]:last-child');
      const avatarRect = avatar ? avatar.getBoundingClientRect() : null;

      return {
        buttonsCount: buttons.length,
        buttons: buttonsInfo,
        avatar: avatar ? {
          tag: avatar.tagName,
          ariaLabel: avatar.getAttribute('aria-label'),
          src: avatar.getAttribute('src'),
          rect: avatarRect ? { top: Math.round(avatarRect.top), height: Math.round(avatarRect.height) } : null
        } : null
      };
    })()`,
    returnByValue: true
  }
}));

ws.onmessage = (evt) => {
  console.log('Live Rail DOM details:', JSON.stringify(JSON.parse(evt.data).result?.result?.value, null, 2));
  ws.close();
  process.exit(0);
};
