import fs from 'fs';
const data = JSON.parse(fs.readFileSync('analysis/live_profile_exact_tree.json', 'utf8'));

function findNodes(node, predicate, acc = []) {
  if (predicate(node)) acc.push(node);
  if (node.children) {
    for (const c of node.children) findNodes(c, predicate, acc);
  }
  return acc;
}

console.log('--- ALL LABELS AND TEXTS WITH STYLES ---');
const texts = findNodes(data.tree, n => n.text && n.text.length > 0);
for (const t of texts) {
  console.log(`[${t.tag}] "${t.text}"`, {
    rect: t.rect,
    color: t.styles.color,
    fontSize: t.styles.fontSize,
    fontWeight: t.styles.fontWeight,
    lineHeight: t.styles.lineHeight
  });
}

console.log('--- ALL SVGS ---');
const svgs = findNodes(data.tree, n => n.svg);
for (const s of svgs) {
  console.log(s.svg.paths.length, 'paths', s.rect);
}
