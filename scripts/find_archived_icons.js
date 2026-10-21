const fs = require('fs');

const files = fs.readdirSync('recovered-modules-combined').filter(f => f.endsWith('.js'));
for (const icon of ['WDSIconIcArchive.react', 'WDSIconIcArchiveFilled.react']) {
  for (const f of files) {
    const content = fs.readFileSync('recovered-modules-combined/' + f, 'utf8');
    const decl = `__d("${icon}"`;
    const idx = content.indexOf(decl);
    if (idx !== -1) {
      const lineNo = content.slice(0, idx).split('\n').length;
      console.log(`Found ${icon} in ${f} at byte offset ${idx}, line ${lineNo}`);
    }
  }
}
