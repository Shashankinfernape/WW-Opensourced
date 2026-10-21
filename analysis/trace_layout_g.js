const fs = require('fs');
const chunk10 = fs.readFileSync('recovered-modules-combined/chunk_10_3nzqNpHbcmc__bundle.js', 'utf8');

const idx = chunk10.indexOf('function g(e, t)');
if (idx !== -1) {
  console.log('=== function g in useWAWebAdjustableChatListWidth ===');
  console.log(chunk10.substring(idx, idx + 2500));
}
