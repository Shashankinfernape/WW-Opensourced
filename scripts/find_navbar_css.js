const fs = require('fs');
const css = fs.readFileSync('target_artifacts/whatsapp-web/css/production.css', 'utf8');

let idx = 0;
while ((idx = css.indexOf('navbar-item', idx)) !== -1) {
  let start = Math.max(0, idx - 40);
  let end = Math.min(css.length, idx + 100);
  console.log('Match at', idx, ':', css.slice(start, end));
  idx += 11;
}
