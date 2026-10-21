import fs from 'fs';

const dir = 'recovered-modules-combined';
const files = fs.readdirSync(dir).filter(f => f.endsWith('.js'));
for (const file of files) {
  const content = fs.readFileSync(dir + '/' + file, 'utf8');
  const idx = content.indexOf('M16 8h-2');
  if (idx !== -1) {
    console.log(file, 'at offset', idx);
    console.log(content.slice(idx - 100, idx + 100));
  }
}
