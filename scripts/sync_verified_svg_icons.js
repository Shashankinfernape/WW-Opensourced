const fs = require('fs');

const report = JSON.parse(fs.readFileSync('analysis/icon_verification_report.json', 'utf8'));
const currentIcons = JSON.parse(fs.readFileSync('analysis/svg-icons.json', 'utf8'));

// Group report by icon name
const grouped = {};
for (const entry of report) {
  if (!grouped[entry.name]) {
    grouped[entry.name] = {
      module: entry.module,
      file: entry.file,
      lineNo: entry.lineNo,
      byteOffset: entry.byteOffset,
      moduleId: entry.moduleId,
      viewBox: entry.viewBox,
      paths: []
    };
  }
  grouped[entry.name].paths.push(entry.pathD);
}

for (const [name, def] of Object.entries(grouped)) {
  if (def.paths.length === 1) {
    currentIcons[name] = {
      module: def.module,
      file: def.file,
      lineNo: def.lineNo,
      byteOffset: def.byteOffset,
      moduleId: def.moduleId,
      viewBox: def.viewBox,
      path: def.paths[0]
    };
  } else {
    currentIcons[name] = {
      module: def.module,
      file: def.file,
      lineNo: def.lineNo,
      byteOffset: def.byteOffset,
      moduleId: def.moduleId,
      viewBox: def.viewBox,
      paths: def.paths
    };
  }
}

fs.writeFileSync('analysis/svg-icons.json', JSON.stringify(currentIcons, null, 2), 'utf8');
fs.writeFileSync('reconstruction/src/icons/svg-icons.json', JSON.stringify(currentIcons, null, 2), 'utf8');
console.log('Synchronized analysis/svg-icons.json and reconstruction/src/icons/svg-icons.json with verified multi-path definitions.');
