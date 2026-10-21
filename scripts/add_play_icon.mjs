import fs from 'fs';

const filePath = 'recovered-modules-combined/chunk_26_source-26-d9b5cb7fdfe11a88b2d9ce3c290436__bundle.js';
const byteOffset = 8503599;

const iconData = {
  viewBox: "0 0 24 24",
  width: 24,
  height: 24,
  path: "M9.53 18.02a.91.91 0 0 1-1.02.04.95.95 0 0 1-.51-.88V6.82c0-.4.17-.7.51-.88a.91.91 0 0 1 1.02.03l8.15 5.18c.3.2.45.48.45.85s-.15.65-.45.85l-8.15 5.17Z",
  module: "WDSIconIcPlayArrowFilled.react",
  file: filePath,
  byteOffset: byteOffset
};

for (const p of ['analysis/svg-icons.json', 'reconstruction/src/icons/svg-icons.json']) {
  const json = JSON.parse(fs.readFileSync(p, 'utf8'));
  json['ic-play-arrow-filled'] = iconData;
  fs.writeFileSync(p, JSON.stringify(json, null, 2), 'utf8');
  console.log(`Updated ${p}`);
}
