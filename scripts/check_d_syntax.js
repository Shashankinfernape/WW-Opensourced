const fs = require('fs');

const f = 'recovered-modules-combined/chunk_09_source-9-122c3e652dc14fd507309af34868b6f__bundle.js';
const content = fs.readFileSync(f, 'utf8');

// Find first 10 __d definitions and their closing lines
const regex = /__d\(\s*["']([^"']+)["']/g;
let match;
let count = 0;
while ((match = regex.exec(content)) !== null && count < 10) {
  const modName = match[1];
  const startIdx = match.index;
  const nextDecl = content.indexOf('\n__d(', startIdx + 1);
  const chunk = content.slice(startIdx, nextDecl !== -1 ? nextDecl : startIdx + 2000);
  
  // Look at the last 100 characters of the chunk
  const tail = chunk.slice(-80).trim();
  console.log(`Module: "${modName}" at offset ${startIdx}`);
  console.log(`Tail: ${tail}\n`);
  count++;
}
