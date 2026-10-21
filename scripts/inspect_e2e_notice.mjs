import fs from 'fs';

const html = fs.readFileSync('analysis/live-messages.html', 'utf8');
const idx = html.indexOf('encrypted');
if (idx !== -1) {
  const start = html.lastIndexOf('<div', idx);
  console.log(html.slice(start, idx + 200).replace(/>[^<]+</g, '><'));
} else {
  console.log('No encrypted string found');
}
