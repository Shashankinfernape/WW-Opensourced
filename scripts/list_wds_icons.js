const fs = require('fs');
const code = fs.readFileSync('recovered-modules-combined/chunk_05_Sp7m9vtWcB2__bundle.js', 'utf8');

const re = /createWDSIcon\("([^"]+)",\s*(\d+),\s*(\d+),\s*"([^"]+)",\s*\{[^}]*\},\s*"([^"]+)"\)/g;
let m;
console.log('--- WDS Icons in chunk 05 ---');
while ((m = re.exec(code)) !== null) {
  console.log(m[1], 'viewBox:', m[4], 'path:', m[5].slice(0, 50) + '...');
}
