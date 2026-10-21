import fs from 'fs';

const html = fs.readFileSync('analysis/live-messages.html', 'utf8');
const idx = html.indexOf('data-testid="addon-bubble-container"');
if (idx !== -1) {
  const start = html.lastIndexOf('<div', idx);
  console.log(html.slice(start, idx + 400).replace(/>[^<]+</g, '><'));
} else {
  console.log('No addon-bubble-container found');
}
