const fs = require('fs');
const css = fs.readFileSync('target_artifacts/whatsapp-web/css/production.css', 'utf8');

for (const hex of ['#0b141a', '#161717', '11, 20, 26', '12, 19, 23']) {
  let pos = 0;
  while ((pos = css.toLowerCase().indexOf(hex.toLowerCase(), pos)) !== -1) {
    console.log(`Found ${hex} at ${pos}:`);
    console.log(css.slice(Math.max(0, pos - 80), Math.min(css.length, pos + 120)));
    pos += hex.length;
  }
}
