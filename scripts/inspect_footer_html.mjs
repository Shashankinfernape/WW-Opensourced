import fs from 'fs';

const html = fs.readFileSync('analysis/live-rail-dom.html', 'utf8');

const footerStart = html.indexOf('data-testid="navbar-footer-section"');
if (footerStart !== -1) {
  console.log('Footer section HTML:');
  console.log(html.slice(footerStart, footerStart + 2500));
}
