import fs from 'fs';

const html = fs.readFileSync('analysis/live-channels-drawer.html', 'utf8');
console.log('Channels drawer length:', html.length);

const headerMatch = html.match(/<header[\s\S]*?<\/header>/);
if (headerMatch) console.log('HEADER:\n', headerMatch[0].slice(0, 500), '...\n');

const testids = [...html.matchAll(/data-testid="([^"]+)"/g)].map(m => m[1]);
console.log('TestIDs in Channels drawer:\n', [...new Set(testids)]);

const ariaLabels = [...html.matchAll(/aria-label="([^"]+)"/g)].map(m => m[1]);
console.log('Aria labels in Channels drawer:\n', [...new Set(ariaLabels)]);

const titles = [...html.matchAll(/<title>([^<]+)<\/title>/g)].map(m => m[1]);
console.log('SVG Titles in Channels drawer:\n', [...new Set(titles)]);
