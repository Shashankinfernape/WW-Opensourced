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

async function run() {
  console.log('1. First, click Chats in LeftNavRail to return to normal chatlist...');
  await evalCDP(`(() => {
    const btn = document.querySelector('button[aria-label="Chats"]');
    if (btn) btn.click();
    return true;
  })()`);

  await new Promise(r => setTimeout(r, 800));

  console.log('2. Click New chat button...');
  await evalCDP(`(() => {
    const btn = document.querySelector('button[aria-label="New chat"]');
    if (btn) btn.click();
    return true;
  })()`);

  await new Promise(r => setTimeout(r, 800));

  console.log('3. Extracting New chat drawer tree...');
  const tree = await evalCDP(`(() => {
    // Find drawer
    const all = Array.from(document.querySelectorAll('*'));
    const h = all.find(el => el.textContent === 'New chat' && el.children.length === 0);
    if (!h) return { error: 'New chat header not found', body: document.body.innerText.slice(0, 300) };
    
    let curr = h;
    while (curr && curr.parentElement && curr.parentElement.clientWidth < 600 && curr.parentElement !== document.body) {
      curr = curr.parentElement;
    }
    const drawer = curr;
    
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
  })()`);

  fs.writeFileSync('analysis/live_newchat_exact_tree.json', JSON.stringify(tree, null, 2));
  console.log('Saved New chat tree!');

  console.log('4. Click Back button to close New chat drawer...');
  await evalCDP(`(() => {
    const btn = document.querySelector('button[aria-label="Back"]');
    if (btn) btn.click();
    return true;
  })()`);
}

run();
