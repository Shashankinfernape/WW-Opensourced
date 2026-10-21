const fs = require('fs');

const f = 'recovered-modules-combined/chunk_12_eLgcBUdngJY__bundle.js';
const content = fs.readFileSync(f, 'utf8');

const idx = content.indexOf('function _e(');
console.log(content.slice(idx + 500, idx + 1800));
