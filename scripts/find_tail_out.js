const fs = require('fs');
const code = fs.readFileSync('recovered-modules-combined/chunk_17_7Tf0qWLsuo3__bundle.js', 'utf8');

const idx = code.indexOf('function f(e) {');
console.log(code.slice(idx, idx + 2000));
