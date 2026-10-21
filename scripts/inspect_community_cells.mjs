import fs from 'fs';

const html = fs.readFileSync('analysis/live-communities-drawer.html', 'utf8');

const item0 = html.match(/data-testid="list-item-0"[\s\S]*?role="listitem" data-testid="list-item-1"/);
if (item0) console.log('ITEM 0 (New community):\n', item0[0].slice(0, 1200));

const item1 = html.match(/data-testid="list-item-1"[\s\S]*?role="listitem" data-testid="list-item-2"/);
if (item1) console.log('ITEM 1 (Community cell):\n', item1[0].slice(0, 1200));

const item2 = html.match(/data-testid="list-item-2"[\s\S]*?role="listitem" data-testid="list-item-3"/);
if (item2) console.log('ITEM 2 (Announcements):\n', item2[0].slice(0, 1200));

const item4 = html.match(/data-testid="list-item-4"[\s\S]*?<\/div><\/div><\/div><\/div>/);
if (item4) console.log('ITEM 4 (View all):\n', item4[0].slice(0, 1200));
