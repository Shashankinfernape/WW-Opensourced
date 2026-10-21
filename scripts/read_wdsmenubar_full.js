const fs = require('fs');
const content = fs.readFileSync('recovered-modules-combined/chunk_04_source-4-796019e71d254ebef877276fc670825__bundle.js', 'utf8');
const idx = content.indexOf('__d("WDSMenuBarItem.react"');
console.log(content.slice(idx + 1800, idx + 4000));
