import fs from 'fs';

const liveHtml = fs.readFileSync('analysis/live_profile_drawer_full.html', 'utf8');

console.log('--- LIVE PROFILE DRAWER METRICS ---');
console.log('Length:', liveHtml.length);

// Extract elements
const matches = Array.from(liveHtml.matchAll(/<([a-z0-9]+)([^>]*)>/gi)).map(m => {
  const tag = m[1];
  const attrs = m[2];
  const testId = attrs.match(/data-testid="([^"]*)"/)?.[1];
  const ariaLabel = attrs.match(/aria-label="([^"]*)"/)?.[1];
  const cls = attrs.match(/class="([^"]*)"/)?.[1];
  return { tag, testId, ariaLabel, cls };
});

console.log('Total elements in live drawer:', matches.length);
console.log('Test IDs:', matches.map(m => m.testId).filter(Boolean));
console.log('Aria Labels:', matches.map(m => m.ariaLabel).filter(Boolean));
