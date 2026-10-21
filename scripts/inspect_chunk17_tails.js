const fs = require('fs');
const code = fs.readFileSync('recovered-modules-combined/chunk_17_7Tf0qWLsuo3__bundle.js', 'utf8');

const idx = code.indexOf('const m = "tail-in";');
console.log(code.slice(idx + 1500, idx + 4000));
