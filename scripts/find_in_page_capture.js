const fs = require('fs');
const content = fs.readFileSync('target_artifacts/whatsapp-web/page-capture.json', 'utf8');
let pos = 0;
while ((pos = content.indexOf('89515', pos)) !== -1) {
  console.log('Found 89515 in page-capture.json at', pos);
  console.log(content.slice(Math.max(0, pos - 150), Math.min(content.length, pos + 250)));
  pos += 5;
}
