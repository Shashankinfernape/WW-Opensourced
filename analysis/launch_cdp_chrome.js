const { spawn } = require('child_process');
const path = require('path');
const os = require('os');

const chromePath = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';
const userDataDir = path.join(os.tmpdir(), 'chrome_cdp_9222_' + Date.now());

console.log('Launching Chrome with CDP on 9222...');
const chrome = spawn(chromePath, [
  '--headless=new',
  '--remote-debugging-port=9222',
  '--remote-debugging-address=0.0.0.0',
  `--user-data-dir=${userDataDir}`,
  '--disable-gpu',
  '--window-size=1050,832',
  '--no-first-run',
  '--no-default-browser-check',
  'http://127.0.0.1:5173/'
], {
  stdio: 'inherit'
});

chrome.on('error', (err) => {
  console.error('Failed to start Chrome:', err);
});

chrome.on('exit', (code, signal) => {
  console.log(`Chrome process exited with code ${code}, signal ${signal}`);
});

process.on('SIGINT', () => {
  chrome.kill();
  process.exit();
});
process.on('SIGTERM', () => {
  chrome.kill();
  process.exit();
});
