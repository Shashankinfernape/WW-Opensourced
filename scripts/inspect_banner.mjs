import fs from 'fs';

const html = fs.readFileSync('analysis/live-side-dom.html', 'utf8');

const bannerIdx = html.indexOf('Message and call notifications are off');
if (bannerIdx !== -1) {
  console.log('Banner HTML snippet:');
  console.log(html.slice(bannerIdx - 500, bannerIdx + 600));
}
