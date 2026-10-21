const fs = require('fs');
const path = require('path');

const files = fs.readdirSync('recovered-modules-combined').filter(f => f.endsWith('.js'));

const terms = [
  'NavBar',
  'NavRail',
  'NavigationRail',
  'SideNav',
  'WAWebNavigation',
  'WAWebNavBar',
  'chats-tab',
  'status-tab',
  'channels-tab',
  'communities-tab',
  'settings-tab',
  'nav-rail',
  'navigation-rail'
];

for (const file of files) {
  const content = fs.readFileSync(path.join('recovered-modules-combined', file), 'utf8');
  for (const term of terms) {
    let idx = 0;
    while ((idx = content.indexOf(term, idx)) !== -1) {
      const dStart = content.lastIndexOf('__d(', idx);
      let moduleName = 'unknown';
      if (dStart !== -1) {
        const m = content.substring(dStart, dStart + 100).match(/__d\("([^"]+)"/);
        if (m) moduleName = m[1];
      }
      const line = content.substring(0, idx).split('\n').length;
      console.log(`[${term}] in "${moduleName}" at ${file}#L${line}`);
      idx += term.length + 20000;
    }
  }
}
