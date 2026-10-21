const fs = require('fs');
const css = fs.readFileSync('target_artifacts/whatsapp-web/css/production.css', 'utf8');

const targetOffset = 1428000;
const start = css.lastIndexOf('{', targetOffset);
const ruleStart = css.lastIndexOf('}', start);
const end = css.indexOf('}', targetOffset);

console.log('Rule selector:', css.substring(ruleStart + 1, start));
console.log('Rule content sample:', css.substring(start, start + 300));
