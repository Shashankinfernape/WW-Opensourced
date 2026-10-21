import { execSync } from 'child_process';
import fs from 'fs';

// 1. Find live WhatsApp page
const res = await fetch('http://127.0.0.1:9223/json');
const targets = await res.json();
const wa = targets.find(t => t.url.includes('web.whatsapp.com') && t.type === 'page');
if (!wa) {
  console.error('No WhatsApp page found on port 9223!');
  process.exit(1);
}

// 2. Bring tab to front so Chrome compositor paints
const ws = new WebSocket(wa.webSocketDebuggerUrl);
await new Promise(r => ws.onopen = r);
ws.send(JSON.stringify({ id: 1, method: 'Page.bringToFront' }));
await new Promise(r => setTimeout(r, 600));
ws.close();

// 3. Capture screenshot via REA
console.log('Capturing live screenshot for target:', wa.id);
const raw = execSync(`rea capture-web-screenshot http://127.0.0.1:9223 ${wa.id} --format json`, { maxBuffer: 50 * 1024 * 1024 });
let text = raw.toString('utf8').replace(/^\uFEFF/, '');
fs.writeFileSync('target_artifacts/whatsapp-web/live-screenshot-evidence.json', text, 'utf8');

const data = JSON.parse(text);
const artifact = data.normalized_result.artifact;
fs.writeFileSync('target_artifacts/whatsapp-web/live-screenshot-artifact.json', JSON.stringify(artifact, null, 2), 'utf8');
fs.writeFileSync('target_artifacts/whatsapp-web/live-screenshot.png', Buffer.from(artifact.data_base64, 'base64'));

console.log('Live artifact saved successfully!');
console.log('SHA-256:', artifact.sha256);
console.log('Viewport:', data.normalized_result.viewport);
