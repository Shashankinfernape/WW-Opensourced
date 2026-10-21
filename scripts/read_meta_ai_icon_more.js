const fs = require('fs');
const path = 'recovered-modules-combined/chunk_26_source-26-d9b5cb7fdfe11a88b2d9ce3c290436__bundle.js';
const content = fs.readFileSync(path, 'utf8');

const idx = content.indexOf('__d("WAWebMetaAIIcon.react"');
console.log(content.slice(idx + 1800, idx + 3500));
