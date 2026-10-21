const fs = require('fs');

const raw = fs.readFileSync('target_artifacts/whatsapp-web/recon-screenshot-evidence.json');
let text;
if (raw[0] === 0xff && raw[1] === 0xfe) {
  text = raw.toString('utf16le');
} else if (raw[0] === 0xef && raw[1] === 0xbb && raw[2] === 0xbf) {
  text = raw.slice(3).toString('utf8');
} else {
  text = raw.toString('utf8');
}

// Remove any leading non-JSON characters
const jsonStart = text.indexOf('{');
if (jsonStart !== -1) {
  text = text.substring(jsonStart);
}

const ev = JSON.parse(text);
// Write clean UTF-8
fs.writeFileSync('target_artifacts/whatsapp-web/recon-screenshot-evidence.json', JSON.stringify(ev, null, 2), 'utf8');

const artifact = ev.normalized_result.artifact;
fs.writeFileSync('target_artifacts/whatsapp-web/recon-screenshot-artifact.json', JSON.stringify(artifact, null, 2), 'utf8');

console.log('Artifact SHA:', artifact.sha256);
console.log('Bytes:', artifact.bytes);
console.log('Viewport:', ev.normalized_result.viewport);

// Save extracted PNG to disk for inspection
if (artifact.data_base64) {
  const buf = Buffer.from(artifact.data_base64, 'base64');
  fs.writeFileSync('target_artifacts/whatsapp-web/recon-screenshot.png', buf);
  console.log('Saved recon-screenshot.png, size:', buf.length);
}
