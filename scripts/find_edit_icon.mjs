import fs from 'fs';

const dir = 'recovered-modules-combined';
const files = fs.readdirSync(dir).filter(f => f.endsWith('.js'));
for (const file of files) {
  const content = fs.readFileSync(dir + '/' + file, 'utf8');
  const idx = content.indexOf('"ic-edit"');
  if (idx !== -1) {
    console.log(file, 'at offset', idx);
    console.log(content.slice(idx - 60, idx + 200));
  }
}
