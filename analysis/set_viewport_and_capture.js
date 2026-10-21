const http = require('http');
const WebSocket = require('ws');
const { execSync } = require('child_process');

async function run() {
  // 1. Get pages
  const res = await new Promise((resolve, reject) => {
    http.get('http://127.0.0.1:9222/json', (res) => {
      let data = '';
      res.on('data', c => data += c);
      res.on('end', () => resolve(JSON.parse(data)));
    }).on('error', reject);
  });

  const page = res.find(t => t.url.includes('5173') && t.type === 'page');
  if (!page) {
    console.error('Target not found!');
    process.exit(1);
  }

  console.log('Connecting to ws:', page.webSocketDebuggerUrl);
  const ws = new WebSocket(page.webSocketDebuggerUrl);

  await new Promise((resolve) => ws.on('open', resolve));

  // Set viewport to exact 1034x737
  await new Promise((resolve) => {
    ws.send(JSON.stringify({
      id: 1,
      method: 'Emulation.setDeviceMetricsOverride',
      params: {
        width: 1034,
        height: 737,
        deviceScaleFactor: 1,
        mobile: false
      }
    }), resolve);
  });

  console.log('Viewport set to 1034x737. Waiting 1s...');
  await new Promise(r => setTimeout(r, 1000));
  ws.close();

  // Run rea capture-web-screenshot
  console.log('Running rea capture-web-screenshot...');
  execSync(`rea capture-web-screenshot http://127.0.0.1:9222 ${page.id} --json > target_artifacts/whatsapp-web/recon-screenshot-evidence.json`, { stdio: 'inherit' });

  // Process artifact
  const processScript = require('./process_recon_artifact');
}

run().catch(console.error);
