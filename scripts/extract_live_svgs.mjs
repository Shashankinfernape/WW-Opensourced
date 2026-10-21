import fs from 'fs';
import path from 'path';

const files = fs.readdirSync('analysis').filter(f => f.startsWith('live-') && f.endsWith('.html'));
const iconsPath = path.resolve('reconstruction/src/icons/svg-icons.json');
const iconsData = JSON.parse(fs.readFileSync(iconsPath, 'utf8'));

let added = 0;
let updated = 0;

for (const file of files) {
  const html = fs.readFileSync(path.join('analysis', file), 'utf8');
  const svgRegex = /<svg([^>]*)>(.*?)<\/svg>/gs;
  let match;
  while ((match = svgRegex.exec(html)) !== null) {
    const fullSvg = match[0];
    const attrs = match[1];
    const inner = match[2];
    const titleMatch = inner.match(/<title>([^<]+)<\/title>/);
    if (!titleMatch) continue;
    const title = titleMatch[1].trim();

    const viewBoxMatch = attrs.match(/viewBox="([^"]+)"/);
    const widthMatch = attrs.match(/width="([^"]+)"/);
    const heightMatch = attrs.match(/height="([^"]+)"/);
    
    // Find all paths
    const pathMatches = [...inner.matchAll(/<path([^>]*\bd="([^"]+)"[^>]*)>/g)];
    if (pathMatches.length === 0) continue;

    let pathDef = {};
    if (pathMatches.length === 1) {
      pathDef = {
        path: pathMatches[0][2]
      };
    } else {
      pathDef = {
        paths: pathMatches.map(p => {
          const d = p[2];
          const fillMatch = p[1].match(/fill="([^"]+)"/);
          return fillMatch ? { d, fill: fillMatch[1] } : d;
        })
      };
    }

    if (!iconsData[title]) {
      iconsData[title] = {
        viewBox: viewBoxMatch ? viewBoxMatch[1] : '0 0 24 24',
        width: widthMatch ? parseInt(widthMatch[1], 10) : 24,
        height: heightMatch ? parseInt(heightMatch[1], 10) : 24,
        ...pathDef,
        source: 'analysis/' + file
      };
      console.log('Added icon:', title, 'from', file);
      added++;
    } else if (pathMatches.length > 1 && !iconsData[title].paths) {
      // Upgrade existing icon to multi-path
      iconsData[title].paths = pathDef.paths;
      delete iconsData[title].path;
      console.log('Upgraded icon to multi-path:', title);
      updated++;
    }
  }
}

console.log(`Summary: added ${added}, updated ${updated}`);
fs.writeFileSync(iconsPath, JSON.stringify(iconsData, null, 2), 'utf8');
console.log('Saved svg-icons.json successfully.');
