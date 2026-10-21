const fs = require('fs');
const path = 'recovered-modules-combined/chunk_10_3nzqNpHbcmc__bundle.js';
const content = fs.readFileSync(path, 'utf8');

const idx = content.indexOf('__d("WAWebMetaBotNavBarItem.react"');
console.log('WAWebMetaBotNavBarItem byte offset:', idx);
const lineNo = content.slice(0, idx).split('\n').length;
console.log('lineNo:', lineNo);
console.log(content.slice(idx, idx + 3500));
