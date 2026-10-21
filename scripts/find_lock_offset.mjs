import fs from 'fs';

let c = fs.readFileSync('recovered-modules-combined/chunk_20_source-20-c0413ff55b8f39805b2d620ec891eb__bundle.js', 'utf8');
let o = c.indexOf('__d("WDSIconIcLock.react"');
console.log('ic-lock offset:', o);
console.log(c.slice(o, o + 500));
