const fs = require('fs');

const css = fs.readFileSync('target_artifacts/whatsapp-web/css/production.css', 'utf8');

for (const offset of [211253, 241744, 1427629]) {
  console.log(`--- Offset ${offset} ---`);
  console.log(css.slice(offset, offset + 400));
}
