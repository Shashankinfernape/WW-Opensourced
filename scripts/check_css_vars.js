const fs = require('fs');
const css = fs.readFileSync('target_artifacts/whatsapp-web/css/production.css', 'utf8');

const vars = ['--navbar-width', '--xm343uc', '--xkyfeqk', '--x3s3u4o', '--WDS-surface-emphasized', '--WDS-lines-divider', '--WDS-content-deemphasized'];
for (const v of vars) {
  let idx = css.indexOf(v + ':');
  if (idx !== -1) {
    let end = css.indexOf(';', idx);
    console.log(v, ':', css.slice(idx, end + 1));
  } else {
    console.log(v, ': NOT DEFINED with colon');
  }
}
