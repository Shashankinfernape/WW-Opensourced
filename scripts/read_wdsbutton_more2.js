const fs = require('fs');
const content = fs.readFileSync('recovered-modules-combined/chunk_20_source-20-c0413ff55b8f39805b2d620ec891eb__bundle.js', 'utf8');
const idx = content.indexOf('__d("WDSButton.react"');
console.log(content.slice(idx + 4500, idx + 7500));
