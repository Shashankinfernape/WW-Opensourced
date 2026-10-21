const fs = require('fs');

const glob = fs.readdirSync('recovered-modules-combined');
for (const file of glob) {
  if (!file.endsWith('.js')) continue;
  const content = fs.readFileSync('recovered-modules-combined/' + file, 'utf8');
  let idx = content.indexOf('getMetaAiRingIcon');
  if (idx !== -1) {
    console.log('getMetaAiRingIcon called in', file, 'at', idx);
    console.log(content.slice(Math.max(0, idx - 100), Math.min(content.length, idx + 200)));
  }
}
