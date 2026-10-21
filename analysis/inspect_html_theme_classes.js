const fs = require('fs');
const css = fs.readFileSync('target_artifacts/whatsapp-web/css/production.css', 'utf8');

function inspectClass(className) {
  let idx = 0;
  while ((idx = css.indexOf(className, idx)) !== -1) {
    const brace = css.indexOf('{', idx);
    const prevBrace = css.lastIndexOf('}', idx);
    const closeBrace = css.indexOf('}', brace);
    console.log('=== MATCH for', className, 'at offset', idx, '===');
    console.log('Selector:', css.substring(prevBrace + 1, brace).trim());
    console.log('Body:', css.substring(brace + 1, closeBrace));
    idx = closeBrace + 1;
  }
}

inspectClass('.xfmqtgv');
inspectClass('.xoeyzqq');
