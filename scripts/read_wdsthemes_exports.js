const fs = require('fs');

const f = 'recovered-modules-combined/chunk_20_source-20-c0413ff55b8f39805b2d620ec891eb__bundle.js';
const content = fs.readFileSync(f, 'utf8');

const offset = 1151294;
console.log(content.slice(offset, offset + 1500));
