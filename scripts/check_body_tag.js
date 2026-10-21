const fs = require('fs');

const html = fs.readFileSync('captures/live-dom-rendered.html', 'utf8');
const bodyStart = html.indexOf('<body');
const bodyEnd = html.indexOf('>', bodyStart);
console.log(html.slice(bodyStart, bodyEnd + 1));
