const fs = require('fs');
const glob = require('fs').readdirSync('recovered-modules-combined');
for (const file of glob) {
  if (!file.endsWith('.js')) continue;
  const content = fs.readFileSync('recovered-modules-combined/' + file, 'utf8');
  let regex = /__d\(\s*["']WDSButton\.react["']/g;
  let match = regex.exec(content);
  if (match) {
    console.log("DEFINED IN", file, "at", match.index);
    console.log(content.slice(match.index, match.index + 2000));
  }
}
