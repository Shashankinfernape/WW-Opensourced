import fs from 'fs';

let c = fs.readFileSync('recovered-modules-combined/chunk_20_source-20-c0413ff55b8f39805b2d620ec891eb__bundle.js', 'utf8');
console.log(c.slice(1336633, 1336633 + 1000));
