import fs from 'fs';

const dir = 'recovered-modules-combined';
const files = fs.readdirSync(dir).filter(f => f.endsWith('.js'));
for (const file of files) {
  const content = fs.readFileSync(dir + '/' + file, 'utf8');
  const idx = content.indexOf('M19.95 21c-2.08');
  if (idx !== -1) {
    console.log(file, 'at offset', idx);
    console.log(content.slice(idx - 100, idx + 100));
  }
}
