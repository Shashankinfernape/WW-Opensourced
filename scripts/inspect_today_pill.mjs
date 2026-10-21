import fs from 'fs';

const html = fs.readFileSync('analysis/live-main-dom.html', 'utf8');

const todayIdx = html.indexOf('>Today<');
if (todayIdx !== -1) {
  console.log('--- TODAY DATE PILL HTML ---');
  console.log(html.slice(todayIdx - 300, todayIdx + 300));
}
