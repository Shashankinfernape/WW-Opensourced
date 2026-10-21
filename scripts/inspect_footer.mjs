import fs from 'fs';
const html = fs.readFileSync('analysis/live-rail-dom.html', 'utf8');
const idx = html.indexOf('aria-label="Media"');
console.log(html.slice(idx, idx + 3000));
