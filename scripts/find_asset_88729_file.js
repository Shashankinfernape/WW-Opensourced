const fs = require('fs');

// Check all files in captures/ and target_artifacts/
const checkDirs = ['captures', 'target_artifacts/whatsapp-web'];

for (const d of checkDirs) {
  if (!fs.existsSync(d)) continue;
  const files = fs.readdirSync(d);
  for (const f of files) {
    if (f.includes('88729')) {
      console.log('Found file named with 88729:', d, f);
    }
  }
}

// Search live-page-capture or network requests in live-page-capture.json
const lpcPath = 'captures/live-page-capture.json';
if (fs.existsSync(lpcPath)) {
  const content = fs.readFileSync(lpcPath, 'utf8');
  let idx = 0;
  while ((idx = content.indexOf('88729', idx)) !== -1) {
    console.log('live-page-capture match at', idx, ':', content.slice(Math.max(0, idx - 100), Math.min(content.length, idx + 200)));
    idx += 5;
  }
}
