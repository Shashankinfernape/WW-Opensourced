const fs = require('fs');
const css = fs.readFileSync('target_artifacts/whatsapp-web/css/production.css', 'utf8');

const darkBlockStart = css.indexOf('@media (prefers-color-scheme: dark){.xfmqtgv.xfmqtgv');
const darkBlockEnd = css.indexOf('}', css.indexOf('{', darkBlockStart + 40) + 1);

console.log('Dark block from', darkBlockStart, 'to', darkBlockEnd);
const darkCss = css.slice(darkBlockStart, darkBlockEnd);

const tokens = [
  '--WDS-surface-emphasized',
  '--WDS-lines-divider',
  '--WDS-components-active-list-row',
  '--WDS-content-deemphasized',
  '--WDS-content-default'
];

for (const t of tokens) {
  const rel = darkCss.indexOf(t + ':');
  if (rel !== -1) {
    const abs = darkBlockStart + rel;
    const decl = css.slice(abs, css.indexOf(';', abs) + 1);
    console.log(`${t} exact offset: ${abs} -> ${decl}`);
  } else {
    console.log(`${t} NOT found in dark block`);
  }
}
