const fs = require('fs');
const content = fs.readFileSync('recovered-modules-combined/chunk_10_3nzqNpHbcmc__bundle.js', 'utf8');
let idx = 0;
while ((idx = content.indexOf('WAWebConversationBackground.react', idx)) !== -1) {
  console.log('Match at', idx);
  console.log(content.slice(Math.max(0, idx - 200), Math.min(content.length, idx + 400)));
  idx += 30;
}
