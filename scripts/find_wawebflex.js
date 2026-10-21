const fs = require('fs');
const glob = require('fs').readdirSync('recovered-modules-combined');
for (const file of glob) {
  if (!file.endsWith('.js')) continue;
  const content = fs.readFileSync('recovered-modules-combined/' + file, 'utf8');
  const idx = content.indexOf('WAWebFlex.react');
  if (idx !== -1) {
    let start = Math.max(0, idx - 100);
    let end = Math.min(content.length, idx + 200);
    console.log(file, 'found at', idx, ':', content.slice(start, end));
  }
}
