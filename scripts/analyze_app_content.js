const fs = require('fs');
const content = fs.readFileSync('captures/live-app-content.html', 'utf8');

console.log('Total length:', content.length);

// Count tags
const tags = {};
const re = /<([a-zA-Z0-9]+)/g;
let m;
while ((m = re.exec(content)) !== null) {
  tags[m[1]] = (tags[m[1]] || 0) + 1;
}
console.log('Tag counts:', tags);

// Check SVGs
const svgs = [];
const svgRe = /<svg[\s\S]*?<\/svg>/g;
while ((m = svgRe.exec(content)) !== null) {
  svgs.push(m[0]);
}
console.log('SVG count in app content:', svgs.length);
svgs.forEach((s, i) => {
  const titleM = s.match(/<title>([^<]+)<\/title>/);
  console.log(`SVG ${i + 1}:`, titleM ? titleM[1] : '(no title)', s.slice(0, 80) + '...');
});
