const fs = require('fs');
const html = fs.readFileSync('captures/live-dom-rendered.html', 'utf8');

const headStart = html.indexOf('<head>');
const headEnd = html.indexOf('</head>');
console.log('--- Head Content ---');
console.log(html.slice(headStart + 6, headEnd));
