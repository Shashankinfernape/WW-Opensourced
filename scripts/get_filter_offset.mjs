import fs from 'fs';

const content = fs.readFileSync('recovered-modules-combined/chunk_26_source-26-d9b5cb7fdfe11a88b2d9ce3c290436__bundle.js', 'utf8');
const decl = '__d("WDSIconIcFilter.react"';
const idx = content.indexOf(decl);
console.log('Index:', idx);
console.log('Header slice:', content.slice(idx, idx + 40));
