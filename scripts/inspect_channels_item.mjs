import fs from 'fs';

const html = fs.readFileSync('analysis/live-channels-drawer.html', 'utf8');

const itemMatch = html.match(/data-testid="newsletter-recommended-item"[\s\S]*?<\/div><\/div><\/div><\/div>/);
if (itemMatch) console.log('RECOMMENDED ITEM:\n', itemMatch[0].slice(0, 1000), '...\n');

const headingMatch = html.match(/data-testid="newsletter-recommended-block-heading"[\s\S]*?<\/div>/);
if (headingMatch) console.log('HEADING:\n', headingMatch[0], '\n');
