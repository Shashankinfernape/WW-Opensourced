const fs = require('fs');
const path = require('path');
const dir = 'recovered-modules-combined';
for (const file of fs.readdirSync(dir)) {
  if (file.endsWith('.js')) {
    const c = fs.readFileSync(path.join(dir, file), 'utf8');
    if (c.includes('__d("bx"')) {
      console.log('Found __d("bx") in:', file);
      const pos = c.indexOf('__d("bx"');
      console.log(c.slice(pos, pos + 1000));
    }
  }
}
