const fs = require('fs');

const html = fs.readFileSync('captures/live-dom-rendered.html', 'utf8');
const idx = html.indexOf('"88729"');
console.log('Offset in live-dom-rendered.html:', idx);
console.log(html.slice(idx - 50, idx + 200));
