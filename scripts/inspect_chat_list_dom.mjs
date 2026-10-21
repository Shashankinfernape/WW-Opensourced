import fs from 'fs';

const html = fs.readFileSync('analysis/live-side-dom.html', 'utf8');

const listIdx = html.indexOf('aria-label="Chat list"');
if (listIdx !== -1) {
  console.log('Chat list container HTML snippet (4000 chars):');
  console.log(html.slice(listIdx - 100, listIdx + 4000));
}
