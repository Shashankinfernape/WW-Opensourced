import fs from 'fs';

const files = fs.readdirSync('recovered-modules-combined');
for (const file of files) {
  const content = fs.readFileSync('recovered-modules-combined/' + file, 'utf8');
  const modHeader = '__d("WDSIconIcPlayArrowFilled.react"';
  const idx = content.indexOf(modHeader);
  if (idx !== -1) {
    console.log(`Found in ${file} at offset ${idx}`);
    console.log(content.slice(idx, idx + 800));
  }
}
