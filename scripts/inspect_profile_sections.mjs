import fs from 'fs';

const html = fs.readFileSync('analysis/live-profile-drawer.html', 'utf8');

const photoMatch = html.match(/data-testid="profile-pic-picker"[\s\S]*?<\/div><\/div><\/div>/);
if (photoMatch) console.log('PHOTO PICKER:\n', photoMatch[0].slice(0, 1000));

const nameMatch = html.match(/data-testid="pushname-section"[\s\S]*?<\/div><\/div><\/div>/);
if (nameMatch) console.log('\nNAME SECTION:\n', nameMatch[0].slice(0, 1000));

const aboutMatch = html.match(/data-testid="about-section"[\s\S]*?<\/div><\/div><\/div>/);
if (aboutMatch) console.log('\nABOUT SECTION:\n', aboutMatch[0].slice(0, 1000));
