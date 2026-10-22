import fs from 'fs';
import path from 'path';

const icons = JSON.parse(fs.readFileSync('./reconstruction/src/icons/svg-icons.json', 'utf8'));
const compDir = './reconstruction/src/components';
const files = fs.readdirSync(compDir).filter(f => f.endsWith('.tsx'));
const missing = new Set();
let totalFound = 0;

for (const file of files) {
  const content = fs.readFileSync(path.join(compDir, file), 'utf8');
  const matches = [...content.matchAll(/name=(?:\{['"]|['"])([^'"\}]+)(?:['"]\}|['"])/g)];
  for (const m of matches) {
    const iconName = m[1].trim();
    if (iconName.startsWith('{') || iconName.includes('?') || iconName.includes(':')) continue;
    totalFound++;
    if (!icons[iconName]) {
      missing.add(`${iconName} (in ${file})`);
    }
  }
}

console.log(`Total static icon references checked: ${totalFound}`);
console.log(`Missing icons count: ${missing.size}`);
if (missing.size > 0) {
  console.log('Missing items:', Array.from(missing));
} else {
  console.log('ALL ICONS RESOLVED WITH ZERO MISSES!');
}
