const fs = require('fs');
const content = fs.readFileSync('recovered-modules-combined/chunk_01_ZMZDw6zKHcP__bundle.js', 'utf8');
const pos = content.indexOf('__d("WAWebWallpaper"');
console.log(content.slice(pos + 19000, pos + 22500));
