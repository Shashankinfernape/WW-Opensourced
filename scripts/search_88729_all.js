const fs = require('fs');
const path = require('path');

function searchDir(dir, pattern) {
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  for (const entry of entries) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      searchDir(full, pattern);
    } else if (entry.isFile()) {
      try {
        const c = fs.readFileSync(full, 'utf8');
        let idx = c.indexOf(pattern);
        if (idx !== -1) {
          console.log(`Found "${pattern}" in ${full} at offset ${idx}:`);
          console.log(c.slice(Math.max(0, idx - 100), Math.min(c.length, idx + 300)));
        }
      } catch (e) {}
    }
  }
}

console.log('Searching exported-scripts for 88729:');
searchDir('exported-scripts', '88729');
console.log('Searching target_artifacts for 88729:');
searchDir('target_artifacts', '88729');
console.log('Searching captures for 88729:');
searchDir('captures', '88729');
