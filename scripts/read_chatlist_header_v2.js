const fs = require('fs');
const path = 'recovered-modules-combined/chunk_10_3nzqNpHbcmc__bundle.js';
const content = fs.readFileSync(path, 'utf8');

const lines = content.split('\n');
console.log('WAWebChatlistHeaderV2 lines 13740 to 13785:');
console.log(lines.slice(13740, 13785).join('\n'));
