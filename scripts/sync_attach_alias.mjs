import fs from 'fs';

const icons = JSON.parse(fs.readFileSync('analysis/svg-icons.json', 'utf8'));

if (icons['attach'] && !icons['ic-attach-file']) {
  icons['ic-attach-file'] = { ...icons['attach'], name: 'ic-attach-file' };
}

fs.writeFileSync('analysis/svg-icons.json', JSON.stringify(icons, null, 2), 'utf8');
fs.copyFileSync('analysis/svg-icons.json', 'reconstruction/src/icons/svg-icons.json');
console.log('Aliases synced! Total:', Object.keys(icons).length);
