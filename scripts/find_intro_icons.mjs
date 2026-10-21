import fs from 'fs';

const dir = 'recovered-modules-combined';
const files = fs.readdirSync(dir);
const icons = ['Description', 'PersonAdd', 'Mail', 'VideoCall', 'MetaAiColor'];

for (const file of files) {
  const content = fs.readFileSync(dir + '/' + file, 'utf8');
  for (const ic of icons) {
    let pos = 0;
    while ((pos = content.indexOf(ic, pos)) !== -1) {
      const declStart = content.lastIndexOf('__d("', pos);
      if (declStart !== -1) {
        const declEnd = content.indexOf('"', declStart + 5);
        const modName = content.slice(declStart + 5, declEnd);
        if (modName.includes(ic) || modName.includes('WDSIcon') || modName.includes('EmptyState') || modName.includes('IntroPanel')) {
          console.log(`Found ${ic} in ${file} at ${declStart}: ${modName}`);
        }
      }
      pos += ic.length;
    }
  }
}
