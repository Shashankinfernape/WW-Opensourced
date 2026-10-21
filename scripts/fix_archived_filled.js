const fs = require('fs');

for (const targetPath of ['analysis/svg-icons.json', 'reconstruction/src/icons/svg-icons.json']) {
  const data = JSON.parse(fs.readFileSync(targetPath, 'utf8'));
  
  data['nav-archived-filled'] = {
    module: "WDSIconIcArchiveFilled.react",
    file: "recovered-modules-combined/chunk_10_3nzqNpHbcmc__bundle.js",
    lineNo: 40830,
    byteOffset: 1559827,
    viewBox: "0 -960 960 960",
    path: "M200-120q-33 0-56.5-23.5T120-200v-499q0-14 4.5-27t13.5-24l50-61q11-14 27.5-21.5T250-840h460q18 0 34.5 7.5T772-811l50 61q9 11 13.5 24t4.5 27v499q0 33-23.5 56.5T760-120H200Zm16-600h528l-34-40H250l-34 40Zm235.5 171.5Q440-537 440-520v128l-36-36q-11-11-28-11t-28 11q-11 11-11 28t11 28l104 104q12 12 28 12t28-12l104-104q11-11 11-28t-11-28q-11-11-28-11t-28 11l-36 36v-128q0-17-11.5-28.5T480-560q-17 0-28.5 11.5Z"
  };

  fs.writeFileSync(targetPath, JSON.stringify(data, null, 2), 'utf8');
  console.log('Fixed nav-archived-filled in', targetPath);
}
