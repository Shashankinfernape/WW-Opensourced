const fs = require('fs');
const content = fs.readFileSync('recovered-modules-combined/chunk_03_4o5cOr-cRnP__bundle.js', 'utf8');
const idx = content.indexOf('const g = {');
console.log(content.slice(idx, idx + 1000));
