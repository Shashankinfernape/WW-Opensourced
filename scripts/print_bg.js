const fs = require('fs');
const content = fs.readFileSync('recovered-modules-combined/chunk_17_7Tf0qWLsuo3__bundle.js', 'utf8');
const startIdx = content.indexOf('__d("WAWebConversationBackground.react"');
console.log(content.slice(startIdx, startIdx + 3000));
