import fs from 'fs';
import path from 'path';

const bundlesDir = 'recovered-modules-combined';
const outDir = 'extracted-modules';

if (!fs.existsSync(outDir)) {
  fs.mkdirSync(outDir, { recursive: true });
}

const bundleFiles = fs.readdirSync(bundlesDir).filter(f => f.endsWith('.js'));
console.log(`Found ${bundleFiles.length} bundles.`);

let totalModules = 0;
const index = {};

for (const bundleFile of bundleFiles) {
  const filePath = path.join(bundlesDir, bundleFile);
  const content = fs.readFileSync(filePath, 'utf8');
  
  // __d pattern: __d("moduleName", [deps], (function(...) { ... }), id)
  // or __d('moduleName', ...)
  const regex = /__d\(\s*["']([^"']+)["']\s*,\s*(\[[^\]]*\])?\s*,\s*(function|\()/g;
  let match;
  let matches = [];
  while ((match = regex.exec(content)) !== null) {
    matches.push({
      name: match[1],
      deps: match[2] || '[]',
      startIdx: match.index
    });
  }

  console.log(`${bundleFile}: found ${matches.length} modules`);

  for (let i = 0; i < matches.length; i++) {
    const cur = matches[i];
    const nextStart = (i + 1 < matches.length) ? matches[i + 1].startIdx : content.length;
    let modCode = content.slice(cur.startIdx, nextStart);
    
    // Clean trailing __d separator if any
    const lastParen = modCode.lastIndexOf(');');
    if (lastParen !== -1) {
      modCode = modCode.slice(0, lastParen + 2);
    }

    // Safe filename
    const safeName = cur.name.replace(/[\/\\:*?"<>|]/g, '_');
    const outPath = path.join(outDir, `${safeName}.js`);
    fs.writeFileSync(outPath, modCode, 'utf8');

    index[cur.name] = {
      bundle: bundleFile,
      file: `${safeName}.js`,
      deps: cur.deps
    };
    totalModules++;
  }
}

fs.writeFileSync(path.join(outDir, 'module_index.json'), JSON.stringify(index, null, 2), 'utf8');
console.log(`\nSuccessfully extracted ${totalModules} modules into ${outDir}/`);
