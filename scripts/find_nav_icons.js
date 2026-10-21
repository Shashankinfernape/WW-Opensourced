const fs = require('fs');
const path = require('path');
const dir = 'recovered-modules-combined';
const files = fs.readdirSync(dir);

const names = ['ic-chat', 'ic-status', 'ic-settings', 'ic-communities', 'ic-channels', 'ic-attach', 'ic-mic', 'ic-emoji', 'ic-search'];

files.forEach(f => {
  const content = fs.readFileSync(path.join(dir, f), 'utf8');
  names.forEach(n => {
    if (content.includes(`createWDSIcon("${n}"`) || content.includes(`BaseSvgSpan`) && content.includes(n)) {
      console.log(`Found ${n} in ${f}`);
    }
  });
});
