import fs from 'fs';
const data = JSON.parse(fs.readFileSync('analysis/live_profile_exact_tree.json', 'utf8'));

function findSvgs(node, acc = []) {
  if (node.svg && node.svg.paths?.length > 0) {
    const titleNode = node.children?.find(c => c.tag === 'title');
    acc.push({
      title: titleNode ? titleNode.text : undefined,
      viewBox: node.svg.viewBox,
      paths: node.svg.paths
    });
  }
  if (node.children) {
    for (const c of node.children) findSvgs(c, acc);
  }
  return acc;
}

const svgs = findSvgs(data.tree);
console.log('Found SVGs:', svgs.length);
fs.writeFileSync('analysis/profile_drawer_svgs.json', JSON.stringify(svgs, null, 2));
console.log(svgs.map(s => ({ title: s.title, viewBox: s.viewBox, path: s.paths[0]?.d?.slice(0, 30) })));
