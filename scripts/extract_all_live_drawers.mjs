import WebSocket from 'ws';
import fs from 'fs';

function evalCDP(expr) {
  return new Promise((resolve, reject) => {
    const ws = new WebSocket('ws://127.0.0.1:9223/devtools/page/33AE831CE803E57482AFAF475003C698');
    ws.on('open', () => {
      ws.send(JSON.stringify({
        id: 1,
        method: 'Runtime.evaluate',
        params: { expression: expr, returnByValue: true, awaitPromise: true }
      }));
    });
    ws.on('message', data => {
      const msg = JSON.parse(data);
      if (msg.id === 1) {
        ws.close();
        resolve(msg.result?.result?.value);
      }
    });
    ws.on('error', reject);
  });
}

const serializeFn = `(() => {
  // Find left main drawer or tab body (x: 64..496)
  const all = Array.from(document.querySelectorAll('*'));
  const drawer = all.find(el => {
    const r = el.getBoundingClientRect();
    return Math.abs(r.x - 64) <= 2 && Math.abs(r.width - 432) <= 4 && r.height > 500 && el.parentElement === document.body || (el.getAttribute('data-testid') && el.getAttribute('data-testid').includes('drawer'));
  }) || all.find(el => {
    const r = el.getBoundingClientRect();
    return Math.abs(r.x - 65) <= 2 && Math.abs(r.width - 431) <= 4 && r.height > 500;
  });

  if (!drawer) return { error: 'drawer not found', body: document.body.innerText.slice(0, 300) };

  function serialize(node) {
    if (!node || node.nodeType === 3) return null;
    const rect = node.getBoundingClientRect();
    const style = window.getComputedStyle(node);
    return {
      tag: node.tagName.toLowerCase(),
      role: node.getAttribute('role'),
      ariaLabel: node.getAttribute('aria-label'),
      dataTestid: node.getAttribute('data-testid'),
      rect: { x: Math.round(rect.x), y: Math.round(rect.y), w: Math.round(rect.width), h: Math.round(rect.height) },
      styles: {
        width: style.width,
        height: style.height,
        backgroundColor: style.backgroundColor,
        color: style.color,
        fontSize: style.fontSize,
        fontWeight: style.fontWeight
      },
      text: Array.from(node.childNodes).filter(n => n.nodeType === 3).map(n => n.textContent.trim()).join(' '),
      svg: node.tagName.toLowerCase() === 'svg' ? {
        title: node.querySelector('title')?.textContent,
        viewBox: node.getAttribute('viewBox'),
        paths: Array.from(node.querySelectorAll('path')).map(p => p.getAttribute('d'))
      } : undefined,
      children: Array.from(node.children).map(serialize).filter(Boolean)
    };
  }

  return {
    rect: drawer.getBoundingClientRect(),
    tree: serialize(drawer)
  };
})()`;

async function extractTab(tabName, clickSelector, outPath) {
  console.log(`Extracting ${tabName}...`);
  await evalCDP(`(() => {
    const btn = document.querySelector('${clickSelector}');
    if (btn) btn.click();
    return !!btn;
  })()`);

  await new Promise(r => setTimeout(r, 1000));

  const tree = await evalCDP(serializeFn);
  fs.writeFileSync(outPath, JSON.stringify(tree, null, 2));
  console.log(`Saved ${tabName} to ${outPath}`);
}

async function run() {
  // 1. Calls tab
  await extractTab('Calls', 'button[aria-label="Calls"]', 'analysis/live_calls_exact_tree.json');

  // 2. Status tab
  await extractTab('Status', 'button[aria-label="Status"]', 'analysis/live_status_exact_tree.json');

  // 3. Channels tab
  await extractTab('Channels', 'button[aria-label="Channels"]', 'analysis/live_channels_exact_tree.json');

  // 4. Communities tab
  await extractTab('Communities', 'button[aria-label="Communities"]', 'analysis/live_communities_exact_tree.json');

  // 5. Back to Chats
  await extractTab('Chats', 'button[aria-label="Chats"]', 'analysis/live_chatlist_exact_tree.json');

  // 6. Archived drawer
  await extractTab('Archived', '[data-testid="chatlist-panel-archived-button"]', 'analysis/live_archived_exact_tree.json');

  // Close Archived back to Chats
  await evalCDP(`(() => {
    const btn = document.querySelector('button[aria-label="Back"]');
    if (btn) btn.click();
    return true;
  })()`);

  console.log('ALL TABS & DRAWERS EXTRACTED CLEANLY!');
}

run();
