const fs = require('fs');
const css = fs.readFileSync('target_artifacts/whatsapp-web/css/production.css', 'utf8');

const classNames = ['.x1h3rtpe', '.xhslqc4', '.x1fe8iih', '.xx42vgk'];
for (const c of classNames) {
  const idx = css.indexOf(c + '{');
  console.log(`${c} offset: ${idx} -> ${css.slice(idx, css.indexOf('}', idx) + 1)}`);
}
