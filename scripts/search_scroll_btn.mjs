import fs from 'fs';

const files = fs.readdirSync('recovered-modules-combined');
for (const file of files) {
  const content = fs.readFileSync('recovered-modules-combined/' + file, 'utf8');
  const m1 = content.match(/data-testid=["'][^"']*scroll[^"']*["']/gi);
  const m2 = content.match(/aria-label=["'][^"']*scroll[^"']*["']/gi);
  const all = [...(m1 || []), ...(m2 || [])];
  if (all.length) {
    console.log(file, [...new Set(all)]);
  }
}
