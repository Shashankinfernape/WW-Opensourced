import fs from 'fs';

const svgIcons = JSON.parse(fs.readFileSync('analysis/svg-icons.json', 'utf8'));

svgIcons['ic-edit'] = {
  viewBox: '0 0 24 24',
  path: 'M5 19h1.4l9.8-9.78-1.42-1.42L5 17.6V19Zm-1 2a.97.97 0 0 1-.71-.29A.97.97 0 0 1 3 20v-2.43a1.98 1.98 0 0 1 .58-1.4L16.2 3.57a2.07 2.07 0 0 1 2.19-.42c.24.1.46.25.66.45L20.43 5c.2.2.35.42.45.66.1.24.1.49.02.73a2.07 2.07 0 0 1-.45.8L7.83 20.42c-.37.38-.84.58-1.41.58H4Zm14.02-14.6-.72-.7.7-.72.72.72-.7.7Z',
  chunk: 'chunk_09_source-9-122c3e652dc14fd507309af34868b6f__bundle.js',
  offset: 3412451,
  module: 'WDSIconIcEdit.react'
};

fs.writeFileSync('analysis/svg-icons.json', JSON.stringify(svgIcons, null, 2), 'utf8');
console.log('Added ic-edit to svg-icons.json');
