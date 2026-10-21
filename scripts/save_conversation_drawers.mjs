import WebSocket from 'ws';
import fs from 'fs';

async function saveConversationPanels() {
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

  // Click on the first chat row
  const clickedChat = await send('Runtime.evaluate', {
    expression: `(() => {
      const row = document.querySelector('[data-testid="list-item-0"]') ||
                  document.querySelector('[data-testid="cell-frame-container"]');
      if (row) {
        row.click();
        return true;
      }
      return false;
    })()`,
    returnByValue: true
  });
  console.log('Clicked first chat row:', clickedChat.result.value);
  await new Promise(r => setTimeout(r, 1500));

  // 1. Conversation Header
  const headerHtml = await send('Runtime.evaluate', {
    expression: `(() => {
      const header = document.querySelector('#main header') || document.querySelector('[data-testid="conversation-header"]');
      return header ? header.outerHTML : null;
    })()`,
    returnByValue: true
  });
  if (headerHtml.result.value) {
    fs.writeFileSync('analysis/live-conversation-header.html', headerHtml.result.value, 'utf8');
    console.log('Saved live-conversation-header.html, bytes:', headerHtml.result.value.length);
  }

  // 2. Message Input Bar / Footer
  const footerHtml = await send('Runtime.evaluate', {
    expression: `(() => {
      const footer = document.querySelector('#main footer') || document.querySelector('[data-testid="conversation-footer"]');
      return footer ? footer.outerHTML : null;
    })()`,
    returnByValue: true
  });
  if (footerHtml.result.value) {
    fs.writeFileSync('analysis/live-conversation-footer.html', footerHtml.result.value, 'utf8');
    console.log('Saved live-conversation-footer.html, bytes:', footerHtml.result.value.length);
  }

  // 3. Conversation Message list container & bubbles
  const panelHtml = await send('Runtime.evaluate', {
    expression: `(() => {
      const panel = document.querySelector('#main [data-testid="conversation-panel-messages"]') || document.querySelector('#main');
      return panel ? panel.outerHTML.slice(0, 50000) : null;
    })()`,
    returnByValue: true
  });
  if (panelHtml.result.value) {
    fs.writeFileSync('analysis/live-conversation-messages.html', panelHtml.result.value, 'utf8');
    console.log('Saved live-conversation-messages.html, bytes:', panelHtml.result.value.length);
  }

  // 4. Contact Info drawer: click on conversation header
  await send('Runtime.evaluate', {
    expression: `(() => {
      const header = document.querySelector('#main header');
      if (header) header.click();
    })()`,
    returnByValue: true
  });
  await new Promise(r => setTimeout(r, 1200));

  const contactInfoHtml = await send('Runtime.evaluate', {
    expression: `(() => {
      const drawer = document.querySelector('[data-testid="drawer-right"]') ||
                     document.querySelector('[data-testid*="contact-info"]') ||
                     document.querySelector('.copyable-area:last-child');
      return drawer ? drawer.outerHTML : null;
    })()`,
    returnByValue: true
  });
  if (contactInfoHtml.result.value) {
    fs.writeFileSync('analysis/live-contact-info-drawer.html', contactInfoHtml.result.value, 'utf8');
    console.log('Saved live-contact-info-drawer.html, bytes:', contactInfoHtml.result.value.length);
  }

  // Close contact info drawer
  await send('Runtime.evaluate', {
    expression: `(() => {
      const closeBtn = document.querySelector('[data-testid="btn-closer-drawer"]') || document.querySelector('button[aria-label="Close"]');
      if (closeBtn) closeBtn.click();
    })()`,
    returnByValue: true
  });
  await new Promise(r => setTimeout(r, 800));

  // 5. Search in Chat drawer: click search button in conversation header
  await send('Runtime.evaluate', {
    expression: `(() => {
      const searchBtn = document.querySelector('#main header button[aria-label="Search..."]') ||
                        document.querySelector('#main header [data-testid="menu-bar-search"]');
      if (searchBtn) searchBtn.click();
    })()`,
    returnByValue: true
  });
  await new Promise(r => setTimeout(r, 1200));

  const searchDrawerHtml = await send('Runtime.evaluate', {
    expression: `(() => {
      const drawer = document.querySelector('[data-testid="drawer-right"]') ||
                     document.querySelector('[data-testid*="search"]') ||
                     document.querySelector('.copyable-area:last-child');
      return drawer ? drawer.outerHTML : null;
    })()`,
    returnByValue: true
  });
  if (searchDrawerHtml.result.value) {
    fs.writeFileSync('analysis/live-search-in-chat-drawer.html', searchDrawerHtml.result.value, 'utf8');
    console.log('Saved live-search-in-chat-drawer.html, bytes:', searchDrawerHtml.result.value.length);
  }

  // Close search drawer
  await send('Runtime.evaluate', {
    expression: `(() => {
      const closeBtn = document.querySelector('[data-testid="btn-closer-drawer"]') || document.querySelector('button[aria-label="Close"]');
      if (closeBtn) closeBtn.click();
    })()`,
    returnByValue: true
  });
  await new Promise(r => setTimeout(r, 800));

  // 6. Attach menu: click attach button in conversation footer
  await send('Runtime.evaluate', {
    expression: `(() => {
      const attachBtn = document.querySelector('button[aria-label="Attach"]') ||
                        document.querySelector('[data-testid="clip"]');
      if (attachBtn) attachBtn.click();
    })()`,
    returnByValue: true
  });
  await new Promise(r => setTimeout(r, 600));

  const attachHtml = await send('Runtime.evaluate', {
    expression: `(() => {
      const menu = document.querySelector('[data-testid="attach-menu"]') ||
                   document.querySelector('[role="menu"]') ||
                   document.querySelector('ul[aria-label*="Attach"]');
      return menu ? menu.outerHTML : null;
    })()`,
    returnByValue: true
  });
  if (attachHtml.result.value) {
    fs.writeFileSync('analysis/live-attach-menu.html', attachHtml.result.value, 'utf8');
    console.log('Saved live-attach-menu.html, bytes:', attachHtml.result.value.length);
  }

  // Close attach menu
  await send('Runtime.evaluate', {
    expression: `document.body.click()`,
    returnByValue: true
  });

  ws.close();
}

saveConversationPanels().catch(console.error);
