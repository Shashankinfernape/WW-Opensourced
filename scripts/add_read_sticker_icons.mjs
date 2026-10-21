import fs from 'fs';

const icons = JSON.parse(fs.readFileSync('analysis/svg-icons.json', 'utf8'));

icons['wds-ic-read'] = {
  viewBox: '0 0 24 24',
  width: 24,
  height: 24,
  path: 'M14.73 6.01a1 1 0 0 1 1.41-.15l.01.01a1 1 0 0 1 .15 1.41L7.6 18.01a1 1 0 0 1-.73.37h-.05c-.26 0-.52-.11-.71-.3l-4.03-4.09a.99.99 0 0 1 0-1.41.99.99 0 0 1 1.41 0l3.25 3.29 7.99-9.86Zm5.71.12a1 1 0 0 1 1.41-.15h-.01a1 1 0 0 1 .15 1.41l-8.41 10.45a1 1 0 0 1-.73.37h-.05a1 1 0 0 1-.71-.3l-1.36-1.26a.55.55 0 0 1-.02-.81l.56-.68c.21-.2.53-.21.75-.03l.71.58 7.71-9.58Z',
  module: 'WDSIconWdsIcRead.react',
  file: 'recovered-modules-combined/chunk_05_Sp7m9vtWcB2__bundle.js',
  byteOffset: 420443
};

icons['wds-ic-sticker'] = {
  viewBox: '0 0 24 24',
  width: 24,
  height: 24,
  path: 'M12 22a6.97 6.97 0 0 0 4.82-2.02l3.03-3A7.27 7.27 0 0 0 22 11.8V9.27A7.27 7.27 0 0 0 14.73 2H9.27A7.27 7.27 0 0 0 2 9.27v5.46A7.27 7.27 0 0 0 9.27 22H12ZM9.27 4h5.46A5.27 5.27 0 0 1 20 9.08h-.01v2.04c0 .5-.4.91-.9.91h-2.27A4.81 4.81 0 0 0 12 16.85l.02 2.26a.9.9 0 0 1-.68.88H9.27A5.27 5.27 0 0 1 4 14.73V9.27A5.27 5.27 0 0 1 9.27 4Zm4.7 15.55c.03-.14.04-.29.04-.44l-.02-2.26a2.8 2.8 0 0 1 2.82-2.83l2.26.01c.16 0 .3-.01.46-.03-.26.57-.63 1.1-1.09 1.56l-3.03 3c-.42.42-.9.75-1.44 1Z',
  module: 'WDSIconWdsIcSticker.react',
  file: 'recovered-modules-combined/chunk_05_Sp7m9vtWcB2__bundle.js',
  byteOffset: 804821
};

fs.writeFileSync('analysis/svg-icons.json', JSON.stringify(icons, null, 2), 'utf8');
fs.copyFileSync('analysis/svg-icons.json', 'reconstruction/src/icons/svg-icons.json');
console.log('Saved icons and synced! Total:', Object.keys(icons).length);
