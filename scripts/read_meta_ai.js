const fs = require('fs');
const content = fs.readFileSync('recovered-modules-combined/chunk_01_ZMZDw6zKHcP__bundle.js', 'utf8');
const idx = content.indexOf('__d("WAWebMetaAiRingAssetResolver"');
if (idx !== -1) {
  console.log("FOUND WAWebMetaAiRingAssetResolver in chunk_01:");
  console.log(content.slice(idx, idx + 1500));
}
