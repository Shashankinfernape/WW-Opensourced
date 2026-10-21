const fs = require('fs');
const path = require('path');
const dir = 'recovered-modules-combined';
for (const file of fs.readdirSync(dir)) {
  if (file.endsWith('.js')) {
    const c = fs.readFileSync(path.join(dir, file), 'utf8');
    if (c.includes('doodleOpacity') || c.includes('DoodleOpacity')) {
      console.log('Found in:', file);
      let pos = 0;
      while ((pos = c.indexOf('oodleOpacity', pos)) !== -1) {
        console.log(c.slice(Math.max(0, pos - 100), Math.min(c.length, pos + 200)));
        pos += 15;
      }
    }
  }
}
