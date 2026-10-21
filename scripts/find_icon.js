const fs = require('fs');
const path = require('path');
const dir = 'recovered-modules-combined';
const files = fs.readdirSync(dir);

files.forEach(f => {
  const content = fs.readFileSync(path.join(dir, f), 'utf8');
  if (content.includes('WDSIconWdsIcRead') || content.includes('WdsIcRead')) {
    console.log('Found in', f);
    const idx = content.indexOf('WdsIcRead');
    console.log(content.slice(idx - 100, idx + 800));
  }
});
