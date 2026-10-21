const fs = require('fs');
const crypto = require('crypto');

function sha256(str) {
  return crypto.createHash('sha256').update(str, 'utf8').digest('hex');
}

const targetIcons = [
  { name: 'nav-chats', module: 'WDSIconWdsIcChat.react' },
  { name: 'nav-chats-filled', module: 'WDSIconWdsIcChatFilled.react' },
  { name: 'nav-calls', module: 'WDSIconIcCall.react' },
  { name: 'nav-calls-filled', module: 'WDSIconIcCallFilled.react' },
  { name: 'nav-status', module: 'WDSIconWdsIcStatus.react' },
  { name: 'nav-status-filled', module: 'WDSIconWdsIcStatusFilled.react' },
  { name: 'nav-channels', module: 'WDSIconWdsIcChannels.react' },
  { name: 'nav-channels-filled', module: 'WDSIconWdsIcChannelsFilled.react' },
  { name: 'nav-communities', module: 'WDSIconWdsIcCommunities.react' },
  { name: 'nav-communities-filled', module: 'WDSIconWdsIcCommunitiesFilled.react' },
  { name: 'nav-meta-ai', module: 'WDSIconWdsIcLogoMetaAi.react' },
  { name: 'nav-settings', module: 'WDSIconIcSettings.react' },
  { name: 'nav-settings-filled', module: 'WDSIconIcSettingsFilled.react' },
];

const files = fs.readdirSync('recovered-modules-combined').filter(f => f.endsWith('.js'));

const results = [];

for (const target of targetIcons) {
  let found = false;
  for (const f of files) {
    const fullPath = 'recovered-modules-combined/' + f;
    const content = fs.readFileSync(fullPath, 'utf8');
    const decl = `__d("${target.module}"`;
    const idx = content.indexOf(decl);
    if (idx !== -1) {
      found = true;
      const lineNo = content.slice(0, idx).split('\n').length;
      
      // Find the module closing "}, <moduleId>);"
      // Find end of module
      const nextMod = content.indexOf('\n__d(', idx + 1);
      const modChunk = content.slice(idx, nextMod !== -1 ? nextMod : idx + 3000);
      
      // Extract factory moduleId from closing "}, 98);" or similar
      const modIdMatch = /},\s*(\d+)\);/.exec(modChunk);
      const moduleId = modIdMatch ? modIdMatch[1] : 'unknown';
      
      // Extract viewBox and path d
      // createWDSIcon("ic-name", width, height, "viewBox", options, "pathD")
      // Or array of paths
      const callIdx = modChunk.indexOf('createWDSIcon(');
      if (callIdx !== -1) {
        const afterCall = modChunk.slice(callIdx);
        // Find closing paren of createWDSIcon
        const parenClose = afterCall.indexOf(');\n');
        const iconCallStr = afterCall.slice(0, parenClose + 2);
        
        // Find the string literal for path d
        // It starts after `fill: "currentColor"` or similar
        const dStart = iconCallStr.lastIndexOf(', "M');
        if (dStart !== -1) {
          const pathD = iconCallStr.slice(dStart + 3, iconCallStr.lastIndexOf('"'));
          const hash = sha256(pathD);
          results.push({
            name: target.name,
            module: target.module,
            file: fullPath,
            byteOffset: idx,
            lineNo: lineNo,
            moduleId: moduleId,
            viewBox: '0 0 24 24',
            pathD: pathD,
            pathSha256: hash,
            exactSnippetMatch: content.includes(pathD)
          });
        } else {
          console.log(`Alternative structure for ${target.module} in ${f}:`, iconCallStr.slice(0, 300));
        }
      }
      break;
    }
  }
  if (!found) {
    console.error(`TARGET NOT FOUND: ${target.module}`);
  }
}

fs.writeFileSync('analysis/icon_verification_report.json', JSON.stringify(results, null, 2), 'utf8');
console.log(`Successfully verified ${results.length} / ${targetIcons.length} icons.`);
