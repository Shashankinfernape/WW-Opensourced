const fs = require('fs');
const html = fs.readFileSync('captures/live-dom-rendered.html', 'utf8');

const idIdx = html.indexOf('id="app"');
if (idIdx !== -1) {
  const tagStart = html.lastIndexOf('<div', idIdx);
  const content = html.slice(tagStart);
  fs.writeFileSync('captures/live-app-content.html', content);
  console.log('Written live-app-content.html, length:', content.length);
} else {
  console.log('id="app" not found');
}
