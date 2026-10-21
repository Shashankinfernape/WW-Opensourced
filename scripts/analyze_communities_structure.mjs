import fs from 'fs';

const html = fs.readFileSync('analysis/live-communities-drawer.html', 'utf8');
console.log('Communities drawer length:', html.length);

const testids = [...html.matchAll(/data-testid="([^"]+)"/g)].map(m => m[1]);
console.log('TestIDs in Communities drawer:\n', [...new Set(testids)]);

const ariaLabels = [...html.matchAll(/aria-label="([^"]+)"/g)].map(m => m[1]);
console.log('Aria labels in Communities drawer:\n', [...new Set(ariaLabels)]);

const titles = [...html.matchAll(/<title>([^<]+)<\/title>/g)].map(m => m[1]);
console.log('SVG Titles in Communities drawer:\n', [...new Set(titles)]);

// Print first 4000 chars
console.log(html.slice(0, 4000));
