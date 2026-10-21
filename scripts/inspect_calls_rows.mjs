import fs from 'fs';

const html = fs.readFileSync('analysis/live-calls-drawer.html', 'utf8');

const searchMatch = html.match(/data-testid="chat-list-search-container"[\s\S]*?<\/div><\/div><\/div>/);
if (searchMatch) console.log('SEARCH CONTAINER:\n', searchMatch[0].slice(0, 1000));

const favMatch = html.match(/data-testid="add-favorite"[\s\S]*?<\/div><\/div><\/div>/);
if (favMatch) console.log('\nFAVORITES:\n', favMatch[0].slice(0, 1000));

const callRowMatch = html.match(/data-testid="chatlist-message-0"[\s\S]*?<\/div><\/div><\/div>/);
if (callRowMatch) console.log('\nCALL ROW:\n', callRowMatch[0].slice(0, 1000));
