import fs from 'fs';

const content = fs.readFileSync('recovered-modules-combined/chunk_10_3nzqNpHbcmc__bundle.js', 'utf8');
const idx = content.indexOf('navbar-footer-section');
if (idx !== -1) {
  console.log('Footer section rendering context:');
  console.log(content.slice(idx - 1500, idx + 2000));
}
