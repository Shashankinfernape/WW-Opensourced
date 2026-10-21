import fs from 'fs';

const html = fs.readFileSync('analysis/live-main-dom.html', 'utf8');

// Header
const headerIdx = html.indexOf('<header');
const headerEnd = html.indexOf('</header>');
console.log('--- HEADER HTML ---');
console.log(html.slice(headerIdx, headerEnd + 9));

// Footer (composer)
const footerIdx = html.indexOf('<footer');
const footerEnd = html.indexOf('</footer>');
console.log('--- FOOTER HTML ---');
console.log(html.slice(footerIdx, footerEnd + 9));
