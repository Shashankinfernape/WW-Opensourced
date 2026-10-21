const fs = require('fs');
const css = fs.readFileSync('target_artifacts/whatsapp-web/css/production.css', 'utf8');

const bgProps = [
  'background-repeat', 'background-size', 'background-position',
  'mask-repeat', 'mask-size', 'mask-image'
];

for (const prop of bgProps) {
  const regex = new RegExp(`\\.([a-z0-9_-]+)\\{[^}]*${prop}:([^}]+)\\}`, 'g');
  let match;
  let count = 0;
  while ((match = regex.exec(css)) !== null && count < 10) {
    console.log(`.${match[1]} { ${prop}: ${match[2]} }`);
    count++;
  }
}
