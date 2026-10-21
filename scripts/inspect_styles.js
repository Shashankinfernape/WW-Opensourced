const fs = require('fs');
const html = fs.readFileSync('captures/live-dom-rendered.html', 'utf8');

const headStart = html.indexOf('<head>');
const headEnd = html.indexOf('</head>');
const head = html.slice(headStart, headEnd);

const links = [...head.matchAll(/<link[^>]+>/g)].map(m => m[0]);
console.log('All links in head:');
links.forEach(l => {
  if (l.includes('stylesheet') || l.includes('.css')) console.log('  Stylesheet link:', l);
});

const styles = [...head.matchAll(/<style[^>]*>([\s\S]*?)<\/style>/g)];
console.log('Inline style tags in head:', styles.length);
styles.forEach((s, i) => {
  console.log(`Style ${i + 1} length:`, s[1].length, s[1].slice(0, 100));
});
