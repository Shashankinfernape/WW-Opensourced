const fs = require('fs');

const chunk10 = fs.readFileSync('recovered-modules-combined/chunk_10_3nzqNpHbcmc__bundle.js', 'utf8');

// Find layout constants
const keywords = [
  'NAVBAR_WIDTH',
  'MIN_CHATLIST_WIDTH',
  'HYBRID_CHATLIST_MAX_WIDTH_PX',
  'MIN_CONVERSATION_WIDTH',
  'MIN_RIGHT_DRAWER_WIDTH',
  'WIDE_BREAKPOINT_PX',
  'MID_BREAKPOINT_PX',
  'WAWebAdaptiveLayoutConfig',
  'WAWebConversationPanelWrapper',
  'WAWebConversationPreview'
];

for (const kw of keywords) {
  let idx = 0;
  let count = 0;
  while ((idx = chunk10.indexOf(kw, idx)) !== -1 && count < 2) {
    console.log(`=== ${kw} at ${idx} ===`);
    console.log(chunk10.substring(Math.max(0, idx - 100), Math.min(chunk10.length, idx + 300)));
    idx += kw.length;
    count++;
  }
}
