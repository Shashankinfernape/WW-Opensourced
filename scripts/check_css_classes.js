const fs = require('fs');
const css = fs.readFileSync('target_artifacts/whatsapp-web/css/production.css', 'utf8');

const testClasses = [
  'x12xzxwr', 'x1n2onr6', 'x9f619', 'x78zum5', 'x6s0dn4', 'xq3y45c', 'xbyj736', 'x5yr21d', 'x1h3rtpe',
  'x1iw51ew', 'xde1mab', 'x889kno', 'x1a8lsjc', 'xh8yej3', 'x129bwdz', 'xdt5ytf', 'xjm9jq1', 'x178xt8z',
  'x13fuv20', 'xx42vgk', 'x18oe1m7', 'x1sy0etr', 'xstzfhl', 'x1c4vz4f', 'xs83m0k', 'xdl72j9', 'x1g77sc7',
  'xeuugli', 'x2lwn1j', 'xw36f2b', 'xn95wi4', 'xhslqc4', 'xl56j7k', 'x100vrsf', 'x1vqgdyp'
];

for (const cls of testClasses) {
  let idx = css.indexOf('.' + cls);
  if (idx !== -1) {
    let braceEnd = css.indexOf('}', idx);
    console.log(cls, ':', css.slice(idx, braceEnd + 1));
  } else {
    console.log(cls, ': NOT FOUND');
  }
}
