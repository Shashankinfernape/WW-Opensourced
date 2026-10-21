import fs from 'fs';

const html = fs.readFileSync('analysis/live-messages.html', 'utf8');
const idx = html.indexOf('data-testid="msg-container"');
const start = html.lastIndexOf('<div', idx);
const end = html.indexOf('data-testid="msg-meta"', idx);
console.log(html.slice(start, end).replace(/>[^<]+</g, '><'));
