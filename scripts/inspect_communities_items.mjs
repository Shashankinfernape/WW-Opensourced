import fs from 'fs';

const html = fs.readFileSync('analysis/live-communities-drawer.html', 'utf8');

// Print all list items
const items = [...html.matchAll(/role="listitem"[\s\S]*?<\/div><\/div><\/div>/g)].map(m => m[0].slice(0, 300));
console.log('Found listitems:', items.length);
items.forEach((it, i) => console.log(`Item ${i}:\n`, it, '\n---'));
