const fs = require('fs');
const path = require('path');
const dir = 'exported-scripts';
for (const file of fs.readdirSync(dir)) {
  if (file.endsWith('.js')) {
    const c = fs.readFileSync(path.join(dir, file), 'utf8');
    if (c.includes('89515')) {
      console.log('Found 89515 in exported-scripts:', file);
      let pos = c.indexOf('89515');
      console.log(c.slice(Math.max(0, pos - 100), Math.min(c.length, pos + 250)));
    }
  }
}
