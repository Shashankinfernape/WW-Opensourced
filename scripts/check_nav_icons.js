const fs = require('fs');
const icons = JSON.parse(fs.readFileSync('analysis/svg-icons.json', 'utf8'));
for (const [k, v] of Object.entries(icons)) {
  if (k.startsWith('nav-')) {
    console.log(k, ':', v.module, 'viewBox:', v.viewBox);
  }
}
