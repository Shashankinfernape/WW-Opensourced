import fs from 'fs';

const html = fs.readFileSync('analysis/live-side-dom.html', 'utf8');

const archIdx = html.indexOf('>Archived<');
if (archIdx !== -1) {
  console.log('Archived row HTML snippet:');
  console.log(html.slice(archIdx - 600, archIdx + 600));
}
