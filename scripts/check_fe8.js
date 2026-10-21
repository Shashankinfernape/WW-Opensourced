const fs = require('fs');
const css = fs.readFileSync('target_artifacts/whatsapp-web/css/production.css', 'utf8');
let idx = css.indexOf('.x1fe8iih');
if (idx !== -1) {
  let end = css.indexOf('}', idx);
  console.log(css.slice(idx, end + 1));
} else {
  console.log('x1fe8iih not found');
}
