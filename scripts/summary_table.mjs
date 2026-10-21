import fs from 'fs';

const files = fs.readdirSync('analysis/compare').filter(f => f.endsWith('.json') && !f.includes('crop'));
console.log('| Screen / Panel | Compared Pixels | Changed Pixels | Diff Ratio | REA Status |');
console.log('| :--- | :--- | :--- | :--- | :--- |');

for (const f of files) {
  try {
    const data = JSON.parse(fs.readFileSync('analysis/compare/' + f, 'utf8'));
    const norm = data.normalized_result || data;
    if (norm.compared_pixels) {
      const name = f.replace('.json', '');
      const pct = (norm.changed_ratio * 100).toFixed(2) + '%';
      console.log(`| ${name} | ${norm.compared_pixels} | ${norm.changed_pixels} | ${pct} | ${norm.status} |`);
    }
  } catch (e) {}
}
