import fs from 'fs';

const html = fs.readFileSync('analysis/live-intro-panel.html', 'utf8');
const regex = /style="([^"]*)"/g;
let m;
while ((m = regex.exec(html)) !== null) {
  console.log(m[1]);
}
