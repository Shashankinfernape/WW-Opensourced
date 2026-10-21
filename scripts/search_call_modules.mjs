import fs from 'fs';
import path from 'path';

const dir = 'extracted-modules';
const files = fs.readdirSync(dir).filter(f => f.endsWith('.js'));
for (const file of files) {
  const content = fs.readFileSync(path.join(dir, file), 'utf8');
  if (content.includes('19.95 21c-2.08')) {
    console.log(file);
  }
}
