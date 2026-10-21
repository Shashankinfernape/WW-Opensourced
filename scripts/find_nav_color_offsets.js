const fs = require('fs');

const cssPath = 'target_artifacts/whatsapp-web/css/production.css';
const css = fs.readFileSync(cssPath, 'utf8');

const targetTokens = [
  '--WDS-surface-emphasized',
  '--WDS-lines-divider',
  '--WDS-components-active-list-row',
  '--WDS-content-deemphasized',
  '--WDS-content-default'
];

const results = [];

for (const token of targetTokens) {
  let idx = 0;
  while ((idx = css.indexOf(token + ':', idx)) !== -1) {
    const end = css.indexOf(';', idx);
    const decl = css.slice(idx, end + 1);
    
    // Find selector context
    const ruleStart = css.lastIndexOf('{', idx);
    const prevBrace = css.lastIndexOf('}', ruleStart);
    const selector = css.slice(prevBrace !== -1 ? prevBrace + 1 : 0, ruleStart).trim();
    
    // Find enclosing @media if any
    const mediaIdx = css.lastIndexOf('@media', idx);
    let media = null;
    if (mediaIdx !== -1 && mediaIdx > prevBrace) {
      const mediaOpen = css.indexOf('{', mediaIdx);
      media = css.slice(mediaIdx, mediaOpen).trim();
    }
    
    results.push({
      token,
      byteOffset: idx,
      decl,
      selector,
      media
    });
    idx += token.length + 1;
  }
}

fs.writeFileSync('analysis/nav_color_offsets.json', JSON.stringify(results, null, 2), 'utf8');
console.log('Found', results.length, 'color variable declarations.');
for (const r of results) {
  console.log(`\nToken: ${r.token}`);
  console.log(`Byte offset: ${r.byteOffset}`);
  console.log(`Declaration: ${r.decl}`);
  console.log(`Selector: ${r.selector}`);
  if (r.media) console.log(`Media: ${r.media}`);
}
