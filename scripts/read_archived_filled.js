const fs = require('fs');

const f = 'recovered-modules-combined/chunk_10_3nzqNpHbcmc__bundle.js';
const content = fs.readFileSync(f, 'utf8');

const offset = 1559827;
console.log(content.slice(offset, offset + 1200));
