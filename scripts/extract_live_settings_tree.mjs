import WebSocket from 'ws';
import fs from 'fs';

const ws = new WebSocket('ws://127.0.0.1:9223/devtools/page/33AE831CE803E57482AFAF475003C698');
ws.on('open', () => {
  ws.send(JSON.stringify({
    id: 1,
    method: 'Runtime.evaluate',
    params: {
      expression: `(() => {
        const el = document.querySelector('[data-testid="li-profile"]');
        if (!el) return { error: 'li-profile not found' };
        
        let curr = el;
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
      })()`,
      returnByValue: true
    }
  }));
});

ws.on('message', data => {
  const msg = JSON.parse(data);
  if (msg.id === 1) {
    fs.writeFileSync('analysis/live_settings_exact_tree.json', JSON.stringify(msg.result?.result?.value, null, 2));
    console.log('Saved settings tree successfully');
    ws.close();
  }
});
