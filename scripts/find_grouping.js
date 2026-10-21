const fs = require('fs');
const path = require('path');
const dir = 'recovered-modules-combined';

const files = fs.readdirSync(dir);
files.forEach(f => {
  const code = fs.readFileSync(path.join(dir, f), 'utf8');
  if (code.includes('tail-in') || code.includes('tail-out') || code.includes('isFirstInGroup') || code.includes('isLastInGroup')) {
    console.log('Found grouping terms in:', f);
  }
});
