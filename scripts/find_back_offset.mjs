import fs from 'fs';

let c = fs.readFileSync('recovered-modules-combined/chunk_04_source-4-796019e71d254ebef877276fc670825__bundle.js', 'utf8');
let o = c.indexOf('__d("WDSIconIcArrowBack.react"');
console.log('ic-arrow-back offset:', o);
console.log(c.slice(o, o + 500));
