const fs = require('fs');
const path = 'recovered-modules-combined/chunk_10_3nzqNpHbcmc__bundle.js';
const content = fs.readFileSync(path, 'utf8');

const idx = content.indexOf('__d("WAWebMetaBotNavBarItem.react"');
console.log(content.slice(idx + 3500, idx + 6000));
