const ws = new WebSocket('ws://127.0.0.1:9222/devtools/page/20DC4AC9DE32A9310058CBB3545419EA');

ws.onopen = () => {
  ws.send(JSON.stringify({
    id: 1,
    method: 'Runtime.evaluate',
    params: {
      expression: 'JSON.stringify({ title: document.title, hasApp: !!document.getElementById("app"), hasCanvas: !!document.querySelector("canvas"), bodyClass: document.body.className })'
    }
  }));
};

ws.onmessage = (e) => {
  const data = JSON.parse(e.data);
  console.log('Tab check:', data.result?.result?.value);
  ws.close();
};

ws.onerror = (err) => console.error(err);
