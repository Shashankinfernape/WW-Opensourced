const fs = require('fs');

const css = fs.readFileSync('target_artifacts/whatsapp-web/css/production.css', 'utf8');

// Find all selectors with .dark
const regex = /(?:^|\})([^{}]*\.dark[^{}]*)\{/g;
let match;
console.log('Selectors containing .dark:');
let count = 0;
while ((match = regex.exec(css)) !== null && count < 20) {
  console.log(`- ${match[1].trim()}`);
  count++;
}

// Find how dark theme tokens are activated
console.log('\nChecking dark theme activation classes:');
for (const cls of ['dark', 'dark-theme', 'xfmqtgv', 'x1tkf7af', 'x1umy8rd', 'x1w9d4se']) {
  let idx = css.indexOf(`.${cls}`);
  console.log(`Class .${cls}: first offset ${idx}`);
}
