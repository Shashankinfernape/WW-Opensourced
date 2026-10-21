import fs from 'fs';

const content = fs.readFileSync('recovered-modules-combined/chunk_26_source-26-d9b5cb7fdfe11a88b2d9ce3c290436__bundle.js', 'utf8');
const idx = content.indexOf('__d("WAWebChatlistWrappedItem.react"');
if (idx !== -1) {
  console.log(content.slice(idx, idx + 3000));
}
