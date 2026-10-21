import fs from 'fs';

let c = fs.readFileSync('recovered-modules-combined/chunk_09_source-9-122c3e652dc14fd507309af34868b6f__bundle.js', 'utf8');
let o = c.indexOf('__d("WDSIconIcAdd.react"');
console.log('ic-add offset:', o);

let c2 = c.slice(o, o + 400);
console.log(c2);
