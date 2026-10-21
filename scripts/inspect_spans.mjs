import fs from 'fs';

const html = fs.readFileSync('analysis/live-main-dom.html', 'utf8');

// Find all elements with role="row" or spans in the message stream
const matches = [...html.matchAll(/<span[^>]*class="[^"]*"[^>]*>([^<]{2,40})<\/span>/g)].map(m => m[1]);
console.log('Sample span texts in #main:', matches.slice(0, 30));
