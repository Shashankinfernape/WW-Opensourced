import WebSocket from 'ws';
import fs from 'fs';

const ws = new WebSocket('ws://127.0.0.1:9223/devtools/page/33AE831CE803E57482AFAF475003C698');
ws.on('open', () => {
  ws.send(JSON.stringify({
    id: 1,
    method: 'Runtime.evaluate',
    params: {
      expression: `(() => {
        // Find element containing "Edit profile"
        const all = Array.from(document.querySelectorAll('*'));
        const h = all.find(el => el.textContent === 'Edit profile' && el.children.length === 0);
        if (!h) return { error: 'header not found' };
        
        // Find drawer container
        let curr = h;
        while (curr && curr.parentElement && curr.parentElement.clientWidth < 600 && curr.parentElement !== document.body) {
          curr = curr.parentElement;
        }
        
        // Let's get the drawer element
        const drawer = curr;
        
        function serialize(node) {
          if (node.nodeType === 3) return null;
          const rect = node.getBoundingClientRect();
          const style = window.getComputedStyle(node);
          return {
            tag: node.tagName.toLowerCase(),
            className: node.className,
            role: node.getAttribute('role'),
            ariaLabel: node.getAttribute('aria-label'),
            title: node.getAttribute('title'),
            rect: { x: Math.round(rect.x), y: Math.round(rect.y), w: Math.round(rect.width), h: Math.round(rect.height) },
            styles: {
              display: style.display,
              flexDirection: style.flexDirection,
              alignItems: style.alignItems,
              justifyContent: style.justifyContent,
              width: style.width,
              height: style.height,
              padding: style.padding,
              margin: style.margin,
              backgroundColor: style.backgroundColor,
              color: style.color,
              fontSize: style.fontSize,
              fontWeight: style.fontWeight,
              lineHeight: style.lineHeight,
              borderRadius: style.borderRadius
            },
            text: Array.from(node.childNodes).filter(n => n.nodeType === 3).map(n => n.textContent.trim()).join(' '),
            svg: node.tagName.toLowerCase() === 'svg' ? {
              viewBox: node.getAttribute('viewBox'),
              width: node.getAttribute('width') || style.width,
              height: node.getAttribute('height') || style.height,
              paths: Array.from(node.querySelectorAll('path')).map(p => ({
                d: p.getAttribute('d'),
                fill: p.getAttribute('fill') || style.fill
              }))
            } : undefined,
            children: Array.from(node.children).map(serialize).filter(Boolean)
          };
        }
        
        return {
          drawerRect: drawer.getBoundingClientRect(),
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
    fs.writeFileSync('analysis/live_profile_exact_tree.json', JSON.stringify(msg.result?.result?.value, null, 2));
    console.log('Saved to analysis/live_profile_exact_tree.json');
    ws.close();
  }
});
