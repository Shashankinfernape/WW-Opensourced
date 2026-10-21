const fs = require('fs');
const css = fs.readFileSync('target_artifacts/whatsapp-web/css/production.css', 'utf8');

function findSelectors(prop) {
  let idx = 0;
  const list = [];
  while ((idx = css.indexOf(prop, idx)) !== -1) {
    // Find selector before this declaration
    const brace = css.lastIndexOf('{', idx);
    const prevBrace = css.lastIndexOf('}', brace);
    const selector = css.substring(prevBrace + 1, brace).trim();
    // Find value
    const semi = css.indexOf(';', idx);
    const decl = css.substring(idx, semi);
    list.push({ offset: idx, selector, decl });
    idx = semi + 1;
  }
  return list;
}

const inc = findSelectors('--WDS-systems-bubble-surface-incoming:');
console.log('Incoming definitions count:', inc.length);
// print sample with dark or default
for (const item of inc) {
  if (item.selector.includes('dark') || item.selector.includes(':root') || item.decl.includes('36, 38, 38') || item.decl.includes('#202c33') || item.decl.includes('#242626')) {
    console.log(item);
  }
}

const out = findSelectors('--WDS-systems-bubble-surface-outgoing:');
console.log('Outgoing definitions count:', out.length);
for (const item of out) {
  if (item.selector.includes('dark') || item.selector.includes(':root') || item.decl.includes('#005c4b') || item.decl.includes('#144d37') || item.decl.includes('20, 77, 55') || item.decl.includes('0, 92, 75')) {
    console.log(item);
  }
}
