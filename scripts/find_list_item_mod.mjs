import fs from 'fs';

const files = fs.readdirSync('recovered-modules-combined');
for (const f of files) {
  if (!f.endsWith('.js')) continue;
  const content = fs.readFileSync('recovered-modules-combined/' + f, 'utf8');
  let idx = 0;
  while ((idx = content.indexOf('list-item-', idx)) !== -1) {
    const dIdx = content.lastIndexOf('__d("', idx);
    const mod = content.slice(dIdx + 5, content.indexOf('"', dIdx + 5));
    console.log('list-item- in module:', mod, 'in file', f, 'at offset', dIdx);
    idx += 30;
  }
}
