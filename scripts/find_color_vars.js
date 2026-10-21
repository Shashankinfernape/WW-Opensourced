const fs = require('fs');
const css = fs.readFileSync('target_artifacts/whatsapp-web/css/production.css', 'utf8');

for (const name of ['--x390k3g', '--x5j60gr', '--xiotq71', '--x1eyk6h3']) {
  let pos = 0;
  while ((pos = css.indexOf(name + ':', pos)) !== -1) {
    console.log(css.slice(Math.max(0, pos - 50), Math.min(css.length, pos + 100)));
    pos += name.length;
  }
}
