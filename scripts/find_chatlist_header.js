const fs = require('fs');

const path = 'recovered-modules-combined/chunk_10_3nzqNpHbcmc__bundle.js';
const content = fs.readFileSync(path, 'utf8');

const target = 'chatlist-header';
let idx = 0;
while ((idx = content.indexOf(target, idx)) !== -1) {
  const lineNo = content.slice(0, idx).split('\n').length;
  console.log(`Found "${target}" at byte offset ${idx}, line ${lineNo}`);
  const start = Math.max(0, idx - 200);
  const end = Math.min(content.length, idx + 400);
  console.log('--- Context: ---');
  console.log(content.slice(start, end));
  console.log('----------------');
  idx += target.length;
}
