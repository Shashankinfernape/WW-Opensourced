import fs from 'fs';

const html = fs.readFileSync('analysis/live-intro-panel.html', 'utf8');
const idx = html.indexOf('data-testid="intro-panel-empty-state-action-tile-group"');
console.log(html.slice(idx, idx + 2500));
