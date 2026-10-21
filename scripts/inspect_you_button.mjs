import fs from 'fs';

const html = fs.readFileSync('analysis/live-rail-dom.html', 'utf8');

const youStart = html.indexOf('aria-label="You"');
if (youStart !== -1) {
  console.log('You button HTML:');
  console.log(html.slice(youStart - 100, youStart + 1500));
}
