import fs from 'fs';
import { traceApplicationFeatureEvidenceValidated } from '/root/whatsapp-rea-toolchain/rea-src/dist/application/javascript/JavaScriptApplicationWorkflowService.js';

const appEvidencePath = '/mnt/c/Users/user/Desktop/El projecto/WW/analysis/whatsapp-app-evidence.json';
console.log('Loading application evidence...');
const appEvidence = JSON.parse(fs.readFileSync(appEvidencePath, 'utf8'));

const seed = { kind: 'string', value: 'WAWebIntroPanelStartCallEmptyState.react' };
console.log('Tracing seed:', seed.value);
const traceResult = traceApplicationFeatureEvidenceValidated({
  application: appEvidence,
  native_observations: [],
  seed,
  direction: 'both'
});

if (traceResult.ok) {
  const trace = traceResult.value;
  const outPath = '/mnt/c/Users/user/Desktop/El projecto/WW/analysis/traces/trace_intro_panel.json';
  fs.writeFileSync(outPath, JSON.stringify(trace, null, 2));
  console.log(`Wrote trace to: ${outPath}, trace_id: ${trace.normalized_result.trace_id}, steps: ${trace.normalized_result.steps.length}`);
} else {
  console.error('Trace failed:', traceResult.error);
}
