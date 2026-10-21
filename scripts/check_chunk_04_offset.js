const fs = require('fs');

const f = 'recovered-modules-combined/chunk_04_source-4-796019e71d254ebef877276fc670825__bundle.js';
const content = fs.readFileSync(f, 'utf8');

const offset = 5490362; // where Meta AI was found
console.log('Offset 5490362 to 5492000 in chunk_04:');
console.log(content.slice(offset, offset + 2500));
