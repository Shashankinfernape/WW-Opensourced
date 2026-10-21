const fs = require('fs');
const glob = require('fs').readdirSync('recovered-modules-combined');

for (const file of glob) {
  if (!file.endsWith('.js')) continue;
  const content = fs.readFileSync('recovered-modules-combined/' + file, 'utf8');
  let regex = /__d\(\s*["']WDSIcon[A-Za-z0-9]*Call[A-Za-z0-9]*\.react["']/g;
  let match;
  while ((match = regex.exec(content)) !== null) {
    console.log(`Found call icon in ${file}:`, match[0]);
    console.log(content.slice(match.index, match.index + 800));
  }
}
