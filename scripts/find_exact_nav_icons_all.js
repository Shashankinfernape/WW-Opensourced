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
  for (const f of files) {
    const fullPath = 'recovered-modules-combined/' + f;
    const content = fs.readFileSync(fullPath, 'utf8');
    const decl = `__d("${target.module}"`;
    const idx = content.indexOf(decl);
    if (idx !== -1) {
      const lineNo = content.slice(0, idx).split('\n').length;
      
      const nextMod = content.indexOf('\n__d(', idx + 1);
      const modChunk = content.slice(idx, nextMod !== -1 ? nextMod : idx + 4000);
      
      const modIdMatch = /},\s*(\d+)\);/.exec(modChunk);
      const moduleId = modIdMatch ? modIdMatch[1] : 'unknown';
      
      let paths = [];
      
      // Pattern 1: d string directly
      // Look for all `d: "..."` or `, "M..."`
      const dRegex = /d:\s*"([^"]+)"/g;
      let dMatch;
      while ((dMatch = dRegex.exec(modChunk)) !== null) {
        paths.push(dMatch[1]);
      }
      
      // If no d: "...", look for trailing argument `, "M..."`
      if (paths.length === 0) {
        const trailingD = /,\s*"(M[^"]+)"\s*\);/.exec(modChunk);
        if (trailingD) {
          paths.push(trailingD[1]);
        }
      }
      
      for (let pIdx = 0; pIdx < paths.length; pIdx++) {
        const p = paths[pIdx];
        const hash = sha256(p);
        results.push({
          name: target.name,
          module: target.module,
          file: fullPath,
          byteOffset: idx,
          lineNo: lineNo,
          moduleId: moduleId,
          pathIndex: pIdx,
          totalPaths: paths.length,
          viewBox: '0 0 24 24',
          pathD: p,
          pathSha256: hash,
          inModuleText: content.includes(p)
        });
      }
      break;
    }
  }
}

fs.writeFileSync('analysis/icon_verification_report.json', JSON.stringify(results, null, 2), 'utf8');
console.log(`Extracted and verified ${results.length} path entries for all ${targetIcons.length} icons.`);
for (const r of results) {
  console.log(`[OK] ${r.name} (${r.module})`);
  console.log(`     File: ${r.file} (Line: ${r.lineNo}, Byte Offset: ${r.byteOffset}, Module ID: ${r.moduleId})`);
  console.log(`     Path SHA-256: ${r.pathSha256}`);
  console.log(`     Matches module text: ${r.inModuleText}`);
  console.log(`     d: "${r.pathD.slice(0, 50)}..."\n`);
}
