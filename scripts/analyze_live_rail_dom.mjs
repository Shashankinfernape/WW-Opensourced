import fs from 'fs';

const html = fs.readFileSync('analysis/live-rail-dom.html', 'utf8');

const btnMatches = [...html.matchAll(/<button[^>]*aria-label="([^"]+)"[^>]*>/g)].map(m => m[1]);
console.log('Buttons:', btnMatches);

const testIds = [...html.matchAll(/data-testid="([^"]+)"/g)].map(m => m[1]);
console.log('TestIds:', [...new Set(testIds)]);

const icons = [...html.matchAll(/data-icon="([^"]+)"/g)].map(m => m[1]);
console.log('Data icons:', icons);

// Check selected button
const selected = [...html.matchAll(/<button[^>]*aria-selected="true"[^>]*aria-label="([^"]+)"/g)].map(m => m[1]);
console.log('Selected buttons:', selected);

// Check badges
const badges = [...html.matchAll(/<span[^>]*aria-label="(\d+ unread[^"]*)"[^>]*>/g)].map(m => m[1]);
console.log('Badges:', badges);
