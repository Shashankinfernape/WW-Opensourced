const fs = require('fs');
const css = fs.readFileSync('target_artifacts/whatsapp-web/css/production.css', 'utf8');

const target = '--WDS-systems-chat-foreground-wallpaper';
let pos = 0;
while ((pos = css.indexOf(target, pos)) !== -1) {
  console.log('Found at', pos);
  console.log(css.slice(Math.max(0, pos - 150), Math.min(css.length, pos + 250)));
  pos += target.length;
}
