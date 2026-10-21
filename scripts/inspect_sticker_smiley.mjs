import fs from 'fs';

const content = fs.readFileSync('recovered-modules-combined/chunk_05_Sp7m9vtWcB2__bundle.js', 'utf8');
const idx = 893840;
console.log(content.slice(idx, idx + 1000));
