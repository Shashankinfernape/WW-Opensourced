import fs from 'fs';

const icons = JSON.parse(fs.readFileSync('analysis/svg-icons.json', 'utf8'));

if (icons['nav-calls'] && !icons['ic-call']) {
  icons['ic-call'] = { ...icons['nav-calls'], name: 'ic-call' };
}

fs.writeFileSync('analysis/svg-icons.json', JSON.stringify(icons, null, 2), 'utf8');
fs.copyFileSync('analysis/svg-icons.json', 'reconstruction/src/icons/svg-icons.json');
console.log('Aliases synced! Total:', Object.keys(icons).length);
