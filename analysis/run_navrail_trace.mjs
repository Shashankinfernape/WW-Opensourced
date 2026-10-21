import fs from 'fs';
import path from 'path';

import { traceApplicationFeatureEvidenceValidated } from '/root/whatsapp-rea-toolchain/rea-src/dist/application/javascript/JavaScriptApplicationWorkflowService.js';

const appEvidencePath = '/mnt/c/Users/user/Desktop/El projecto/WW/analysis/whatsapp-app-evidence.json';
console.log('Loading application evidence...');
const appEvidence = JSON.parse(fs.readFileSync(appEvidencePath, 'utf8'));

const seeds = [
  { kind: 'string', value: 'WAWebNavigationBar.react' },
  { kind: 'string', value: 'navbar-primary-section' },
  { kind: 'string', value: 'navbar-footer-section' },
  { kind: 'string', value: 'chatlist-header' }
];

for (const seed of seeds) {
  console.log('Tracing seed:', seed.value);
  const traceResult = traceApplicationFeatureEvidenceValidated({
    application: appEvidence,
    native_observations: [],
    seed,
    direction: 'both'
  });
  if (!traceResult.ok) {
    console.error('Trace failed for', seed.value, traceResult.error);
    continue;
  }
  const trace = traceResult.value;
  const outPath = `/mnt/c/Users/user/Desktop/El projecto/WW/analysis/traces/trace_${seed.value}.json`;
  fs.writeFileSync(outPath, JSON.stringify(trace, null, 2));
  console.log(`Wrote trace to: ${outPath}, trace_id: ${trace.normalized_result.trace_id}, steps: ${trace.normalized_result.steps.length}`);
}
