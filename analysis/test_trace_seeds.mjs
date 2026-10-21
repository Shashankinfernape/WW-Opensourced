import fs from 'fs';
import { traceApplicationFeatureEvidenceValidated } from '/root/whatsapp-rea-toolchain/rea-src/dist/application/javascript/JavaScriptApplicationWorkflowService.js';

const appEvidencePath = '/mnt/c/Users/user/Desktop/El projecto/WW/analysis/whatsapp-app-evidence.json';
console.log('Loading application evidence...');
const appEvidence = JSON.parse(fs.readFileSync(appEvidencePath, 'utf8'));

const testSeeds = [
  { kind: 'string', value: 'chatlist-header' },
  { kind: 'string', value: 'navbar-primary-section' },
  { kind: 'string', value: 'navbar-footer-section' },
  { kind: 'string', value: 'navbar' },
  { kind: 'string', value: 'Chats' },
  { kind: 'string', value: 'Status' }
];

for (const seed of testSeeds) {
  const res = traceApplicationFeatureEvidenceValidated({
    application: appEvidence,
    native_observations: [],
    seed,
    direction: 'both'
  });
  if (res.ok) {
    const trace = res.value.normalized_result;
    console.log(`[SEED ${seed.kind}:${seed.value}] matches: ${trace.seed_matches.length}, paths: ${trace.paths.length}`);
    if (trace.seed_matches.length > 0) {
      console.log('   Sample match:', JSON.stringify(trace.seed_matches[0]));
      fs.writeFileSync(`/mnt/c/Users/user/Desktop/El projecto/WW/analysis/traces/trace_nav_${seed.value}.json`, JSON.stringify(res.value, null, 2));
    }
  } else {
    console.log(`[SEED ${seed.kind}:${seed.value}] FAILED:`, res.error.message);
  }
}
