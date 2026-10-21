import fs from 'fs';

let c = fs.readFileSync('recovered-modules-combined/chunk_05_Sp7m9vtWcB2__bundle.js', 'utf8');
console.log(c.slice(804821, 804821 + 800));
