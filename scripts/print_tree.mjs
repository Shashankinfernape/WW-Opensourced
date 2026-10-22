import fs from 'fs';
const data = JSON.parse(fs.readFileSync('analysis/live_profile_exact_tree.json', 'utf8'));
console.log('Drawer rect:', data.drawerRect);

function printOverview(node, indent = 0) {
  const pad = ' '.repeat(indent);
  const info = [
    node.tag,
    node.rect ? `[${node.rect.w}x${node.rect.h} @ (${node.rect.x},${node.rect.y})]` : '',
    node.ariaLabel ? `aria='${node.ariaLabel}'` : '',
    node.text ? `text='${node.text.slice(0, 30)}'` : '',
    node.svg ? `SVG(${node.svg.viewBox})` : ''
  ].filter(Boolean).join(' ');
  console.log(pad + info);
  if (node.children) {
    for (const c of node.children) printOverview(c, indent + 2);
  }
}

printOverview(data.tree);
