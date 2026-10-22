import fs from 'fs';

const html = fs.readFileSync('analysis/live_profile_drawer_full.html', 'utf8');

// Find all buttons, titles, inputs, SVG titles
const titles = Array.from(html.matchAll(/<title>(.*?)<\/title>/g)).map(m => m[1]);
console.log('SVGs found:', [...new Set(titles)]);

// Find all text blocks
const textMatches = Array.from(html.matchAll(/>([^<]{2,})</g))
  .map(m => m[1].trim())
  .filter(t => t.length > 0 && !t.startsWith('var('));
console.log('Text blocks:', [...new Set(textMatches)]);

// Find root classes
const rootMatch = html.match(/<div[^>]*data-testid="profile-drawer"[^>]*class="([^"]*)"/);
console.log('Root classes:', rootMatch ? rootMatch[1] : 'not found');
