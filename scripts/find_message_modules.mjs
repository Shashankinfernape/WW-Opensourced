import fs from 'fs';

const files = fs.readdirSync('recovered-modules-combined');
for (const file of files) {
  const content = fs.readFileSync('recovered-modules-combined/' + file, 'utf8');
  const matches = content.match(/data-testid=["'][a-zA-Z0-9_-]+["']/g);
  if (matches) {
    const interesting = matches.filter(m => 
      m.includes('msg') || 
      m.includes('bubble') || 
      m.includes('quote') || 
      m.includes('reaction') || 
      m.includes('tail') || 
      m.includes('e2e') || 
      m.includes('audio') || 
      m.includes('voice') ||
      m.includes('scroll')
    );
    if (interesting.length) {
      console.log(file, [...new Set(interesting)]);
    }
  }
}
