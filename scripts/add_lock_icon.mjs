import fs from 'fs';

const icons = JSON.parse(fs.readFileSync('analysis/svg-icons.json', 'utf8'));

icons['ic-lock'] = {
  viewBox: '0 0 24 24',
  width: 24,
  height: 24,
  path: 'M6 22c-.55 0-1.02-.2-1.41-.59-.4-.39-.59-.86-.59-1.41V10c0-.55.2-1.02.59-1.41C4.98 8.19 5.45 8 6 8h1V6c0-1.38.49-2.56 1.46-3.54A4.82 4.82 0 0 1 12 1c1.38 0 2.56.49 3.54 1.46A4.82 4.82 0 0 1 17 6v2h1c.55 0 1.02.2 1.41.59.4.39.59.86.59 1.41v10c0 .55-.2 1.02-.59 1.41-.39.4-.86.59-1.41.59H6Zm0-2h12V10H6v10Zm6-3c.55 0 1.02-.2 1.41-.59.4-.39.59-.86.59-1.41 0-.55-.2-1.02-.59-1.41-.39-.4-.86-.59-1.41-.59-.55 0-1.02.2-1.41.59-.4.39-.59.86-.59 1.41 0 .55.2 1.02.59 1.41.39.4.86.59 1.41.59ZM9 8h6V6c0-.83-.3-1.54-.88-2.13A2.9 2.9 0 0 0 12 3c-.83 0-1.54.3-2.13.88A2.9 2.9 0 0 0 9 6v2Z',
  module: 'WDSIconIcLock.react',
  file: 'recovered-modules-combined/chunk_20_source-20-c0413ff55b8f39805b2d620ec891eb__bundle.js',
  byteOffset: 1336633
};

fs.writeFileSync('analysis/svg-icons.json', JSON.stringify(icons, null, 2), 'utf8');
fs.copyFileSync('analysis/svg-icons.json', 'reconstruction/src/icons/svg-icons.json');
console.log('Saved icons and synced! Total:', Object.keys(icons).length);
