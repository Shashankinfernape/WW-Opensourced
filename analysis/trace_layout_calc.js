const fs = require('fs');
const chunk10 = fs.readFileSync('recovered-modules-combined/chunk_10_3nzqNpHbcmc__bundle.js', 'utf8');

const idx = chunk10.indexOf('useWAWebAdjustableChatListWidth');
if (idx !== -1) {
  console.log('=== useWAWebAdjustableChatListWidth ===');
  console.log(chunk10.substring(idx - 100, idx + 2500));
}
