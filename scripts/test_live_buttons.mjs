const ws = new WebSocket('ws://127.0.0.1:9223/devtools/page/33AE831CE803E57482AFAF475003C698');
ws.onopen = () => {
  ws.send(JSON.stringify({
    id: 1,
    method: 'Runtime.evaluate',
    params: {
      expression: 'Array.from(document.querySelectorAll("button, [role=\\"button\\"]")).map(el => el.getAttribute("aria-label")).filter(Boolean)',
      returnByValue: true
    }
  }));
};
ws.onmessage = (event) => {
  const res = JSON.parse(event.data);
  if (res.id === 1) {
    console.log('Live buttons:', res.result?.result?.value);
    ws.close();
  }
};
