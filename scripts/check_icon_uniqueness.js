const fs = require('fs');

const files = fs.readdirSync('recovered-modules-combined').filter(f => f.endsWith('.js'));
const targetIcons = [
  'WDSIconWdsIcChat.react',
  'WDSIconWdsIcChatFilled.react',
  'WDSIconIcCall.react',
  'WDSIconIcCallFilled.react',
  'WDSIconWdsIcStatus.react',
  'WDSIconWdsIcStatusFilled.react',
  'WDSIconWdsIcChannels.react',
  'WDSIconWdsIcChannelsFilled.react',
  'WDSIconWdsIcCommunities.react',
  'WDSIconWdsIcCommunitiesFilled.react',
  'WDSIconWdsIcLogoMetaAi.react',
  'WDSIconIcSettings.react',
  'WDSIconIcSettingsFilled.react'
];

for (const icon of targetIcons) {
  const matches = [];
  for (const f of files) {
    const content = fs.readFileSync('recovered-modules-combined/' + f, 'utf8');
    const decl = `__d("${icon}"`;
    let idx = 0;
    while ((idx = content.indexOf(decl, idx)) !== -1) {
      matches.push({ file: f, offset: idx });
      idx += decl.length;
    }
  }
  console.log(`${icon}: found in ${matches.length} chunk(s):`, matches.map(m => `${m.file} @ ${m.offset}`).join(', '));
}
