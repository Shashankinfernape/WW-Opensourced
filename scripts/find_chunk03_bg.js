const fs = require('fs');
const content = fs.readFileSync('recovered-modules-combined/chunk_03_4o5cOr-cRnP__bundle.js', 'utf8');
const idx = content.indexOf('WAWebConversationBackground.react');
console.log(content.slice(Math.max(0, idx - 1000), Math.min(content.length, idx + 1000)));
