const fs = require('fs');

const css = fs.readFileSync('target_artifacts/whatsapp-web/css/production.css', 'utf8');

const tokenRe = /(--[a-zA-Z0-9_-]+)\s*:\s*([^;{}]+)/g;
const tokens = {};
let m;
while ((m = tokenRe.exec(css)) !== null) {
  const prop = m[1].trim();
  const val = m[2].trim();
  tokens[prop] = val;
}

console.log(`Extracted ${Object.keys(tokens).length} CSS tokens.`);
fs.writeFileSync('analysis/css-tokens.json', JSON.stringify(tokens, null, 2), 'utf8');
