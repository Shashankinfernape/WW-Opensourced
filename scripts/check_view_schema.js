const fs = require('fs');
const code = fs.readFileSync('/root/whatsapp-rea-toolchain/rea-src/dist/application/analysisView/AnalysisViewService.js', 'utf8');
const lines = code.split('\n');
for (let i = 0; i < lines.length; i++) {
  if (lines[i].includes('Section and symbol')) {
    console.log(lines.slice(Math.max(0, i - 15), i + 20).join('\n'));
  }
}
