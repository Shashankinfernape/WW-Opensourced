const fs = require('fs');
const css = fs.readFileSync('target_artifacts/whatsapp-web/css/production.css', 'utf8');

const classes = [
  'x10l6tqk', 'x13vifvy', 'x1o0tod', 'xh8yej3', 'x5yr21d', 
  'x1fast2d', 'x197sbye', 'x12peec7', 'xihcpt0'
];

for (const cls of classes) {
  const regex = new RegExp(`\\.${cls}\\{([^}]+)\\}`, 'g');
  const match = regex.exec(css);
  if (match) {
    console.log(`.${cls} { ${match[1]} }`);
  } else {
    console.log(`.${cls} NOT FOUND in production.css`);
  }
}
