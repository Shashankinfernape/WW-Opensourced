import fs from 'fs';

const index = JSON.parse(fs.readFileSync('extracted-modules/module_index.json'));
const svgIcons = JSON.parse(fs.readFileSync('analysis/svg-icons.json'));

const targetIcons = [
  { name: 'ic-account-circle', mod: 'WDSIconIcAccountCircle.react' },
  { name: 'ic-key', mod: 'WDSIconIcKey.react' },
  { name: 'ic-notifications', mod: 'WDSIconIcNotifications.react' },
  { name: 'ic-keyboard', mod: 'WDSIconIcKeyboard.react' },
  { name: 'ic-help', mod: 'WDSIconIcHelp.react' },
  { name: 'ic-logout', mod: 'WDSIconIcLogout.react' }
];

for (const it of targetIcons) {
  const modMeta = index[it.mod];
  if (!modMeta) {
    console.log(`Module not found for ${it.name} (${it.mod})`);
    continue;
  }
  const content = fs.readFileSync('recovered-modules-combined/' + modMeta.bundle, 'utf8');
  const quoteTarget = `"${it.name}"`;
  const offset = content.indexOf(quoteTarget);
  
  // Extract path and viewBox from module code
  const modCode = fs.readFileSync('extracted-modules/' + modMeta.file, 'utf8');
  const pathMatch = modCode.match(/createWDSIcon\(\s*["'][^"']+["']\s*,\s*(\d+)\s*,\s*(\d+)\s*,\s*["']([^"']+)["']\s*,\s*\{[^}]*\}\s*,\s*["']([^"']+)["']\)/);
  if (pathMatch) {
    const viewBox = pathMatch[3];
    const path = pathMatch[4];
    svgIcons[it.name] = {
      viewBox,
      path,
      chunk: modMeta.bundle,
      offset,
      module: it.mod
    };
    console.log(`Added ${it.name} at ${modMeta.bundle}:${offset}`);
  } else {
    console.log(`Could not regex parse ${it.mod}`);
  }
}

fs.writeFileSync('analysis/svg-icons.json', JSON.stringify(svgIcons, null, 2), 'utf8');
