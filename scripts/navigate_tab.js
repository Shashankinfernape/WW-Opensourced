const ws = new WebSocket('ws://127.0.0.1:9222/devtools/page/20DC4AC9DE32A9310058CBB3545419EA');

ws.onopen = () => {
  ws.send(JSON.stringify({
    id: 1,
    method: 'Page.navigate',
    params: { url: 'http://127.0.0.1:5173/' }
  }));
};

ws.onmessage = (e) => {
  console.log('Navigated:', e.data);
  setTimeout(() => {
    ws.send(JSON.stringify({
      id: 2,
      method: 'Runtime.evaluate',
      params: {
        expression: 'JSON.stringify({ url: window.location.href, title: document.title, hasApp: !!document.getElementById("app"), hasCanvas: !!document.querySelector("canvas") })'
      }
    }));
  }, 1000);
  ws.onmessage = (e2) => {
    console.log('Evaluated:', JSON.parse(e2.data).result?.result?.value);
    ws.close();
  };
};
