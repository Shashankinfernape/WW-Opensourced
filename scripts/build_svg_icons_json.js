const fs = require('fs');
const crypto = require('crypto');

const chunks = [
  'chunk_05_Sp7m9vtWcB2__bundle.js',
  'chunk_09_source-9-122c3e652dc14fd507309af34868b6f__bundle.js',
  'chunk_17_7Tf0qWLsuo3__bundle.js',
  'chunk_26_source-26-d9b5cb7fdfe11a88b2d9ce3c290436__bundle.js'
];

const icons = {};

// Helper
function recordIcon(name, viewBox, path, sourceChunk) {
  icons[name] = {
    name,
    viewBox,
    path,
    source: sourceChunk
  };
}

// 1. tail-in and tail-out
recordIcon(
  'tail-in',
  '0 0 8 13',
  'M1.533,3.568L8,12.193V1H2.812 C1.042,1,0.474,2.156,1.533,3.568z',
  'chunk_17_7Tf0qWLsuo3__bundle.js'
);
recordIcon(
  'tail-out',
  '0 0 8 13',
  'M5.188,3.568L0,12.193V1h5.188c1.77,0,2.338,1.156,1.279,2.568z',
  'chunk_17_7Tf0qWLsuo3__bundle.js'
);

// 2. createWDSIcon extractions
for (const chunk of chunks) {
  const filePath = 'recovered-modules-combined/' + chunk;
  if (!fs.existsSync(filePath)) continue;
  const code = fs.readFileSync(filePath, 'utf8');
  const re = /createWDSIcon\("([^"]+)",\s*(\d+),\s*(\d+),\s*"([^"]+)",\s*\{[^}]*\},\s*"([^"]+)"\)/g;
  let m;
  while ((m = re.exec(code)) !== null) {
    recordIcon(m[1], m[4], m[5], chunk);
  }
}

fs.writeFileSync('analysis/svg-icons.json', JSON.stringify(icons, null, 2), 'utf8');
console.log(`Extracted ${Object.keys(icons).length} SVG icons into analysis/svg-icons.json`);
