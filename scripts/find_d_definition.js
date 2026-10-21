const fs = require('fs');
const path = require('path');

function searchForDDef(dir) {
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  for (const entry of entries) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      searchForDDef(full);
    } else if (entry.isFile() && full.endsWith('.js')) {
      const c = fs.readFileSync(full, 'utf8');
      const idx = c.indexOf('__d=function(');
      const idx2 = c.indexOf('function __d(');
      const idx3 = c.indexOf('__d = function(');
      const match = idx !== -1 ? idx : (idx2 !== -1 ? idx2 : idx3);
      if (match !== -1) {
        console.log(`Found __d definition in ${full} at ${match}:`);
        console.log(c.slice(match, match + 500));
        return true;
      }
    }
  }
  return false;
}

console.log('Searching for __d definition in exported-scripts:');
searchForDDef('exported-scripts');
console.log('Searching for __d definition in recovered-modules-combined:');
searchForDDef('recovered-modules-combined');
