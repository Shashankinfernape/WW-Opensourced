import WebSocket from 'ws';

async function run() {
  const res = await fetch('http://127.0.0.1:9223/json');
  const targets = await res.json();
  const wa = targets.find(t => t.url.includes('web.whatsapp.com') && t.type === 'page');
  const ws = new WebSocket(wa.webSocketDebuggerUrl);

  await new Promise((resolve, reject) => {
    ws.on('open', resolve);
    ws.on('error', reject);
  });

  let idCounter = 1;
  function send(method, params = {}) {
    return new Promise((resolve) => {
      const id = idCounter++;
      const handler = (msg) => {
        const data = JSON.parse(msg);
        if (data.id === id) {
          ws.off('message', handler);
          resolve(data.result);
        }
      };
      ws.on('message', handler);
      ws.send(JSON.stringify({ id, method, params }));
    });
  }

  const tabs = ['Calls', 'Channels', 'Communities', 'Media', 'You'];
  for (const tab of tabs) {
    await send('Runtime.evaluate', {
      expression: `(() => {
        const btn = Array.from(document.querySelectorAll('button')).find(b => b.getAttribute('aria-label') === '${tab}');
        if (btn) btn.click();
      })()`
    });
    await new Promise(r => setTimeout(r, 600));
    const info = await send('Runtime.evaluate', {
      expression: `(() => {
        const titles = Array.from(document.querySelectorAll('h1, h2, [data-testid="chatlist-header"] span, header span')).map(e => e.innerText.trim()).filter(Boolean);
        return [...new Set(titles)].slice(0, 5);
      })()`,
      returnByValue: true
    });
    console.log(`Tab ${tab}:`, info.result ? info.result.value : null);
  }

  // Return to Chats
  await send('Runtime.evaluate', {
    expression: `(() => {
      const btn = Array.from(document.querySelectorAll('button')).find(b => b.getAttribute('aria-label') === 'Chats');
      if (btn) btn.click();
    })()`
  });

  ws.close();
}

run().catch(console.error);
