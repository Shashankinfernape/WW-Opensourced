const fs = require('fs');
const html = fs.readFileSync('captures/live-dom-rendered.html', 'utf8');

const bodyIdx = html.indexOf('<body');
console.log('--- Body tag ---');
console.log(html.slice(bodyIdx, bodyIdx + 500));

const appIdx = html.indexOf('id="app"');
if (appIdx !== -1) {
  console.log('--- #app element ---');
  console.log(html.slice(appIdx, appIdx + 1500));
} else {
  console.log('#app not found, searching for main containers...');
  const mainIdx = html.indexOf('<main');
  if (mainIdx !== -1) {
    console.log(html.slice(mainIdx, mainIdx + 1500));
  }
}
