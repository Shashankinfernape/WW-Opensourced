const fs = require('fs');

const glob = fs.readdirSync('recovered-modules-combined');
for (const file of glob) {
  if (!file.endsWith('.js')) continue;
  const content = fs.readFileSync('recovered-modules-combined/' + file, 'utf8');
  let regex = /["']88729["']\s*:/g;
  let match = regex.exec(content);
  if (match) {
    console.log('Map key 88729 in', file, 'at', match.index);
    console.log(content.slice(match.index, match.index + 200));
  }
}
