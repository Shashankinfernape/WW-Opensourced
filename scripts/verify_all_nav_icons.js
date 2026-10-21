const fs = require('fs');
const crypto = require('crypto');

function sha256(str) {
  return crypto.createHash('sha256').update(str, 'utf8').digest('hex');
}

const icons = [
  {
    name: 'nav-chats',
    module: 'WDSIconWdsIcChat.react',
    file: 'recovered-modules-combined/chunk_04_source-4-796019e71d254ebef877276fc670825__bundle.js',
  },
  {
    name: 'nav-chats-filled',
    module: 'WDSIconWdsIcChatFilled.react',
    file: 'recovered-modules-combined/chunk_04_source-4-796019e71d254ebef877276fc670825__bundle.js',
  },
  {
    name: 'nav-calls',
    module: 'WDSIconIcCall.react',
    file: 'recovered-modules-combined/chunk_02_source-2-60d621455d3fd13631142757928dac4__bundle.js',
  },
  {
    name: 'nav-calls-filled',
    module: 'WDSIconIcCallFilled.react',
    file: 'recovered-modules-combined/chunk_20_source-20-c0413ff55b8f39805b2d620ec891eb__bundle.js',
  },
  {
    name: 'nav-status',
    module: 'WDSIconWdsIcStatus.react',
    file: 'recovered-modules-combined/chunk_04_source-4-796019e71d254ebef877276fc670825__bundle.js',
  },
  {
    name: 'nav-status-filled',
    module: 'WDSIconWdsIcStatusFilled.react',
    file: 'recovered-modules-combined/chunk_04_source-4-796019e71d254ebef877276fc670825__bundle.js',
  },
  {
    name: 'nav-channels',
    module: 'WDSIconWdsIcChannels.react',
    file: 'recovered-modules-combined/chunk_04_source-4-796019e71d254ebef877276fc670825__bundle.js',
  },
  {
    name: 'nav-channels-filled',
    module: 'WDSIconWdsIcChannelsFilled.react',
    file: 'recovered-modules-combined/chunk_04_source-4-796019e71d254ebef877276fc670825__bundle.js',
  },
  {
    name: 'nav-communities',
    module: 'WDSIconWdsIcCommunities.react',
    file: 'recovered-modules-combined/chunk_04_source-4-796019e71d254ebef877276fc670825__bundle.js',
  },
  {
    name: 'nav-communities-filled',
    module: 'WDSIconWdsIcCommunitiesFilled.react',
    file: 'recovered-modules-combined/chunk_04_source-4-796019e71d254ebef877276fc670825__bundle.js',
  },
  {
    name: 'nav-meta-ai',
    module: 'WDSIconWdsIcLogoMetaAi.react',
    file: 'recovered-modules-combined/chunk_04_source-4-796019e71d254ebef877276fc670825__bundle.js',
  },
  {
    name: 'nav-settings',
    module: 'WDSIconIcSettings.react',
    file: 'recovered-modules-combined/chunk_04_source-4-796019e71d254ebef877276fc670825__bundle.js',
  },
  {
    name: 'nav-settings-filled',
    module: 'WDSIconIcSettingsFilled.react',
    file: 'recovered-modules-combined/chunk_04_source-4-796019e71d254ebef877276fc670825__bundle.js',
  }
];

const results = [];

for (const icon of icons) {
  const content = fs.readFileSync(icon.file, 'utf8');
  const modIdx = content.indexOf(`__d("${icon.module}"`);
  if (modIdx === -1) {
    console.error(`Module ${icon.module} NOT found in ${icon.file}`);
    continue;
  }
  const lineNo = content.slice(0, modIdx).split('\n').length;
  // Module definition snippet
  const modEnd = content.indexOf('}, ', modIdx);
  const snippet = content.slice(modIdx, modEnd + 10);
  
  // Extract path string from createWDSIcon call
  // Match createWDSIcon(..., "M...")
  const pathRegex = /createWDSIcon\(\s*"[^"]+",\s*\d+,\s*\d+,\s*"[^"]+",\s*\{[^}]*\},\s*"([^"]+)"\)/;
  const match = pathRegex.exec(snippet);
  if (match) {
    const pathD = match[1];
    const pathHash = sha256(pathD);
    results.push({
      name: icon.name,
      module: icon.module,
      file: icon.file,
      byteOffset: modIdx,
      lineNo: lineNo,
      pathD: pathD,
      pathHash: pathHash,
      inModuleText: snippet.includes(pathD)
    });
  } else {
    // Check if path is in array format
    console.log(`Checking alternative pattern for ${icon.module}...`);
    console.log(snippet);
  }
}

fs.writeFileSync('analysis/icon_verification_report.json', JSON.stringify(results, null, 2), 'utf8');
console.log('Processed', results.length, 'icons successfully.');
for (const r of results) {
  console.log(`\nIcon: ${r.name} (${r.module})`);
  console.log(`Location: ${r.file} at byte offset ${r.byteOffset}, line ${r.lineNo}`);
  console.log(`Path hash (SHA-256): ${r.pathHash}`);
  console.log(`Exact match in module: ${r.inModuleText}`);
  console.log(`Path d snippet: ${r.pathD.slice(0, 60)}...`);
}
