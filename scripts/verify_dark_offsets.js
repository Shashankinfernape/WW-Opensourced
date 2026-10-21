const fs = require('fs');
const css = fs.readFileSync('target_artifacts/whatsapp-web/css/production.css', 'utf8');

const offsets = [
  { name: '--WDS-surface-emphasized', offset: 835436 },
  { name: '--WDS-lines-divider', offset: 833874 },
  { name: '--WDS-components-active-list-row', offset: 830080 },
  { name: '--WDS-content-deemphasized', offset: 832791 },
  { name: '--WDS-content-default', offset: 832669 }
];

for (const o of offsets) {
  const slice = css.slice(o.offset, o.offset + o.name.length + 35);
  console.log(`${o.name} at offset ${o.offset}:`);
  console.log(slice.split(';')[0] + ';');
}
