import fs from 'fs';

const index = JSON.parse(fs.readFileSync('extracted-modules/module_index.json', 'utf8'));
const names = Object.keys(index);

function search(query) {
  const matches = names.filter(n => n.toLowerCase().includes(query.toLowerCase()));
  console.log(`\n=== Matches for "${query}" (${matches.length}) ===`);
  matches.slice(0, 30).forEach(m => console.log(' ', m));
}

search('StatusPanel');
search('Status');
search('Channel');
search('Newsletter');
search('Community');
search('Communities');
search('Call');
search('Settings');
search('Profile');
search('Archived');
search('Starred');
search('NewChat');
search('Drawer');
