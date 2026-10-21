import fs from 'fs';

const content = fs.readFileSync('recovered-modules-combined/chunk_10_3nzqNpHbcmc__bundle.js', 'utf8');
const idx = content.indexOf('navbar-footer-section');
if (idx !== -1) {
  console.log(content.slice(idx - 6000, idx - 3000));
}
