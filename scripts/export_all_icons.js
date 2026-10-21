const fs = require('fs');

['chunk_09_source-9-122c3e652dc14fd507309af34868b6f__bundle.js', 'chunk_26_source-26-d9b5cb7fdfe11a88b2d9ce3c290436__bundle.js'].forEach(chunk => {
  const code = fs.readFileSync('recovered-modules-combined/' + chunk, 'utf8');
  const re = /createWDSIcon\("([^"]+)",\s*(\d+),\s*(\d+),\s*"([^"]+)",\s*\{[^}]*\},\s*"([^"]+)"\)/g;
  let m;
  console.log(`=== Icons in ${chunk} ===`);
  while ((m = re.exec(code)) !== null) {
    console.log(`export const ${m[1].replace(/[^a-zA-Z0-9]/g, '_')} = { name: "${m[1]}", viewBox: "${m[4]}", path: "${m[5]}" };`);
  }
});
