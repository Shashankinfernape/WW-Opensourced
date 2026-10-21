const fs = require('fs');
const content = fs.readFileSync('recovered-modules-combined/chunk_10_3nzqNpHbcmc__bundle.js', 'utf8');
const idx = content.indexOf('WAWebConversationPanelWrapper.stylex');
if (idx !== -1) {
  console.log(content.slice(Math.max(0, idx - 500), Math.min(content.length, idx + 1500)));
} else {
  console.log('Not found');
}
