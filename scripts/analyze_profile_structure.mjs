import fs from 'fs';

const html = fs.readFileSync('analysis/live-profile-drawer.html', 'utf8');

const testids = [...html.matchAll(/data-testid="([^"]+)"/g)].map(m => m[1]);
console.log('TestIDs in Profile drawer:\n', [...new Set(testids)]);

const ariaLabels = [...html.matchAll(/aria-label="([^"]+)"/g)].map(m => m[1]);
console.log('Aria labels in Profile drawer:\n', [...new Set(ariaLabels)]);

const titles = [...html.matchAll(/<title>([^<]+)<\/title>/g)].map(m => m[1]);
console.log('SVG Titles in Profile drawer:\n', [...new Set(titles)]);

console.log('\nPreview:\n', html.slice(0, 3000));
