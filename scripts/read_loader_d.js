const fs = require('fs');

const f = 'recovered-modules-combined/chunk_12_eLgcBUdngJY__bundle.js';
const content = fs.readFileSync(f, 'utf8');

const idx = content.indexOf('__d = function(e, t, n, r)');
console.log('Loader code around __d in chunk_12:');
console.log(content.slice(Math.max(0, idx - 1200), idx + 200));
