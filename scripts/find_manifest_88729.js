const fs = require('fs');

const manifestPath = 'exported-scripts/manifest.json';
if (fs.existsSync(manifestPath)) {
  const content = fs.readFileSync(manifestPath, 'utf8');
  let idx = content.indexOf('88729');
  if (idx !== -1) {
    console.log('Found 88729 in manifest.json at offset', idx);
    console.log(content.slice(Math.max(0, idx - 100), Math.min(content.length, idx + 400)));
  } else {
    console.log('88729 not in manifest.json');
  }
}

const filesDir = 'exported-scripts/files';
if (fs.existsSync(filesDir)) {
  for (const f of fs.readdirSync(filesDir)) {
    const c = fs.readFileSync(filesDir + '/' + f, 'utf8');
    let idx = c.indexOf('88729');
    if (idx !== -1) {
      console.log(`Found 88729 in ${filesDir}/${f} at ${idx}:`);
      console.log(c.slice(Math.max(0, idx - 100), Math.min(c.length, idx + 400)));
    }
  }
}
