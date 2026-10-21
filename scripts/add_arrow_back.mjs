import fs from 'fs';

const icons = JSON.parse(fs.readFileSync('analysis/svg-icons.json', 'utf8'));

icons['ic-arrow-back'] = {
  viewBox: '0 0 24 24',
  width: 24,
  height: 24,
  path: 'm7.82 13 4.9 4.9c.2.2.3.43.3.7a1 1 0 0 1-.32.7c-.2.18-.43.28-.7.29a.92.92 0 0 1-.7-.29l-6.6-6.6a.88.88 0 0 1-.21-.32 1.1 1.1 0 0 1-.07-.38c0-.13.03-.26.07-.38a.88.88 0 0 1 .21-.32l6.6-6.6a.93.93 0 0 1 .69-.27.97.97 0 0 1 1.01.99c0 .27-.1.5-.3.7L7.82 11H19c.28 0 .52.1.71.29.2.19.29.43.29.71 0 .28-.1.52-.29.71A.94.94 0 0 1 19 13H7.82Z',
  module: 'WDSIconIcArrowBack.react',
  file: 'recovered-modules-combined/chunk_04_source-4-796019e71d254ebef877276fc670825__bundle.js',
  byteOffset: 7937584
};

fs.writeFileSync('analysis/svg-icons.json', JSON.stringify(icons, null, 2), 'utf8');
fs.copyFileSync('analysis/svg-icons.json', 'reconstruction/src/icons/svg-icons.json');
console.log('Saved icons and synced! Total:', Object.keys(icons).length);
