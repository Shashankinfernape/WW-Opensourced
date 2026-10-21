const fs = require('fs');
const content = fs.readFileSync('recovered-modules-combined/chunk_04_source-4-796019e71d254ebef877276fc670825__bundle.js', 'utf8');
const idx = content.indexOf('__d("WDSButton.react"');
if (idx !== -1) {
  console.log("DEFINED IN chunk_04 at", idx);
  console.log(content.slice(idx, idx + 3500));
}
