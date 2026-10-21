import fs from 'fs';
import { traceApplicationFeatureEvidenceValidated } from '/root/whatsapp-rea-toolchain/rea-src/dist/application/javascript/JavaScriptApplicationWorkflowService.js';

const appEvidencePath = '/mnt/c/Users/user/Desktop/El projecto/WW/analysis/whatsapp-app-evidence.json';
const appEvidence = JSON.parse(fs.readFileSync(appEvidencePath, 'utf8'));

const res = traceApplicationFeatureEvidenceValidated({
  application: appEvidence,
  native_observations: [],
  seed: { kind: 'node-id', value: 'jag_node_75dda4f908461c3391b41080ef440ed6dcf21ded18b2fcf2aaa63ef57f9a3e2d' },
  direction: 'both'
});

console.log('Result ok:', res.ok);
if (res.ok) {
  const norm = res.value.normalized_result;
  console.log('Trace ID:', norm.trace_id);
  console.log('Seed matches:', norm.seed_matches.length);
  console.log('Paths count:', norm.paths.length);
  if (norm.graph) {
    console.log('Graph nodes:', norm.graph.nodes.length, 'edges:', norm.graph.edges.length);
  }
  fs.writeFileSync('/mnt/c/Users/user/Desktop/El projecto/WW/analysis/traces/trace_navrail_node.json', JSON.stringify(res.value, null, 2));
}
