const LIVE_TARGET = '33AE831CE803E57482AFAF475003C698';

async function inspectLiveNavAndChats() {
  const ws = new WebSocket(`ws://127.0.0.1:9223/devtools/page/${LIVE_TARGET}`);
  await new Promise(r => ws.onopen = r);

  const send = (method, params) => new Promise((resolve) => {
    const id = Math.floor(Math.random() * 100000);
    const handler = (e) => {
      const res = JSON.parse(e.data);
      if (res.id === id) {
        ws.removeEventListener('message', handler);
        resolve(res.result);
      }
    };
    ws.addEventListener('message', handler);
    ws.send(JSON.stringify({ id, method, params }));
  });

  const res = await send('Runtime.evaluate', {
    expression: `
      (() => {
        // 1. Inspect Chats button (active) in left rail
        const chatsBtn = document.querySelector('button[aria-label="Chats"]');
        const chatsParent = chatsBtn?.parentElement;
        const chatsSvg = chatsBtn?.querySelector('svg');
        const chatsCs = chatsBtn ? window.getComputedStyle(chatsBtn) : null;
        const chatsParentCs = chatsParent ? window.getComputedStyle(chatsParent) : null;

        // 2. Inspect Channels button in left rail
        const chBtn = document.querySelector('button[aria-label="Channels"]');
        const chSvg = chBtn?.querySelector('svg');

        // 3. Inspect Archived button in chat list
        const arcBtn = document.querySelector('[data-testid="chatlist-panel-archived-button"]') || document.querySelector('button[aria-label="Archived "]');

        // 4. Inspect first 8 chat rows in #pane-side
        const rows = Array.from(document.querySelectorAll('#pane-side [role="row"]')).slice(0, 10).map(r => ({
          text: r.innerText,
          rect: r.getBoundingClientRect()
        }));

        return {
          chats: {
            btnClasses: chatsBtn?.className,
            parentClasses: chatsParent?.className,
            btnBg: chatsCs?.backgroundColor,
            btnRadius: chatsCs?.borderRadius,
            parentBg: chatsParentCs?.backgroundColor,
            parentRadius: chatsParentCs?.borderRadius,
            width: chatsBtn?.offsetWidth,
            height: chatsBtn?.offsetHeight,
            svg: chatsSvg?.outerHTML
          },
          channels: {
            btnClasses: chBtn?.className,
            svg: chSvg?.outerHTML
          },
          hasArchivedInChatlist: !!arcBtn,
          archivedOuterHTML: arcBtn?.outerHTML?.slice(0, 200),
          rows: rows.map(r => r.text.replace(/\\n/g, ' | '))
        };
      })()
    `,
    returnByValue: true
  });

  console.log('Live Navigation and Chat List inspection:');
  console.log(JSON.stringify(res.result?.value, null, 2));
  ws.close();
}

inspectLiveNavAndChats().catch(console.error);
