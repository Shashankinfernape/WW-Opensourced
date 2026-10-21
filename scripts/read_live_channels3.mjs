import fs from 'fs';

const html = fs.readFileSync('analysis/live-channels-drawer.html', 'utf8');
console.log(html.slice(10000, 18000));
