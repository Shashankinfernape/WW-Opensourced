import fs from 'fs';

const files = fs.readdirSync('recovered-modules-combined');
for (const f of files) {
  if (!f.endsWith('.js')) continue;
  const content = fs.readFileSync('recovered-modules-combined/' + f, 'utf8');
  const idx = content.indexOf('__d("WDSIconIcVideocam.react"');
  if (idx !== -1) {
    console.log('Found WDSIconIcVideocam in', f, 'at offset', idx);
    console.log(content.slice(idx, idx + 400));
  }
}
