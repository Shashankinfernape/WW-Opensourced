import fs from 'fs';

const files = fs.readdirSync('recovered-modules-combined');
for (const f of files) {
  if (!f.endsWith('.js')) continue;
  const content = fs.readFileSync('recovered-modules-combined/' + f, 'utf8');
  if (content.includes('WDSIconIcFilter.react')) {
    console.log('Found WDSIconIcFilter in', f);
    // Find all occurrences
    let idx = 0;
    while ((idx = content.indexOf('WDSIconIcFilter.react', idx)) !== -1) {
      // Find preceding __d
      const dIdx = content.lastIndexOf('__d("', idx);
      if (dIdx !== -1) {
        const modName = content.slice(dIdx + 5, content.indexOf('"', dIdx + 5));
        console.log('  At byte', idx, 'under module:', modName);
        // Print snippet of that module
        const end = content.indexOf('}, ', idx);
        console.log('  Module snippet:\n', content.slice(dIdx, Math.min(dIdx + 1500, end + 10)));
      }
      idx += 20;
    }
  }
}
