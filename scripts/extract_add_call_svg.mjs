import fs from 'fs';

const html = fs.readFileSync('analysis/live-calls-drawer.html', 'utf8');

const match = html.match(/<svg[\s\S]*?<title>ic-add-call-filled<\/title>[\s\S]*?<\/svg>/);
if (match) console.log('SVG for ic-add-call-filled:\n', match[0]);
