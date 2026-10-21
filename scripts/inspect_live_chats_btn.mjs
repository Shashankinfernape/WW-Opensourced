import fs from 'fs';

const html = fs.readFileSync('analysis/live-rail-dom.html', 'utf8');

const chatsStart = html.indexOf('aria-label="Chats"');
if (chatsStart !== -1) {
  console.log('Chats button HTML in live DOM:');
  console.log(html.slice(chatsStart - 100, chatsStart + 1500));
}
