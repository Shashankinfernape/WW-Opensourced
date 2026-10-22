import http from 'http';
import WebSocket from 'ws';

http.get('http://127.0.0.1:9223/json', (res) => {
  let data = '';
  res.on('data', chunk => data += chunk);
  res.on('end', () => {
    const list = JSON.parse(data);
    const liveTarget = list.find(t => t.id === '33AE831CE803E57482AFAF475003C698');
    const ws = new WebSocket(liveTarget.webSocketDebuggerUrl);
    ws.on('open', () => {
      ws.send(JSON.stringify({
        id: 200,
        method: 'Runtime.evaluate',
        params: {
          expression: `(() => {
            const rows = Array.from(document.querySelectorAll('#pane-side [role=\"row\"]')).slice(0, 8);
            return JSON.stringify(rows.map((row, i) => {
              const titleEl = row.querySelector('[data-testid=\"cell-frame-title\"] span');
              const title = titleEl ? titleEl.textContent : '';
              const timeEl = row.querySelector('[data-testid=\"cell-frame-primary-detail\"] span');
              const time = timeEl ? timeEl.textContent : '';
              const secEl = row.querySelector('[data-testid=\"cell-frame-secondary\"]');
              const isMuted = Boolean(row.querySelector('[data-testid=\"mute-notifications-refreshed\"]') || row.querySelector('svg[title=\"ic-notifications-off\"]'));
              const isPinned = Boolean(row.querySelector('[aria-label*=\"Pinned\"]') || row.querySelector('[data-icon=\"ic-push-pin\"]'));
              const unreadEl = row.querySelector('[data-testid=\"icon-unread-count\"]') || row.querySelector('[data-testid=\"icon-unread-indicator\"]');
              const unreadText = unreadEl ? unreadEl.textContent : '';
              const hasAck = Boolean(row.querySelector('[data-testid=\"wds-ic-read\"]') || row.querySelector('[data-testid=\"wds-ic-delivered\"]') || row.querySelector('[data-testid=\"msg-dblcheck\"]'));
              const hasSticker = Boolean(row.querySelector('[data-testid=\"status-sticker\"]') || row.querySelector('[data-icon=\"wds-ic-sticker\"]'));
              const imgEl = row.querySelector('img');
              const hasImg = Boolean(imgEl && imgEl.src);
              return {
                index: i,
                titleLength: title.length,
                hasImg,
                time,
                isMuted,
                isPinned,
                unreadText,
                hasAck,
                hasSticker,
                secText: secEl ? secEl.textContent : ''
              };
            }));
          })()`,
          returnByValue: true
        }
      }));
    });
    ws.on('message', (raw) => {
      const msg = JSON.parse(raw);
      if (msg.id === 200) {
        console.log('LIVE ROWS INSPECTION:');
        console.log(msg.result?.result?.value);
        ws.close();
      }
    });
  });
});
