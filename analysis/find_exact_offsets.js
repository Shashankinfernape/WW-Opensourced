const fs = require('fs');
const css = fs.readFileSync('target_artifacts/whatsapp-web/css/production.css', 'utf8');

const queries = [
  '--outgoing-background:var(--WDS-systems-bubble-surface-outgoing)',
  '--incoming-background:var(--WDS-systems-bubble-surface-incoming)',
  '--WDS-systems-bubble-surface-incoming:#242626',
  '--WDS-systems-bubble-surface-outgoing:#144D37',
  '--WDS-content-read:#53BDEB',
  '--WDS-systems-chat-background-wallpaper:#161717',
  '--WDS-systems-chat-foreground-wallpaper:rgba(255, 255, 255, .1)',
  '--WDS-systems-chat-surface-composer:#242626'
];

for (const q of queries) {
  let idx = 0;
  while ((idx = css.indexOf(q, idx)) !== -1) {
    const brace = css.lastIndexOf('{', idx);
    const prevBrace = css.lastIndexOf('}', brace);
    const selector = css.substring(prevBrace + 1, brace).trim();
    console.log(`[OFFSET ${idx}] ${q}`);
    console.log(`  Selector: ${selector}`);
    idx += q.length;
  }
}
