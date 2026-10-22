const LIVE_TARGET = '33AE831CE803E57482AFAF475003C698';

async function cdpEval(expression) {
  return new Promise((resolve, reject) => {
    const ws = new WebSocket(`ws://127.0.0.1:9223/devtools/page/${LIVE_TARGET}`);
    ws.onopen = () => {
      ws.send(JSON.stringify({
        id: 1,
        method: 'Runtime.evaluate',
        params: { expression, returnByValue: true }
      }));
    };
    ws.onmessage = (event) => {
      const res = JSON.parse(event.data);
      if (res.id === 1) {
        ws.close();
        resolve(res.result?.result?.value);
      }
    };
    ws.onerror = reject;
  });
}

async function testTransitions() {
  console.log('1. Checking current buttons...');
  let btns = await cdpEval('Array.from(document.querySelectorAll("button, [role=\\"button\\"]")).map(el => el.getAttribute("aria-label")).filter(Boolean)');
  console.log('Buttons:', btns.slice(0, 10));

  console.log('2. Clicking Chats to reset...');
  await cdpEval('const b = document.querySelector("button[aria-label=\\"Chats\\"]"); if (b) b.click();');
  await new Promise(r => setTimeout(r, 400));

  console.log('3. Checking if Back button exists and clicking it...');
  await cdpEval('const b = document.querySelector("button[aria-label=\\"Back\\"], button[aria-label=\\"Close\\"]"); if (b) b.click();');
  await new Promise(r => setTimeout(r, 400));

  btns = await cdpEval('Array.from(document.querySelectorAll("button, [role=\\"button\\"]")).map(el => el.getAttribute("aria-label")).filter(Boolean)');
  console.log('Buttons after reset:', btns.slice(0, 10));
}

testTransitions().catch(console.error);
