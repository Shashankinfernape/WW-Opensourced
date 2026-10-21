const fs = require('fs');
const css = fs.readFileSync('target_artifacts/whatsapp-web/css/production.css', 'utf8');

// Find all occurrences of --WDS-systems-chat-foreground-wallpaper and check their selector
const regex = /([^{}]+)\{[^}]*--WDS-systems-chat-foreground-wallpaper:([^;}]+)/g;
let m;
while ((m = regex.exec(css)) !== null) {
  const sel = m[1].trim();
  const val = m[2].trim();
  if (sel.includes('dark') || sel.includes('root') || sel.includes('body')) {
    console.log(`Selector: ${sel.slice(-60)} => ${val}`);
  }
}
