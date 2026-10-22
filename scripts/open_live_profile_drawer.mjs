import http from 'http';
import WebSocket from 'ws';
import fs from 'fs';

http.get('http://127.0.0.1:9223/json', (res) => {
  let data = '';
  res.on('data', chunk => data += chunk);
  res.on('end', () => {
    const list = JSON.parse(data);
    const liveTarget = list.find(t => t.id === '33AE831CE803E57482AFAF475003C698');
    const ws = new WebSocket(liveTarget.webSocketDebuggerUrl);
    ws.on('open', () => {
      // Find the Profile item in me-tab-drawer and click it
      ws.send(JSON.stringify({
        id: 600,
        method: 'Runtime.evaluate',
        params: {
          expression: `(() => {
            const items = Array.from(document.querySelectorAll('[data-testid=\"me-tab-drawer\"] [role=\"button\"], [data-testid=\"drawer-left\"] [role=\"button\"]'));
            const profileItem = items.find(el => el.textContent.includes('Profile'));
            if (profileItem) {
              profileItem.click();
              return 'clicked profile item: ' + profileItem.textContent;
            }
            return 'profile item not found';
          })()`,
          returnByValue: true
        }
      }));
      setTimeout(() => {
        // Inspect the opened Profile Drawer
        ws.send(JSON.stringify({
          id: 601,
          method: 'Runtime.evaluate',
          params: {
            expression: `(() => {
              const drawer = document.querySelector('[data-testid=\"profile-drawer\"]') || document.querySelector('[data-testid=\"drawer-left\"]');
              return JSON.stringify({
                drawerTag: drawer ? drawer.tagName : null,
                drawerTestId: drawer ? drawer.getAttribute('data-testid') : null,
                headerTitle: drawer ? drawer.querySelector('h1, h2, [role=\"heading\"]')?.textContent : null,
                drawerWidth: drawer ? window.getComputedStyle(drawer).width : null,
                drawerHTML: drawer ? drawer.outerHTML : null
              });
            })()`,
            returnByValue: true
          }
        }));
      }, 500);
    });
    ws.on('message', (raw) => {
      const msg = JSON.parse(raw);
      if (msg.id === 600) {
        console.log('CLICK STEP:', msg.result?.result?.value);
      }
      if (msg.id === 601) {
        console.log('PROFILE DRAWER INSPECTION:');
        const val = JSON.parse(msg.result?.result?.value);
        console.log('Tag:', val.drawerTag);
        console.log('TestId:', val.drawerTestId);
        console.log('Title:', val.headerTitle);
        console.log('Width:', val.drawerWidth);
        // Write full HTML to file for exact analysis
        fs.writeFileSync('analysis/live_profile_drawer_full.html', val.drawerHTML || '', 'utf8');
        console.log('Written full drawer HTML to analysis/live_profile_drawer_full.html');
        ws.close();
      }
    });
  });
});
