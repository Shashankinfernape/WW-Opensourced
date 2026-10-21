const fs = require('fs');

const f = 'recovered-modules-combined/chunk_20_source-20-c0413ff55b8f39805b2d620ec891eb__bundle.js';
const content = fs.readFileSync(f, 'utf8');

const offset = 1151294;
const modStart = content.lastIndexOf('__d(', offset);
const lineNo = content.slice(0, modStart).split('\n').length;
console.log(`Module starts at line ${lineNo}, byte offset ${modStart}:`);
console.log(content.slice(modStart, modStart + 400));
console.log('Snippet around 1151294:');
console.log(content.slice(offset - 200, offset + 600));
