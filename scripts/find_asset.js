const fs = require('fs');
const path = require('path');

// 1. Search recovered modules for wallpaper/doodle/background
const dir = 'recovered-modules-combined';
const files = fs.readdirSync(dir);
for (const file of files) {
  if (file.endsWith('.js')) {
    const content = fs.readFileSync(path.join(dir, file), 'utf8');
    const terms = ['bg-chat', 'doodle', 'wallpaper', 'xihcpt0', 'conversation-panel-body'];
    for (const term of terms) {
      if (content.toLowerCase().includes(term)) {
        console.log(`Found "${term}" in: ${file}`);
        let pos = 0;
        let count = 0;
        while ((pos = content.toLowerCase().indexOf(term, pos)) !== -1 && count < 3) {
          console.log('Snippet:', content.slice(Math.max(0, pos - 150), Math.min(content.length, pos + 250)));
          pos += term.length;
          count++;
        }
      }
    }
  }
}
