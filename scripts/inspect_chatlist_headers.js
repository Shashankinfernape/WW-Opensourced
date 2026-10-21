const fs = require('fs');

const path = 'recovered-modules-combined/chunk_10_3nzqNpHbcmc__bundle.js';
const content = fs.readFileSync(path, 'utf8');

function findModuleHeader(offset) {
  const modStart = content.lastIndexOf('__d(', offset);
  const lineNo = content.slice(0, modStart).split('\n').length;
  console.log(`Module for offset ${offset} starts at byte ${modStart}, line ${lineNo}:`);
  console.log(content.slice(modStart, modStart + 300));
}

console.log('=== FIRST OCCURRENCE (line 13763) ===');
findModuleHeader(516605);

console.log('=== SECOND OCCURRENCE (line 41709) ===');
findModuleHeader(1591200);
