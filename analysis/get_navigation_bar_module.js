const fs = require('fs');
const chunk10 = fs.readFileSync('recovered-modules-combined/chunk_10_3nzqNpHbcmc__bundle.js', 'utf8');

const start = chunk10.indexOf('__d("WAWebNavigationBar.react"');
const end = chunk10.indexOf('__d(', start + 10);
console.log(chunk10.substring(start, end));
