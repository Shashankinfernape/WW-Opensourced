import fs from 'fs';

const path = 'recovered-modules-combined';
const files = fs.readdirSync(path);
for (const file of files) {
  const content = fs.readFileSync(path + '/' + file, 'utf8');
  let idx = content.indexOf('"ic-add"');
  if (idx !== -1) {
    console.log('Found ic-add in', file, 'at offset', idx);
    const start = content.lastIndexOf('__d(', idx);
    console.log(content.slice(start, idx + 100));
  }
}
