import fs from 'fs';

let c = fs.readFileSync('recovered-modules-combined/chunk_04_source-4-796019e71d254ebef877276fc670825__bundle.js', 'utf8');
console.log(c.slice(7937584, 7937584 + 800));
