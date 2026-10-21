import fs from 'fs';

const html = fs.readFileSync('analysis/live-conversation-view.html', 'utf8');

// Header
const headerStart = html.indexOf('<header');
const headerEnd = html.indexOf('</header>') + 9;
const header = html.slice(headerStart, headerEnd);
console.log('=== CONVERSATION HEADER ===');
console.log(header.slice(0, 500));

// Footer
const footerStart = html.indexOf('<footer');
const footerEnd = html.indexOf('</footer>') + 9;
const footer = html.slice(footerStart, footerEnd);
console.log('\n=== CONVERSATION FOOTER ===');
console.log(footer.slice(0, 500));

// Background wallpaper element
const bgIdx = html.indexOf('data-testid="conversation-panel-background"');
console.log('\n=== WALLPAPER BACKGROUND ===');
if (bgIdx !== -1) {
  console.log(html.slice(bgIdx - 50, bgIdx + 300));
} else {
  console.log('No data-testid="conversation-panel-background"');
  const dIdx = html.indexOf('doodle') !== -1 ? html.indexOf('doodle') : html.indexOf('wallpaper');
  console.log('Search for doodle/wallpaper:', dIdx !== -1 ? html.slice(dIdx - 100, dIdx + 100) : 'none');
}
