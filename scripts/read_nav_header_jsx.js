const fs = require('fs');
const path = 'recovered-modules-combined/chunk_10_3nzqNpHbcmc__bundle.js';
const content = fs.readFileSync(path, 'utf8');

const lines = content.split('\n');
console.log('WAWebNavigationBar lines 41660 to 41725:');
console.log(lines.slice(41660, 41725).join('\n'));
