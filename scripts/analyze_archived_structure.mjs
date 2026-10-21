import fs from 'fs';

const html = fs.readFileSync('analysis/live-archived-drawer.html', 'utf8');
console.log('Archived drawer length:', html.length);

const testids = [...html.matchAll(/data-testid="([^"]+)"/g)].map(m => m[1]);
console.log('TestIDs in Archived drawer:\n', [...new Set(testids)]);

const ariaLabels = [...html.matchAll(/aria-label="([^"]+)"/g)].map(m => m[1]);
console.log('Aria labels in Archived drawer:\n', [...new Set(ariaLabels)]);

const titles = [...html.matchAll(/<title>([^<]+)<\/title>/g)].map(m => m[1]);
console.log('SVG Titles in Archived drawer:\n', [...new Set(titles)]);

// Print full html
console.log(html);
