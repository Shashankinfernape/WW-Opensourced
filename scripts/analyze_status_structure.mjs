import fs from 'fs';

const html = fs.readFileSync('analysis/live-status-drawer.html', 'utf8');

console.log('Total length:', html.length);

// Let's inspect the sections in live-status-drawer.html
// 1. Header
// 2. My status button
// 3. Section header "Recent"
// 4. Status rows
// 5. Section header "Hidden" with "Show" toggle

const headerMatch = html.match(/<header[\s\S]*?<\/header>/);
if (headerMatch) console.log('HEADER:\n', headerMatch[0].slice(0, 500), '...\n');

const myStatusMatch = html.match(/<button[\s\S]*?data-testid="status-header"[\s\S]*?<\/button>/);
if (myStatusMatch) console.log('MY STATUS:\n', myStatusMatch[0].slice(0, 500), '...\n');

const recentMatch = html.match(/data-testid="section-header"[\s\S]*?Recent[\s\S]*?<\/div>/);
if (recentMatch) console.log('RECENT HEADER:\n', recentMatch[0], '\n');

const rowMatch = html.match(/data-testid="status-row-cell"[\s\S]*?<\/div><\/div><\/div><\/div>/);
if (rowMatch) console.log('STATUS ROW:\n', rowMatch[0].slice(0, 600), '...\n');
