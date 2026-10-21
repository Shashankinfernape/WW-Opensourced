import fs from 'fs';

let c1 = fs.readFileSync('recovered-modules-combined/chunk_15_source-15-27d51190a6adf162925f23833e7a8c__bundle.js', 'utf8');
let o1 = c1.indexOf('__d("WAWebWaWordmarkIcon.react"');
console.log('wa-wordmark offset:', o1);

let c2 = fs.readFileSync('recovered-modules-combined/chunk_20_source-20-c0413ff55b8f39805b2d620ec891eb__bundle.js', 'utf8');
let o2 = c2.indexOf('__d("WDSIconIcMoreVert.react"');
console.log('ic-more-vert offset:', o2);

let c3 = fs.readFileSync('recovered-modules-combined/chunk_10_3nzqNpHbcmc__bundle.js', 'utf8');
let o3 = c3.indexOf('__d("WDSIconWdsIcNewChatFilled.react"');
console.log('wds-ic-new-chat-filled offset:', o3);
