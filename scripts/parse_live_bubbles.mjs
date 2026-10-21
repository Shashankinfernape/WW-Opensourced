import fs from 'fs';

const html = fs.readFileSync('analysis/live-conversation-view.html', 'utf8');

const cIdx = html.indexOf('data-testid="conv-msg-');
if (cIdx !== -1) {
  console.log('=== CONV MSG ===');
  console.log(html.slice(cIdx, cIdx + 3000));
}
