const fs = require('fs');

const chunks = [
  'chunk_05_Sp7m9vtWcB2__bundle.js',
  'chunk_09_source-9-122c3e652dc14fd507309af34868b6f__bundle.js',
  'chunk_17_7Tf0qWLsuo3__bundle.js',
  'chunk_26_source-26-d9b5cb7fdfe11a88b2d9ce3c290436__bundle.js'
];

const icons = new Map();

// Helper to add
function addIcon(key, name, viewBox, path) {
  if (!icons.has(key)) {
    icons.set(key, { name, viewBox, path });
  }
}

// 1. Add tail-in and tail-out manually from decompiled chunk_17
addIcon('tail_in', 'tail-in', '0 0 8 13', 'M1.533,3.568L8,12.193V1H2.812 C1.042,1,0.474,2.156,1.533,3.568z');
addIcon('tail_out', 'tail-out', '0 0 8 13', 'M5.188,3.568L0,12.193V1h5.188c1.77,0,2.338,1.156,1.279,2.568z');

// 2. Scan all chunks for createWDSIcon
for (const chunk of chunks) {
  const filePath = 'recovered-modules-combined/' + chunk;
  if (!fs.existsSync(filePath)) continue;
  const code = fs.readFileSync(filePath, 'utf8');
  const re = /createWDSIcon\("([^"]+)",\s*(\d+),\s*(\d+),\s*"([^"]+)",\s*\{[^}]*\},\s*"([^"]+)"\)/g;
  let m;
  while ((m = re.exec(code)) !== null) {
    const rawName = m[1];
    const key = rawName.replace(/[^a-zA-Z0-9]/g, '_');
    addIcon(key, rawName, m[4], m[5]);
  }
}

let out = `export interface SvgIconDef {
  name: string;
  viewBox: string;
  path: string;
}

`;

for (const [key, icon] of icons.entries()) {
  out += `export const ${key}: SvgIconDef = {
  name: ${JSON.stringify(icon.name)},
  viewBox: ${JSON.stringify(icon.viewBox)},
  path: ${JSON.stringify(icon.path)}
};

`;
}

fs.writeFileSync('reconstruction/src/components/icons.ts', out, 'utf8');
console.log(`Generated icons.ts with ${icons.size} verified decompiled icons!`);
