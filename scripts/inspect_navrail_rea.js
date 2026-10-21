const fs = require('fs');
const { inspectAnalysisViewValidated } = require('/root/whatsapp-rea-toolchain/rea-src/dist/application/analysisView/AnalysisViewService.js');

const appEvidence = JSON.parse(fs.readFileSync("analysis/whatsapp-app-evidence.json", "utf8"));
const result = inspectAnalysisViewValidated({
  source: { kind: "inline", evidence: appEvidence },
  view: {
    kind: "item",
    collection: "modules",
    selector: {
      node_id: "jag_node_75dda4f908461c3391b41080ef440ed6dcf21ded18b2fcf2aaa63ef57f9a3e2d"
    }
  }
});

console.log("Result keys on value:", Object.keys(result.value));
fs.writeFileSync("analysis/traces/inspect_navrail_node.json", JSON.stringify(result.value, null, 2), "utf8");
console.log("Saved analysis/traces/inspect_navrail_node.json successfully");
