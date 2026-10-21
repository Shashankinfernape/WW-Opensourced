import fs from 'fs';

const index = JSON.parse(fs.readFileSync('extracted-modules/module_index.json', 'utf8'));
const names = Object.keys(index);

function find(pattern) {
  const res = names.filter(n => pattern.test(n));
  console.log(`\nMatches for ${pattern}:`, res);
}

find(/Status.*react/i);
find(/Newsletter.*react/i);
find(/Community.*react/i);
find(/Voip.*react/i);
find(/Settings.*react/i);
find(/Profile.*react/i);
find(/Starred.*react/i);
find(/Archived.*react/i);
find(/NewChat.*react/i);
