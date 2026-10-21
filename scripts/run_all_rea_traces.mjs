import fs from 'fs';
import { execSync } from 'child_process';
import path from 'path';

const tracesDir = path.resolve('analysis/traces');
if (!fs.existsSync(tracesDir)) {
  fs.mkdirSync(tracesDir, { recursive: true });
}

console.log('Loading whatsapp-app-evidence.json (91MB)...');
const staticEvidence = JSON.parse(fs.readFileSync('analysis/whatsapp-app-evidence.json', 'utf8'));

const panels = [
  { name: 'settings_drawer', seed: 'ic-notifications-off' },
  { name: 'channels_panel', seed: 'wds-ic-channels' },
  { name: 'channels_grid', seed: 'ic-grid' },
  { name: 'newchat_drawer', seed: 'ic-dialpad' },
  { name: 'newchat_message_yourself', seed: 'message-yourself-row' },
  { name: 'profile_drawer', seed: 'ic-alternate-email' },
  { name: 'chat_header', seed: 'conversation-header' },
  { name: 'composer', seed: 'compose-box' },
  { name: 'calls_panel', seed: 'calls-drawer' },
  { name: 'communities_drawer', seed: 'community-drawer' },
  { name: 'archived_drawer', seed: 'archived-drawer' },
  { name: 'status_drawer', seed: 'status-drawer' }
];

const results = [];

for (const panel of panels) {
  console.log(`\n========================================`);
  console.log(`[Panel: ${panel.name}] Seed: "${panel.seed}"`);
  console.log(`========================================`);

  // 1. Feature Trace (rea trace-application-feature)
  const featReq = {
    application: staticEvidence,
    native_observations: [],
    seed: {
      kind: 'string',
      value: panel.seed,
      match: 'contains',
      case_sensitive: false
    },
    direction: 'both'
  };

  const featInputPath = path.join(tracesDir, `input_feat_${panel.name}.json`);
  const featOutputPath = path.join(tracesDir, `trace_${panel.name}.json`);
  fs.writeFileSync(featInputPath, JSON.stringify(featReq), 'utf8');

  let featEvidenceId = null;
  try {
    const featOut = execSync(`rea trace-application-feature "${featInputPath}" --format json`, {
      encoding: 'utf8',
      maxBuffer: 100 * 1024 * 1024
    });
    fs.writeFileSync(featOutputPath, featOut, 'utf8');
    const parsed = JSON.parse(featOut);
    featEvidenceId = parsed.evidence_id;
    console.log(`[Feature Trace] Success! Evidence ID: ${featEvidenceId}`);
  } catch (err) {
    console.error(`[Feature Trace] Error:`, err.stdout?.slice(0, 300) || err.message);
  } finally {
    if (fs.existsSync(featInputPath)) fs.unlinkSync(featInputPath);
  }

  // 2. Semantic Trace (rea trace-javascript-semantics)
  const semReq = {
    application: staticEvidence,
    query: {
      seed: {
        kind: 'literal',
        value: panel.seed
      },
      direction: 'callers'
    }
  };

  const semInputPath = path.join(tracesDir, `input_sem_${panel.name}.json`);
  const semOutputPath = path.join(tracesDir, `semantic_${panel.name}.json`);
  fs.writeFileSync(semInputPath, JSON.stringify(semReq), 'utf8');

  let semEvidenceId = null;
  try {
    const semOut = execSync(`rea trace-javascript-semantics "${semInputPath}" --format json`, {
      encoding: 'utf8',
      maxBuffer: 100 * 1024 * 1024
    });
    fs.writeFileSync(semOutputPath, semOut, 'utf8');
    const parsed = JSON.parse(semOut);
    semEvidenceId = parsed.evidence_id;
    console.log(`[Semantic Trace] Success! Evidence ID: ${semEvidenceId}`);
  } catch (err) {
    console.error(`[Semantic Trace] Error:`, err.stdout?.slice(0, 300) || err.message);
  } finally {
    if (fs.existsSync(semInputPath)) fs.unlinkSync(semInputPath);
  }

  results.push({
    panel: panel.name,
    seed: panel.seed,
    featureTraceEvidenceId: featEvidenceId,
    semanticTraceEvidenceId: semEvidenceId
  });
}

console.log('\n========================================');
console.log('ALL 12 REA TRACES COMPLETED:');
console.log('========================================');
console.table(results);
fs.writeFileSync(path.join(tracesDir, 'traces_summary.json'), JSON.stringify(results, null, 2), 'utf8');
