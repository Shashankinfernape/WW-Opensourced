import fs from 'fs';

const content = fs.readFileSync('recovered-modules-combined/chunk_09_source-9-122c3e652dc14fd507309af34868b6f__bundle.js', 'utf8');
const idx = content.indexOf('__d("WAWebCellV2.react"');
if (idx !== -1) {
  console.log(content.slice(idx, idx + 2500));
}
