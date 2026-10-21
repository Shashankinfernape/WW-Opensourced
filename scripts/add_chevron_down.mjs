import fs from 'fs';

const filePath = 'recovered-modules-combined/chunk_02_source-2-60d621455d3fd13631142757928dac4__bundle.js';
const content = fs.readFileSync(filePath, 'utf8');
const modHeader = '__d("WDSIconIcChevronDown.react"';
const byteOffset = content.indexOf(modHeader);

if (byteOffset === -1) {
  console.error('Module header not found!');
  process.exit(1);
}

const iconData = {
  viewBox: "0 -960 960 960",
  width: 24,
  height: 24,
  path: "M465-363.5q-7-2.5-13-8.5L268-556q-11-11-11-28t11-28 28-11 28 11l156 156 156-156q11-11 28-11t28 11 11 28-11 28L508-372q-6 6-13 8.5t-15 2.5-15-2.5",
  module: "WDSIconIcChevronDown.react",
  file: filePath,
  byteOffset: byteOffset
};

for (const p of ['analysis/svg-icons.json', 'reconstruction/src/icons/svg-icons.json']) {
  const json = JSON.parse(fs.readFileSync(p, 'utf8'));
  json['ic-chevron-down'] = iconData;
  fs.writeFileSync(p, JSON.stringify(json, null, 2), 'utf8');
  console.log(`Updated ${p} with byteOffset ${byteOffset}`);
}
