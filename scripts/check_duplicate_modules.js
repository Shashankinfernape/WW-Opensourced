const fs = require('fs');

const files = fs.readdirSync('recovered-modules-combined').filter(f => f.endsWith('.js'));
const target = 'WDSIconWdsIcChat.react';

console.log(`Searching for "${target}" across all chunks:`);
for (const f of files) {
  const content = fs.readFileSync('recovered-modules-combined/' + f, 'utf8');
  let idx = 0;
  while ((idx = content.indexOf(`__d("${target}"`, idx)) !== -1) {
    const nextMod = content.indexOf('\n__d(', idx + 1);
    const modChunk = content.slice(idx, nextMod !== -1 ? nextMod : idx + 2000);
    const lineNo = content.slice(0, idx).split('\n').length;
    console.log(`Found in ${f} at byte offset ${idx}, line ${lineNo}`);
    console.log(`Snippet: ${modChunk.slice(0, 150)}...\n`);
    idx += target.length;
  }
}
