const fs = require('fs');
const path = require('path');
const dir = 'recovered-modules-combined';

const seeds = [
  'tail-in', 'tail-out', 'msg-dblcheck', 'msg-check',
  'chats', 'status', 'channels', 'communities', 'newsletter',
  'starred', 'archive', 'settings', 'profile'
];

const results = {};
for (const file of fs.readdirSync(dir)) {
  if (file.endsWith('.js')) {
    const c = fs.readFileSync(path.join(dir, file), 'utf8');
    for (const seed of seeds) {
      if (c.includes(`"${seed}"`) || c.includes(`'${seed}'`) || c.includes(`data-icon="${seed}"`) || c.includes(`data-testid="${seed}"`) || c.includes(`WAWebIcon${seed}`) || c.includes(seed)) {
        if (!results[seed]) results[seed] = [];
        results[seed].push(file);
      }
    }
  }
}
console.log(JSON.stringify(results, null, 2));
