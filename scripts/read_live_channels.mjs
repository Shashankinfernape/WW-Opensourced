import fs from 'fs';

const html = fs.readFileSync('analysis/live-channels-drawer.html', 'utf8');

// Print first 4000 characters
console.log(html.slice(0, 4000));
