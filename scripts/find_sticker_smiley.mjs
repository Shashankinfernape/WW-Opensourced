import fs from 'fs';

const files = fs.readdirSync('recovered-modules-combined');
for (const f of files) {
  if (!f.endsWith('.js')) continue;
  const content = fs.readFileSync('recovered-modules-combined/' + f, 'utf8');
  const idx = content.indexOf('wds-ic-sticker-smiley');
  if (idx !== -1) {
    const dIdx = content.lastIndexOf('__d("', idx);
    console.log('Found wds-ic-sticker-smiley in', f, 'at offset', dIdx);
    console.log(content.slice(dIdx, dIdx + 500));
  }
}
