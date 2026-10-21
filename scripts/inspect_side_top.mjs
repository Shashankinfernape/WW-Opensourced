import fs from 'fs';

const html = fs.readFileSync('analysis/live-side-dom.html', 'utf8');

// Find all sections/headers in #side before the chat list
const chatListIdx = html.indexOf('aria-label="Chat list"');
console.log('Chat list index:', chatListIdx);
if (chatListIdx !== -1) {
  console.log('--- TOP HEADER & SEARCH HTML (first 4000 chars) ---');
  console.log(html.slice(0, 4000));
}
