const fs = require('fs');

const css = fs.readFileSync('target_artifacts/whatsapp-web/css/production.css', 'utf8');

function findOccurrences(token) {
  let idx = 0;
  const results = [];
  while ((idx = css.indexOf(token, idx)) !== -1) {
    const start = Math.max(0, idx - 80);
    const end = Math.min(css.length, idx + token.length + 120);
    results.push({
      offset: idx,
      snippet: css.substring(start, end).replace(/\n/g, ' ')
    });
    idx += token.length;
  }
  return results;
}

console.log('=== --incoming-background ===');
console.log(findOccurrences('--incoming-background'));

console.log('=== --outgoing-background ===');
console.log(findOccurrences('--outgoing-background'));

console.log('=== --WDS-systems-bubble-surface-incoming ===');
console.log(findOccurrences('--WDS-systems-bubble-surface-incoming'));

console.log('=== --WDS-systems-bubble-surface-outgoing ===');
console.log(findOccurrences('--WDS-systems-bubble-surface-outgoing'));
