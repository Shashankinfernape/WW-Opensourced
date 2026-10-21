const fs = require('fs');

for (const p of ['target_artifacts/whatsapp-web/page-capture.json', 'captures/live-page-capture.json']) {
  if (!fs.existsSync(p)) continue;
  const content = fs.readFileSync(p, 'utf8');
  let idx = content.indexOf('88729');
  if (idx !== -1) {
    console.log(`Found 88729 in ${p} at ${idx}:`);
    console.log(content.slice(Math.max(0, idx - 100), Math.min(content.length, idx + 300)));
  } else {
    console.log(`Not found in ${p}`);
  }
}
