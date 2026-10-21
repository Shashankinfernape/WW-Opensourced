import fs from 'fs';
import { inspectAnalysisViewValidated } from '/root/whatsapp-rea-toolchain/rea-src/dist/application/analysisView/AnalysisViewService.js';

const appEvidencePath = '/mnt/c/Users/user/Desktop/El projecto/WW/analysis/whatsapp-app-evidence.json';
const appEvidence = JSON.parse(fs.readFileSync(appEvidencePath, 'utf8'));

const viewResult = inspectAnalysisViewValidated({
  application: appEvidence,
  native_observations: [],
  selector: {
    kind: 'item',
    node_id: 'jag_node_75dda4f908461c3391b41080ef440ed6dcf21ded18b2fcf2aaa63ef57f9a3e2d'
  }
});

console.log('View result ok:', viewResult.ok);
if (viewResult.ok) {
  const norm = viewResult.value.normalized_result;
  console.log('View kind:', norm.view_kind);
  console.log('Item keys:', Object.keys(norm.item || {}));
  fs.writeFileSync('/mnt/c/Users/user/Desktop/El projecto/WW/analysis/views/view_navrail_chunk10.json', JSON.stringify(viewResult.value, null, 2));
}
