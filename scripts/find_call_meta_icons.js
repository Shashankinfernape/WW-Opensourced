const fs = require('fs');
const glob = require('fs').readdirSync('recovered-modules-combined');
const targetIcons = [
  'WDSIconWdsIcCall.react',
  'WDSIconWdsIcCallFilled.react',
  'WDSIconWdsIcMetaAiRing.react',
  'WAWebMetaAIIcon.react'
];

for (const file of glob) {
  if (!file.endsWith('.js')) continue;
  const content = fs.readFileSync('recovered-modules-combined/' + file, 'utf8');
  for (const icon of targetIcons) {
    let idx = content.indexOf(`__d("${icon}"`);
    if (idx !== -1) {
      console.log(`FOUND ${icon} in ${file} at ${idx}:`);
      console.log(content.slice(idx, idx + 1200));
    }
  }
}
