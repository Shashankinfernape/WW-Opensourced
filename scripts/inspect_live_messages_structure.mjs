import fs from 'fs';

const html = fs.readFileSync('analysis/live-messages.html', 'utf8');

// Sanitize any text content between tags to preserve privacy
const sanitized = html.replace(/>([^<]+)</g, (match, p1) => {
  const trimmed = p1.trim();
  if (!trimmed) return match;
  return `>[TEXT_LEN_${trimmed.length}]<`;
});

// Extract tags, data-testids, classes
const testids = [...html.matchAll(/data-testid="([^"]+)"/g)].map(m => m[1]);
console.log('Unique data-testids:', [...new Set(testids)]);

// Print first 2000 chars of sanitized HTML
console.log('Sanitized HTML snippet:');
console.log(sanitized.slice(0, 2500));
