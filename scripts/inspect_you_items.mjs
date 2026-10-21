import fs from 'fs';

const html = fs.readFileSync('analysis/live-you-drawer.html', 'utf8');

const profileMatch = html.match(/data-testid="li-profile"[\s\S]*?<\/div><\/div><\/div>/);
if (profileMatch) console.log('LI PROFILE:\n', profileMatch[0].slice(0, 1000));

const accountMatch = html.match(/data-testid="li-account"[\s\S]*?<\/div><\/div><\/div>/);
if (accountMatch) console.log('\nLI ACCOUNT:\n', accountMatch[0].slice(0, 1000));

const privacyMatch = html.match(/data-testid="settings-drawer-item-privacy"[\s\S]*?<\/div><\/div><\/div>/);
if (privacyMatch) console.log('\nLI PRIVACY:\n', privacyMatch[0].slice(0, 1000));
