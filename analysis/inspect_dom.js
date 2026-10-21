const fs = require('fs');

const html = fs.readFileSync('captures/live-dom-rendered.html', 'utf8');
console.log('HTML length:', html.length);

const bodyMatch = html.match(/<body[^>]*>/);
console.log('Body tag:', bodyMatch ? bodyMatch[0] : 'none');

// Look for app root
const appDiv = html.match(/<div id="app"[^>]*>/);
console.log('App div:', appDiv ? appDiv[0] : 'none');

// Find layout containers: let's inspect the top-level divs inside #app
let appIdx = html.indexOf('id="app"');
if (appIdx !== -1) {
  console.log('Snippet around #app:\n', html.substring(appIdx, appIdx + 1200));
}

// Find message bubbles
const msgIn = html.match(/class="[^"]*message-in[^"]*"/g);
console.log('message-in count:', msgIn ? msgIn.length : 0);
if (msgIn) console.log('message-in sample:', msgIn.slice(0, 3));

const msgOut = html.match(/class="[^"]*message-out[^"]*"/g);
console.log('message-out count:', msgOut ? msgOut.length : 0);
if (msgOut) console.log('message-out sample:', msgOut.slice(0, 3));

// Check tail containers
const tailIn = html.match(/<span[^>]*data-icon="tail-in"[^>]*>/g);
console.log('tail-in spans:', tailIn ? tailIn.length : 0);
const tailOut = html.match(/<span[^>]*data-icon="tail-out"[^>]*>/g);
console.log('tail-out spans:', tailOut ? tailOut.length : 0);
