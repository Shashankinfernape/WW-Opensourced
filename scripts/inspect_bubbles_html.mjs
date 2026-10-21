import fs from 'fs';

const html = fs.readFileSync('analysis/live-main-dom.html', 'utf8');

// Find all msg-container
const msgMatches = [...html.matchAll(/data-testid="msg-container"[^>]*>([\s\S]*?)<\/div>\s*<\/div>\s*<\/div>/g)];
console.log('Found msg-container count:', msgMatches.length);

for (let i = 0; i < Math.min(2, msgMatches.length); i++) {
  console.log(`--- MESSAGE BUBBLE ${i+1} HTML (first 1500 chars) ---`);
  console.log(msgMatches[i][0].slice(0, 1500));
}
