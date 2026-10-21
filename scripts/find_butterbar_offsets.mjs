import fs from 'fs';

let c1 = fs.readFileSync('recovered-modules-combined/chunk_19_36kJFHJBFHp__bundle.js', 'utf8');
let o1 = c1.indexOf('__d("WDSIconIcNotificationsOff.react"');
console.log('ic-notifications-off offset:', o1);

let c2 = fs.readFileSync('recovered-modules-combined/chunk_04_source-4-796019e71d254ebef877276fc670825__bundle.js', 'utf8');
let o2 = c2.indexOf('__d("WDSIconIcClose.react"');
console.log('ic-close offset:', o2);
