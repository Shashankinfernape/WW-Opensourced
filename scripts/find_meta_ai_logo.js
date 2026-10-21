const fs = require('fs');
const glob = require('fs').readdirSync('recovered-modules-combined');
for (const file of glob) {
  if (!file.endsWith('.js')) continue;
  const content = fs.readFileSync('recovered-modules-combined/' + file, 'utf8');
  let idx = content.indexOf('__d("WDSIconWdsIcLogoMetaAi.react"');
  if (idx !== -1) {
    console.log("FOUND WDSIconWdsIcLogoMetaAi in", file, "at", idx);
    console.log(content.slice(idx, idx + 1500));
  }
}
