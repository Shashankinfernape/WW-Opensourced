import fs from 'fs';

const content = fs.readFileSync('recovered-modules-combined/chunk_10_3nzqNpHbcmc__bundle.js', 'utf8');
const idx = content.indexOf('__d("WAWebNavigationBar.react"');
if (idx !== -1) {
  const mod = content.slice(idx, idx + 4000);
  console.log(mod);
}
