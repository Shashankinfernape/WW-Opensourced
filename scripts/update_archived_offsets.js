const fs = require('fs');

for (const targetPath of ['analysis/svg-icons.json', 'reconstruction/src/icons/svg-icons.json']) {
  const data = JSON.parse(fs.readFileSync(targetPath, 'utf8'));
  
  data['nav-archived'].file = 'recovered-modules-combined/chunk_09_source-9-122c3e652dc14fd507309af34868b6f__bundle.js';
  data['nav-archived'].lineNo = 60967;
  data['nav-archived'].byteOffset = 2035928;
  
  data['nav-archived-filled'].file = 'recovered-modules-combined/chunk_10_3nzqNpHbcmc__bundle.js';
  data['nav-archived-filled'].lineNo = 40830;
  data['nav-archived-filled'].byteOffset = 1559827;

  fs.writeFileSync(targetPath, JSON.stringify(data, null, 2), 'utf8');
  console.log('Updated', targetPath);
}
