import fs from 'fs';

let c = fs.readFileSync('recovered-modules-combined/chunk_05_Sp7m9vtWcB2__bundle.js', 'utf8');
let o1 = c.indexOf('__d("WDSIconWdsIcRead.react"');
let o2 = c.indexOf('__d("WDSIconWdsIcSticker.react"');
console.log('wds-ic-read offset:', o1);
console.log('wds-ic-sticker offset:', o2);
