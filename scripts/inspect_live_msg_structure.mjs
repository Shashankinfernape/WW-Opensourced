import fs from 'fs';

const html = fs.readFileSync('analysis/live-messages.html', 'utf8');
const testids = new Set();
const matches = html.matchAll(/data-testid="([^"]+)"/g);
for (const m of matches) {
  testids.add(m[1]);
}
console.log('Unique testids in conversation panel body:', Array.from(testids));
