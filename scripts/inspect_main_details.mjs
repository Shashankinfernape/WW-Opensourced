import fs from 'fs';

const html = fs.readFileSync('analysis/live-main-dom.html', 'utf8');

const e2eIdx = html.indexOf('end-to-end encrypted');
if (e2eIdx !== -1) {
  console.log('--- E2E ENCRYPTION NOTICE HTML ---');
  console.log(html.slice(e2eIdx - 200, e2eIdx + 400));
}

const dateIdx = html.indexOf('TODAY');
if (dateIdx !== -1) {
  console.log('--- DATE PILL HTML ---');
  console.log(html.slice(dateIdx - 200, dateIdx + 400));
}
