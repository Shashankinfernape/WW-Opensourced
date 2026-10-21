import fs from 'fs';
const s = fs.readFileSync('/root/whatsapp-rea-toolchain/rea-src/dist/domain/analysisView/analysisView.js', 'utf8');
const idx = s.indexOf('inspectAnalysisViewInputSchema');
console.log(s.substring(idx, idx + 1000));
