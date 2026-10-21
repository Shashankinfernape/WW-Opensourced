const fs = require('fs');

const html = fs.readFileSync('captures/live-dom-rendered.html', 'utf8');
const htmlTagEnd = html.indexOf('>', html.indexOf('<html'));
console.log(html.slice(0, htmlTagEnd + 1));
