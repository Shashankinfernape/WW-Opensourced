import WebSocket from 'ws';
import fs from 'fs';

async function runInteractionTests() {
  console.log('Starting WhatsApp Web Interaction Test Suite (over CDP)...');
  const res = await fetch('http://127.0.0.1:9223/json');
  const targets = await res.json();
  const recon = targets.find(t => t.url.includes('127.0.0.1:5173') && t.type === 'page');

  if (!recon) {
    console.error('Reconstruction page not found on port 9223!');
    process.exit(1);
  }

  const ws = new WebSocket(recon.webSocketDebuggerUrl);
  await new Promise(r => ws.on('open', r));

  let idCounter = 1;
  function sendMsg(method, params = {}) {
    return new Promise(resolve => {
      const id = idCounter++;
      const handler = (msg) => {
        const d = JSON.parse(msg);
        if (d.id === id) { ws.off('message', handler); resolve(d.result); }
      };
      ws.on('message', handler);
      ws.send(JSON.stringify({ id, method, params }));
    });
  }

  async function evaluate(expr) {
    const r = await sendMsg('Runtime.evaluate', {
      expression: expr,
      awaitPromise: true,
      returnByValue: true
    });
    return r?.result?.value;
  }

  // Ensure normal window size & reload page
  await sendMsg('Emulation.setDeviceMetricsOverride', { width: 1034, height: 737, deviceScaleFactor: 1, mobile: false });
  await sendMsg('Page.reload');
  await new Promise(r => setTimeout(r, 1200));

  const testResults = [];
  function assert(name, condition, details = '') {
    const status = condition ? 'PASS' : 'FAIL';
    testResults.push({ name, status, details });
    console.log(`[${status}] ${name} ${details ? '(' + details + ')' : ''}`);
  }

  // ==========================================
  // 1. SWITCHING CHATS & HOMEPAGE INTRO
  // ==========================================
  console.log('\n--- Test Suite 1: Switching Chats & Homepage Intro ---');

  // Verify initial landing page shows intro-panel
  let hasIntro = await evaluate(`!!document.querySelector('[data-testid="intro-panel"]')`);
  assert('Initial landing page shows intro-panel', hasIntro === true, `Intro present: ${hasIntro}`);

  // Click on Chat 1 (Alex Rivera) to open conversation
  await evaluate(`(() => {
    const rows = Array.from(document.querySelectorAll('[data-testid="cell-frame-container"]'));
    const row1 = rows.find(r => r.innerText.includes('Alex Rivera'));
    if (row1) row1.click();
  })()`);
  await new Promise(r => setTimeout(r, 300));

  let currentHeader = await evaluate(`document.querySelector('[data-testid="conversation-info-header-chat-title"]')?.innerText`);
  assert('Open active chat "Alex Rivera"', currentHeader === 'Alex Rivera', `Header: ${currentHeader}`);

  // Click on Chat 2 (Jordan Lee)
  await evaluate(`(() => {
    const rows = Array.from(document.querySelectorAll('[data-testid="cell-frame-container"]'));
    const row2 = rows.find(r => r.innerText.includes('Jordan Lee'));
    if (row2) row2.click();
  })()`);
  await new Promise(r => setTimeout(r, 300));

  currentHeader = await evaluate(`document.querySelector('[data-testid="conversation-info-header-chat-title"]')?.innerText`);
  assert('Switch to chat "Jordan Lee"', currentHeader === 'Jordan Lee', `Header: ${currentHeader}`);

  // Click on Chat 3 (Taylor Brooks)
  await evaluate(`(() => {
    const rows = Array.from(document.querySelectorAll('[data-testid="cell-frame-container"]'));
    const row3 = rows.find(r => r.innerText.includes('Taylor Brooks'));
    if (row3) row3.click();
  })()`);
  await new Promise(r => setTimeout(r, 300));

  currentHeader = await evaluate(`document.querySelector('[data-testid="conversation-info-header-chat-title"]')?.innerText`);
  assert('Switch to chat "Taylor Brooks"', currentHeader === 'Taylor Brooks', `Header: ${currentHeader}`);

  // Click back to Chat 1 (Alex Rivera)
  await evaluate(`(() => {
    const rows = Array.from(document.querySelectorAll('[data-testid="cell-frame-container"]'));
    const row1 = rows.find(r => r.innerText.includes('Alex Rivera'));
    if (row1) row1.click();
  })()`);
  await new Promise(r => setTimeout(r, 300));

  currentHeader = await evaluate(`document.querySelector('[data-testid="conversation-info-header-chat-title"]')?.innerText`);
  assert('Switch back to chat "Alex Rivera"', currentHeader === 'Alex Rivera', `Header: ${currentHeader}`);

  // ==========================================
  // 2. FILTER PILLS
  // ==========================================
  console.log('\n--- Test Suite 2: Filter Pills ---');

  // Click 'Unread' pill
  await evaluate(`(() => {
    const pills = Array.from(document.querySelectorAll('button[role="tab"]'));
    const unread = pills.find(p => p.innerText.trim().toLowerCase() === 'unread');
    if (unread) unread.click();
  })()`);
  await new Promise(r => setTimeout(r, 300));

  let activePill = await evaluate(`document.querySelector('button[role="tab"][aria-selected="true"]')?.innerText?.trim()`);
  let visibleRowsCount = await evaluate(`document.querySelectorAll('[data-testid="cell-frame-container"]').length`);
  assert('Filter pill "Unread" active', activePill === 'Unread', `Active: ${activePill}, Rows: ${visibleRowsCount}`);

  // Click 'Favourites' pill
  await evaluate(`(() => {
    const pills = Array.from(document.querySelectorAll('button[role="tab"]'));
    const fav = pills.find(p => p.innerText.trim().toLowerCase() === 'favourites');
    if (fav) fav.click();
  })()`);
  await new Promise(r => setTimeout(r, 300));

  activePill = await evaluate(`document.querySelector('button[role="tab"][aria-selected="true"]')?.innerText?.trim()`);
  assert('Filter pill "Favourites" active', activePill === 'Favourites', `Active: ${activePill}`);

  // Click 'Groups' pill
  await evaluate(`(() => {
    const pills = Array.from(document.querySelectorAll('button[role="tab"]'));
    const grp = pills.find(p => p.innerText.trim().toLowerCase() === 'groups');
    if (grp) grp.click();
  })()`);
  await new Promise(r => setTimeout(r, 300));

  activePill = await evaluate(`document.querySelector('button[role="tab"][aria-selected="true"]')?.innerText?.trim()`);
  assert('Filter pill "Groups" active', activePill === 'Groups', `Active: ${activePill}`);

  // Click 'All' pill
  await evaluate(`(() => {
    const pills = Array.from(document.querySelectorAll('button[role="tab"]'));
    const all = pills.find(p => p.innerText.trim().toLowerCase() === 'all');
    if (all) all.click();
  })()`);
  await new Promise(r => setTimeout(r, 300));

  activePill = await evaluate(`document.querySelector('button[role="tab"][aria-selected="true"]')?.innerText?.trim()`);
  visibleRowsCount = await evaluate(`document.querySelectorAll('[data-testid="cell-frame-container"]').length`);
  assert('Filter pill "All" reset', activePill === 'All' && visibleRowsCount >= 4, `Active: ${activePill}, Rows: ${visibleRowsCount}`);

  // ==========================================
  // 3. SEARCH
  // ==========================================
  console.log('\n--- Test Suite 3: Search Bar ---');

  // Input search query "Taylor" using React native setter
  await evaluate(`(() => {
    const input = document.querySelector('input[data-testid="chat-list-search"]') || document.querySelector('input[placeholder*="Search"]');
    if (input) {
      const setter = Object.getOwnPropertyDescriptor(window.HTMLInputElement.prototype, 'value').set;
      setter.call(input, 'Taylor');
      input.dispatchEvent(new Event('input', { bubbles: true }));
      input.dispatchEvent(new Event('change', { bubbles: true }));
    }
  })()`);
  await new Promise(r => setTimeout(r, 400));

  let filteredNames = await evaluate(`(() => {
    const names = Array.from(document.querySelectorAll('[data-testid="cell-frame-container"] span[title]')).map(s => s.innerText);
    return names;
  })()`);
  assert('Search for "Taylor"', filteredNames.length === 1 && filteredNames[0].includes('Taylor'), `Results: ${JSON.stringify(filteredNames)}`);

  // Clear search
  await evaluate(`(() => {
    const input = document.querySelector('input[data-testid="chat-list-search"]') || document.querySelector('input[placeholder*="Search"]');
    if (input) {
      const setter = Object.getOwnPropertyDescriptor(window.HTMLInputElement.prototype, 'value').set;
      setter.call(input, '');
      input.dispatchEvent(new Event('input', { bubbles: true }));
      input.dispatchEvent(new Event('change', { bubbles: true }));
    }
  })()`);
  await new Promise(r => setTimeout(r, 400));

  visibleRowsCount = await evaluate(`document.querySelectorAll('[data-testid="cell-frame-container"]').length`);
  assert('Clear search restores chat list', visibleRowsCount >= 4, `Rows count: ${visibleRowsCount}`);

  // ==========================================
  // 4. SEND MESSAGE & ACK PROGRESSION (1 -> 3)
  // ==========================================
  console.log('\n--- Test Suite 4: Send Message & Ack Progression ---');

  const testMsg = 'Test message verification ' + Date.now();
  await evaluate(`(() => {
    const editable = document.querySelector('div[contenteditable="true"][data-tab="10"]') || document.querySelector('div[contenteditable="true"]');
    if (editable) {
      editable.focus();
      editable.innerText = '${testMsg}';
      editable.dispatchEvent(new Event('input', { bubbles: true }));
    }
  })()`);
  await new Promise(r => setTimeout(r, 200));

  // Click send button
  await evaluate(`(() => {
    const sendBtn = document.querySelector('button[aria-label="Send"]') || document.querySelector('button[aria-label*="send" i]');
    if (sendBtn) sendBtn.click();
  })()`);
  await new Promise(r => setTimeout(r, 300));

  // Check immediate ACK state: ack = 1 (single check icon msg-check)
  let initialAck = await evaluate(`(() => {
    const messages = Array.from(document.querySelectorAll('[data-testid="msg-container"]'));
    const lastMsg = messages[messages.length - 1];
    const hasSingleCheck = lastMsg?.querySelector('svg[data-icon="msg-check"]') !== null || lastMsg?.innerHTML.includes('msg-check');
    const hasDblCheck = lastMsg?.querySelector('svg[data-icon="wds-ic-read"]') !== null || lastMsg?.innerHTML.includes('wds-ic-read');
    return { hasSingleCheck, hasDblCheck, text: lastMsg?.innerText };
  })()`);

  assert('Message sent with initial ACK 1 (single check)', initialAck.hasSingleCheck && !initialAck.hasDblCheck, `Ack state: single=${initialAck.hasSingleCheck}, dbl=${initialAck.hasDblCheck}`);

  // Wait 1.0s for simulated network/server ACK response
  console.log('Waiting 1.0s for server ACK progression...');
  await new Promise(r => setTimeout(r, 1000));

  let finalAck = await evaluate(`(() => {
    const messages = Array.from(document.querySelectorAll('[data-testid="msg-container"]'));
    const lastMsg = messages[messages.length - 1];
    const hasSingleCheck = lastMsg?.querySelector('svg[data-icon="msg-check"]') !== null || lastMsg?.innerHTML.includes('msg-check');
    const hasDblCheck = lastMsg?.querySelector('svg[data-icon="wds-ic-read"]') !== null || lastMsg?.innerHTML.includes('wds-ic-read');
    return { hasSingleCheck, hasDblCheck, text: lastMsg?.innerText };
  })()`);

  assert('ACK progression to ACK 3 (read receipts double check)', finalAck.hasDblCheck, `Ack state: single=${finalAck.hasSingleCheck}, dbl=${finalAck.hasDblCheck}`);

  // ==========================================
  // 5. DRAWERS & MENUS OPEN/CLOSE
  // ==========================================
  console.log('\n--- Test Suite 5: Opening and Closing Drawers & Menus ---');

  // 5a. Chatlist Context Menu
  await evaluate(`(() => {
    const menuBtn = document.querySelector('header[data-testid="chatlist-header"] button[aria-label="Menu"]') || Array.from(document.querySelectorAll('header[data-testid="chatlist-header"] button')).pop();
    if (menuBtn) menuBtn.click();
  })()`);
  await new Promise(r => setTimeout(r, 300));
  let isMenuOpen = await evaluate(`document.querySelectorAll('[role="menuitem"]').length > 0`);
  assert('Chatlist menu opened', isMenuOpen, 'Items found in menu');

  // Close menu via backdrop
  await evaluate(`(() => {
    const backdrop = document.querySelector('div[style*="position: fixed"]');
    if (backdrop) backdrop.click();
  })()`);
  await new Promise(r => setTimeout(r, 300));
  isMenuOpen = await evaluate(`document.querySelectorAll('[role="menuitem"]').length > 0`);
  assert('Chatlist menu closed', !isMenuOpen, 'Menu dismissed');

  // 5b. Conversation Context Menu
  await evaluate(`(() => {
    const menuBtn = document.querySelector('header[data-testid="conversation-header"] button[aria-label="Menu"]') || Array.from(document.querySelectorAll('header[data-testid="conversation-header"] button')).pop();
    if (menuBtn) menuBtn.click();
  })()`);
  await new Promise(r => setTimeout(r, 300));
  isMenuOpen = await evaluate(`document.querySelectorAll('[role="menuitem"]').length > 0`);
  assert('Conversation menu opened', isMenuOpen, 'Items found in menu');

  // Close conversation menu via backdrop
  await evaluate(`(() => {
    const backdrop = document.querySelector('div[style*="position: fixed"]');
    if (backdrop) backdrop.click();
  })()`);
  await new Promise(r => setTimeout(r, 300));
  isMenuOpen = await evaluate(`document.querySelectorAll('[role="menuitem"]').length > 0`);
  assert('Conversation menu closed', !isMenuOpen, 'Menu dismissed');

  // 5c. Attach Menu
  await evaluate(`(() => {
    const attachBtn = document.querySelector('button[aria-label="Attach"]') || Array.from(document.querySelectorAll('footer button')).find(b => b.querySelector('svg[data-icon="ic-attach-file"]') || b.querySelector('svg[data-icon="attach"]'));
    if (attachBtn) attachBtn.click();
  })()`);
  await new Promise(r => setTimeout(r, 300));
  let isAttachOpen = await evaluate(`document.body.innerHTML.includes('Photos & videos') || document.body.innerHTML.includes('Document')`);
  assert('Attach menu opened', isAttachOpen, 'Attach options rendered');

  // Close attach menu via backdrop
  await evaluate(`(() => {
    const backdrop = document.querySelector('div[style*="position: fixed"]');
    if (backdrop) backdrop.click();
  })()`);
  await new Promise(r => setTimeout(r, 300));

  // 5d. Emoji Panel
  await evaluate(`(() => {
    const emojiBtn = document.querySelector('button[aria-label="Smiley"]') || Array.from(document.querySelectorAll('footer button')).find(b => b.querySelector('svg[data-icon="sticker-smiley"]'));
    if (emojiBtn) emojiBtn.click();
  })()`);
  await new Promise(r => setTimeout(r, 300));
  let isEmojiOpen = await evaluate(`document.body.innerHTML.includes('Emoji') || document.body.innerHTML.includes('GIF') || document.body.innerHTML.includes('Sticker')`);
  assert('Emoji panel opened', isEmojiOpen, 'Emoji tabs rendered');

  // Close emoji panel (toggle click)
  await evaluate(`(() => {
    const emojiBtn = document.querySelector('button[aria-label="Smiley"]') || Array.from(document.querySelectorAll('footer button')).find(b => b.querySelector('svg[data-icon="sticker-smiley"]'));
    if (emojiBtn) emojiBtn.click();
  })()`);
  await new Promise(r => setTimeout(r, 300));

  // 5e. Contact Info Drawer
  await evaluate(`(() => {
    const headerInfo = document.querySelector('[data-testid="conversation-info-header"]');
    if (headerInfo) headerInfo.click();
  })()`);
  await new Promise(r => setTimeout(r, 400));
  let isContactDrawerOpen = await evaluate(`document.body.innerHTML.includes('Contact info')`);
  assert('Contact Info drawer opened', isContactDrawerOpen, 'Contact details displayed');

  // Close Contact Info drawer
  await evaluate(`(() => {
    const closeBtn = document.querySelector('[data-testid="drawer-right"] header button[aria-label="Close"]') || Array.from(document.querySelectorAll('[data-testid="drawer-right"] header button')).pop();
    if (closeBtn) closeBtn.click();
  })()`);
  await new Promise(r => setTimeout(r, 300));
  let isContactDrawerClosed = await evaluate(`!document.body.innerHTML.includes('Contact info')`);
  assert('Contact Info drawer closed', isContactDrawerClosed, 'Drawer dismissed');

  // 5f. Chat Search Drawer
  await evaluate(`(() => {
    const searchBtn = document.querySelector('header[data-testid="conversation-header"] button[aria-label="Search..."]');
    if (searchBtn) searchBtn.click();
  })()`);
  await new Promise(r => setTimeout(r, 400));
  let isSearchDrawerOpen = await evaluate(`document.body.innerHTML.includes('Search messages')`);
  assert('Chat Search drawer opened', isSearchDrawerOpen, 'Search drawer displayed');

  // Close Chat Search drawer
  await evaluate(`(() => {
    const closeBtn = document.querySelector('[data-testid="drawer-right"] header button[aria-label="Close"]') || Array.from(document.querySelectorAll('[data-testid="drawer-right"] header button')).pop();
    if (closeBtn) closeBtn.click();
  })()`);
  await new Promise(r => setTimeout(r, 300));
  let isSearchDrawerClosed = await evaluate(`!document.body.innerHTML.includes('Search messages')`);
  assert('Chat Search drawer closed', isSearchDrawerClosed, 'Search drawer dismissed');

  // 5g. New Chat Drawer
  await evaluate(`(() => {
    const newChatBtn = document.querySelector('header[data-testid="chatlist-header"] button[aria-label="New chat"]');
    if (newChatBtn) newChatBtn.click();
  })()`);
  await new Promise(r => setTimeout(r, 400));
  let isNewChatOpen = await evaluate(`document.body.innerHTML.includes('New chat') && document.body.innerHTML.includes('New group')`);
  assert('New Chat panel opened', isNewChatOpen, 'New chat contact list displayed');

  // Close New Chat panel (click back button)
  await evaluate(`(() => {
    const backBtn = document.querySelector('header button[aria-label="Back"]');
    if (backBtn) backBtn.click();
  })()`);
  await new Promise(r => setTimeout(r, 300));
  let isNewChatClosed = await evaluate(`!document.body.innerHTML.includes('New group')`);
  assert('New Chat panel closed', isNewChatClosed, 'Returned to chat list');

  // ==========================================
  // 6. RAIL NAVIGATION
  // ==========================================
  console.log('\n--- Test Suite 6: Navigation Rail ---');

  // 6a. Status Tab
  await evaluate(`(() => {
    const statusTab = Array.from(document.querySelectorAll('header button')).find(b => b.getAttribute('aria-label')?.includes('Status') || b.querySelector('svg[data-icon="ic-status"]'));
    if (statusTab) statusTab.click();
  })()`);
  await new Promise(r => setTimeout(r, 300));
  let panelHeader = await evaluate(`document.querySelector('h1, h2, [data-testid="drawer-title-body"]')?.innerText?.trim()`);
  assert('Rail: Status tab', panelHeader?.includes('Status'), `Header: ${panelHeader}`);

  // 6b. Channels Tab
  await evaluate(`(() => {
    const chTab = Array.from(document.querySelectorAll('header button')).find(b => b.getAttribute('aria-label')?.includes('Channels') || b.querySelector('svg[data-icon="ic-channels"]'));
    if (chTab) chTab.click();
  })()`);
  await new Promise(r => setTimeout(r, 300));
  panelHeader = await evaluate(`document.querySelector('h1, h2, [data-testid="drawer-title-body"]')?.innerText?.trim()`);
  assert('Rail: Channels tab', panelHeader?.includes('Channels'), `Header: ${panelHeader}`);

  // 6c. Communities Tab
  await evaluate(`(() => {
    const comTab = Array.from(document.querySelectorAll('header button')).find(b => b.getAttribute('aria-label')?.includes('Communities') || b.querySelector('svg[data-icon="ic-communities"]'));
    if (comTab) comTab.click();
  })()`);
  await new Promise(r => setTimeout(r, 300));
  panelHeader = await evaluate(`document.querySelector('h1, h2, [data-testid="drawer-title-body"]')?.innerText?.trim()`);
  assert('Rail: Communities tab', panelHeader?.includes('Communities'), `Header: ${panelHeader}`);

  // 6d. Calls Tab
  await evaluate(`(() => {
    const callTab = Array.from(document.querySelectorAll('header button')).find(b => b.getAttribute('aria-label')?.includes('Calls') || b.querySelector('svg[data-icon="ic-call"]'));
    if (callTab) callTab.click();
  })()`);
  await new Promise(r => setTimeout(r, 300));
  panelHeader = await evaluate(`document.querySelector('h1, h2, [data-testid="drawer-title-body"]')?.innerText?.trim()`);
  assert('Rail: Calls tab', panelHeader?.includes('Calls'), `Header: ${panelHeader}`);

  // 6e. Settings Tab (Profile / You tab at bottom of rail)
  await evaluate(`(() => {
    const setTab = Array.from(document.querySelectorAll('header button')).find(b => b.getAttribute('aria-label')?.includes('You') || b.getAttribute('aria-label')?.includes('Settings'));
    if (setTab) setTab.click();
  })()`);
  await new Promise(r => setTimeout(r, 300));
  let hasSettings = await evaluate(`document.body.innerHTML.includes('Settings') || document.body.innerHTML.includes('Notifications')`);
  assert('Rail: Settings tab', hasSettings, 'Settings options rendered');

  // 6f. Return to Chats Tab
  await evaluate(`(() => {
    const chatTab = Array.from(document.querySelectorAll('header button')).find(b => b.getAttribute('aria-label')?.includes('Chats') || b.querySelector('svg[data-icon="wds-ic-chat-filled"]'));
    if (chatTab) chatTab.click();
  })()`);
  await new Promise(r => setTimeout(r, 300));
  let hasChatList = await evaluate(`document.querySelector('[data-testid="chatlist-header"]') !== null`);
  assert('Rail: Return to Chats tab', hasChatList, 'Chat list header active');

  ws.close();

  console.log('\n==========================================');
  console.log('INTERACTION TEST RUN SUMMARY:');
  const total = testResults.length;
  const passed = testResults.filter(t => t.status === 'PASS').length;
  const failed = testResults.filter(t => t.status === 'FAIL').length;
  console.log(`TOTAL: ${total} | PASSED: ${passed} | FAILED: ${failed}`);
  console.log('==========================================\n');

  fs.writeFileSync('analysis/compare/interaction-test-results.json', JSON.stringify({
    total,
    passed,
    failed,
    results: testResults
  }, null, 2));

  if (failed > 0) {
    process.exit(1);
  }
}

runInteractionTests().catch(console.error);
