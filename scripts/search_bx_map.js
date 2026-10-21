const fs = require('fs');
const content = fs.readFileSync('target_artifacts/whatsapp-web/page-capture.json', 'utf8');

const regex = /"89515"\s*:\s*\{[^}]+\}/g;
const match = regex.exec(content);
if (match) {
  console.log('Direct match:', match[0]);
} else {
  console.log('No direct key "89515":{} found');
}

// search for bx(" or bx.add
const idx = content.indexOf('bx.add(');
if (idx !== -1) {
  console.log('Found bx.add at', idx);
  console.log(content.slice(idx, idx + 500));
} else {
  console.log('No bx.add(');
}
