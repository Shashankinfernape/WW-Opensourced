import fs from 'fs';

const html = fs.readFileSync('analysis/live-channels-drawer.html', 'utf8');
console.log(html.slice(4000, 10000));
