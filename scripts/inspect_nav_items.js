const fs = require('fs');
const files = [
  'WAWebChatsNavBarItem.react',
  'WAWebCallsNavBarItem.react',
  'WAWebStatusNavBarItem.react',
  'WAWebNewslettersNavBarItem.react',
  'WAWebCommunitiesNavBarItem.react',
  'WAWebMetaBotNavBarItem.react',
  'WAWebSettingsNavBarItem.react',
  'WAWebProfileNavBarItem.react'
];

const bundle = fs.readFileSync('recovered-modules-combined/chunk_10_3nzqNpHbcmc__bundle.js', 'utf8');

for (const name of files) {
  const searchStr = `__d("${name}"`;
  const idx = bundle.indexOf(searchStr);
  if (idx !== -1) {
    console.log(`=== ${name} found in chunk_10 ===`);
    console.log(bundle.slice(idx, idx + 1500));
  } else {
    console.log(`--- ${name} NOT in chunk_10, searching other chunks ---`);
  }
}
