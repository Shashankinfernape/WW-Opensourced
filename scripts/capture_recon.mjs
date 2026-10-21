import { execSync } from 'child_process';
import fs from 'fs';

let res = await fetch('http://127.0.0.1:9223/json');
let targets = await res.json();
let recon = targets.find(t => t.url.includes('5173') && t.type === 'page');

if (!recon) {
  console.log('Opening new tab for http://127.0.0.1:5173/ ...');
  const newTabRes = await fetch('http://127.0.0.1:9223/json/new?http://127.0.0.1:5173/', { method: 'PUT' });
  recon = await newTabRes.json();
  await new Promise(r => setTimeout(r, 1500));
}

// Ensure Page is brought to front and size is 1034x737
const ws = new WebSocket(recon.webSocketDebuggerUrl);
await new Promise(r => ws.onopen = r);
ws.send(JSON.stringify({ id: 1, method: 'Page.bringToFront' }));
ws.send(JSON.stringify({ id: 2, method: 'Page.reload' }));
await new Promise(r => setTimeout(r, 1000));
ws.close();

console.log('Capturing recon tab:', recon.id);
const raw = execSync(`rea capture-web-screenshot http://127.0.0.1:9223 ${recon.id} --format json`, { maxBuffer: 50 * 1024 * 1024 });
let text = raw.toString('utf8').replace(/^\uFEFF/, '');
fs.writeFileSync('target_artifacts/whatsapp-web/recon-screenshot-evidence.json', text, 'utf8');

const data = JSON.parse(text);
const artifact = data.normalized_result.artifact;
fs.writeFileSync('target_artifacts/whatsapp-web/recon-screenshot-artifact.json', JSON.stringify(artifact, null, 2), 'utf8');
fs.writeFileSync('target_artifacts/whatsapp-web/recon-screenshot.png', Buffer.from(artifact.data_base64, 'base64'));

console.log('Recon artifact saved successfully!');
console.log('SHA-256:', artifact.sha256);
console.log('Viewport:', data.normalized_result.viewport);
