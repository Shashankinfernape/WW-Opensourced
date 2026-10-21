const fs = require('fs');
const code = fs.readFileSync('recovered-modules-combined/chunk_10_3nzqNpHbcmc__bundle.js', 'utf8');

const idx = code.indexOf('msg-dblcheck');
console.log(code.slice(idx - 1500, idx));
