import fs from 'fs';

const html = fs.readFileSync('analysis/live-side-dom.html', 'utf8');
const idx = html.indexOf('data-testid="chat-list"');
console.log('--- chat-list container ---');
console.log(html.slice(Math.max(0, idx - 200), idx + 1200));
