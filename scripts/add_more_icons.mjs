import fs from 'fs';

const icons = JSON.parse(fs.readFileSync('analysis/svg-icons.json', 'utf8'));

icons['videocam'] = {
  viewBox: '0 0 24 24',
  width: 24,
  height: 24,
  path: 'M4 20c-.55 0-1.02-.2-1.41-.59-.4-.39-.59-.86-.59-1.41V6c0-.55.2-1.02.59-1.41C2.98 4.19 3.45 4 4 4h12c.55 0 1.02.2 1.41.59.4.39.59.86.59 1.41v4.5l3.15-3.15c.17-.17.35-.2.55-.13.2.09.3.25.3.48v8.6c0 .23-.1.4-.3.47-.2.09-.38.05-.55-.12L18 13.5V18c0 .55-.2 1.02-.59 1.41-.39.4-.86.59-1.41.59H4Zm0-2h12V6H4v12Z',
  module: 'WDSIconIcVideocam.react',
  file: 'recovered-modules-combined/chunk_26_source-26-d9b5cb7fdfe11a88b2d9ce3c290436__bundle.js',
  byteOffset: 8509838
};

icons['sticker-smiley'] = {
  viewBox: '0 0 24 24',
  width: 24,
  height: 24,
  paths: [
    'M8.5 10.25a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Zm8.5-1.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z',
    'M16.82 19.98A6.97 6.97 0 0 1 12 22H9.27A7.27 7.27 0 0 1 2 14.73V9.27A7.27 7.27 0 0 1 9.27 2h5.46A7.27 7.27 0 0 1 22 9.27v2.54c0 1.94-.77 3.8-2.15 5.17l-3.03 3ZM14.72 4H9.28A5.27 5.27 0 0 0 4 9.27v5.46A5.27 5.27 0 0 0 9.27 20h2.06a.9.9 0 0 0 .68-.88l-.02-2.26v-.11a5.5 5.5 0 0 1-4.65-2.6.6.6 0 0 1 .03-.6c.12-.2.3-.3.53-.3h5.7a4.8 4.8 0 0 1 3.22-1.23l2.26.01c.5 0 .9-.4.9-.9V9.07H20A5.27 5.27 0 0 0 14.73 4Zm-.71 15.11c0 .15-.01.3-.04.44a4.96 4.96 0 0 0 1.44-.99l3.03-3c.46-.46.83-.99 1.09-1.56-.15.02-.3.03-.46.03h-2.26A2.8 2.8 0 0 0 14 16.84l.02 2.26Z'
  ],
  module: 'WDSIconWdsIcStickerSmiley.react',
  file: 'recovered-modules-combined/chunk_05_Sp7m9vtWcB2__bundle.js',
  byteOffset: 893840
};

fs.writeFileSync('analysis/svg-icons.json', JSON.stringify(icons, null, 2), 'utf8');
console.log('Saved icons! Total:', Object.keys(icons).length);
