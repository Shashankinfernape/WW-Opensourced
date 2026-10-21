import fs from 'fs';

const dir = 'recovered-modules-combined';
const files = fs.readdirSync(dir).filter(f => f.endsWith('.js'));
for (const file of files) {
  const content = fs.readFileSync(dir + '/' + file, 'utf8');
  const idx = content.indexOf('"ic-add-call-filled"');
  if (idx !== -1) {
    console.log(file, 'at offset', idx);
  }
}
