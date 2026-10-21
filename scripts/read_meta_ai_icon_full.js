const fs = require('fs');
const path = 'recovered-modules-combined/chunk_26_source-26-d9b5cb7fdfe11a88b2d9ce3c290436__bundle.js';
const content = fs.readFileSync(path, 'utf8');

const idx = content.indexOf('__d("WAWebMetaAIIcon.react"');
console.log('WAWebMetaAIIcon byte offset:', idx);
const lineNo = content.slice(0, idx).split('\n').length;
console.log('lineNo:', lineNo);
console.log(content.slice(idx, idx + 2500));
