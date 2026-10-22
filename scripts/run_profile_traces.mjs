import fs from 'fs';
import path from 'path';

async function main() {
  const { traceApplicationFeatureEvidenceValidated } = await import('/root/whatsapp-rea-toolchain/rea-src/dist/application/javascript/JavaScriptApplicationWorkflowService.js');
  const { traceJavaScriptSemanticsEvidenceValidated } = await import('/root/whatsapp-rea-toolchain/rea-src/dist/application/javascript/JavaScriptSemanticTraceService.js');

  const appEvidencePath = '/mnt/c/Users/user/Desktop/El projecto/WW/analysis/whatsapp-app-evidence.json';
  console.log('Loading application evidence...');
  const appEvidence = JSON.parse(fs.readFileSync(appEvidencePath, 'utf8'));

  const featureSeeds = [
    { kind: 'string', value: 'WAWebProfileImage.react', match: 'contains' },
    { kind: 'string', value: 'BaseProfilePhoto.react', match: 'contains' },
    { kind: 'string', value: 'ic-add-a-photo', match: 'contains' },
    { kind: 'string', value: 'ic-alternate-email', match: 'contains' }
  ];

  const semanticSeeds = [
    { kind: 'literal', value: 'WAWebProfileImage.react' },
    { kind: 'literal', value: 'BaseProfilePhoto.react' }
  ];

  const results = {
    featureTraces: [],
    semanticTraces: []
  };

  for (const seed of featureSeeds) {
    console.log('Tracing feature seed:', seed.value);
    const traceResult = traceApplicationFeatureEvidenceValidated({
      application: appEvidence,
      native_observations: [],
      seed,
      direction: 'both'
    });
    if (traceResult.ok) {
      const trace = traceResult.value;
      const outPath = `/mnt/c/Users/user/Desktop/El projecto/WW/analysis/traces/trace_${seed.value}.json`;
      fs.writeFileSync(outPath, JSON.stringify(trace, null, 2));
      console.log(`Wrote trace to: ${outPath}, Evidence ID: ${trace.evidence_id}`);
      results.featureTraces.push({
        seed: seed.value,
        match: 'contains',
        direction: 'both',
        evidence_id: trace.evidence_id
      });
    } else {
      console.error('Failed feature trace for:', seed.value, traceResult.error);
    }
  }

  for (const seed of semanticSeeds) {
    for (const dir of ['callers', 'forward-influence']) {
      console.log(`Tracing semantics seed: ${seed.value} (${dir})`);
      const semResult = traceJavaScriptSemanticsEvidenceValidated({
        application: appEvidence,
        query: {
          seed,
          direction: dir,
          include_ambiguous_dynamic_edges: false,
          expected: null
        }
      });
      if (semResult.ok) {
        const trace = semResult.value;
        const outPath = `/mnt/c/Users/user/Desktop/El projecto/WW/analysis/traces/semantic_${seed.value}_${dir}.json`;
        fs.writeFileSync(outPath, JSON.stringify(trace, null, 2));
        console.log(`Wrote semantic trace to: ${outPath}, Evidence ID: ${trace.evidence_id}`);
        results.semanticTraces.push({
          seed: seed.value,
          direction: dir,
          evidence_id: trace.evidence_id
        });
      } else {
        console.error('Failed semantic trace for:', seed.value, dir, semResult.error);
      }
    }
  }

  fs.writeFileSync('/mnt/c/Users/user/Desktop/El projecto/WW/analysis/panel_2_profile_traces.json', JSON.stringify(results, null, 2));
  console.log('All profile traces completed successfully.');
}

main().catch(console.error);
