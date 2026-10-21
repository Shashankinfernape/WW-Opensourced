import fs from 'fs';

const path = 'recovered-modules-combined';
const files = fs.readdirSync(path);
for (const icon of ['wds-ic-read', 'wds-ic-sticker']) {
  for (const file of files) {
    const content = fs.readFileSync(path + '/' + file, 'utf8');
    let idx = content.indexOf(`"${icon}"`);
    if (idx !== -1) {
      console.log('Found', icon, 'in', file, 'at offset', idx);
      const start = content.lastIndexOf('__d(', idx);
      console.log(content.slice(start, idx + 80));
    }
  }
}
