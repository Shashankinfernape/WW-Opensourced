const fs = require('fs');
const code = fs.readFileSync('recovered-modules-combined/chunk_09_source-9-122c3e652dc14fd507309af34868b6f__bundle.js', 'utf8');

const icons = ['ic-chat', 'ic-status', 'ic-settings', 'ic-communities', 'ic-channels', 'ic-search'];

icons.forEach(name => {
  const idx = code.indexOf(`"${name}"`);
  if (idx !== -1) {
    console.log(`=== ${name} ===`);
    const region = code.slice(idx - 300, idx + 800);
    const pathM = region.match(/d="([^"]+)"/);
    if (pathM) {
      console.log('Path:', pathM[1]);
    } else {
      console.log('Snippet:', region.slice(0, 300));
    }
  }
});
