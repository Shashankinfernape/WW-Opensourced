import fs from 'fs';
import { execSync } from 'child_process';
import path from 'path';

const outDir = path.resolve('analysis/scenarios_16');
if (!fs.existsSync(outDir)) fs.mkdirSync(outDir, { recursive: true });

const liveArtifactPath = path.resolve('analysis/live-artifact.json');
if (!fs.existsSync(liveArtifactPath)) {
  console.error('live-artifact.json missing! Generating from live-screenshot.json...');
  const live = JSON.parse(fs.readFileSync('analysis/live-screenshot.json', 'utf8'));
  fs.writeFileSync(liveArtifactPath, JSON.stringify(live.normalized_result.artifact), 'utf8');
}

const panels = [
  { name: 'chatlist', query: '', desc: 'Chat list panel with virtualized preview rows' },
  { name: 'profile_drawer', query: '?drawer=profile', desc: 'Profile drawer with photo & pushname section' },
  { name: 'newchat_drawer', query: '?drawer=newchat', desc: 'New chat drawer with contact list' },
  { name: 'settings_drawer', query: '?drawer=settings', desc: 'Settings drawer with account & notification options' },
  { name: 'archived_drawer', query: '?drawer=archived', desc: 'Archived chats drawer' },
  { name: 'starred_drawer', query: '?drawer=starred', desc: 'Starred messages drawer' },
  { name: 'calls_panel', query: '?tab=calls', desc: 'Calls panel with call log entries' },
  { name: 'channels_panel', query: '?tab=channels', desc: 'Channels panel with newsletter list' },
  { name: 'communities_drawer', query: '?tab=communities', desc: 'Communities panel' },
  { name: 'status_drawer', query: '?tab=status', desc: 'Status drawer with story updates' },
  { name: 'active_chat', query: '?chat=chat_1', desc: 'Active conversation with message bubbles' },
  { name: 'active_chat_header', query: '?chat=chat_1', desc: 'Conversation header bar' },
  { name: 'composer', query: '?chat=chat_1', desc: 'Message compose box and media attachments' },
  { name: 'contact_info_drawer', query: '?chat=chat_1&right=contact_info', desc: 'Contact info drawer' },
  { name: 'chat_search_drawer', query: '?chat=chat_1&right=chat_search', desc: 'In-chat search drawer' },
  { name: 'intro_panel', query: '?chat=none', desc: 'Default introductory empty state panel' }
];

async function run() {
  console.log('Discovering browser targets on port 9223...');
  const res = await fetch('http://127.0.0.1:9223/json');
  const targets = await res.json();
  const reconTarget = targets.find(t => t.url && t.url.includes('5173'));
  if (!reconTarget) throw new Error('Recon target on 5173 not found!');
  const targetId = reconTarget.id;
  console.log('Recon target ID:', targetId);

  const results = [];

  for (let i = 0; i < panels.length; i++) {
    const p = panels[i];
    console.log(`\n========================================`);
    console.log(`[${i + 1}/16] Auditing: ${p.name} (${p.desc})`);
    console.log(`========================================`);

    // 1. Activate target
    await fetch(`http://127.0.0.1:9223/json/activate/${targetId}`);
    await new Promise(r => setTimeout(r, 300));

    // 2. Scenario request
    const scenario = {
      browser: {
        mode: 'connect',
        cdp_endpoint: 'http://127.0.0.1:9223',
        target_id: targetId
      },
      start_url: {
        url: `http://127.0.0.1:5173/${p.query}`
      },
      actions: [
        {
          step_id: `settle_${p.name}`,
          action: 'wait_for_timeout',
          duration_ms: 400
        }
      ],
      capture: {
        after_each_step: ['screenshot', 'dom'],
        at_end: ['screenshot', 'dom', 'url']
      }
    };

    const scReqPath = path.join(outDir, `req_${p.name}.json`);
    fs.writeFileSync(scReqPath, JSON.stringify(scenario), 'utf8');

    console.log(`Capturing scenario for ${p.name}...`);
    let scParsed;
    try {
      const scOut = execSync(`rea capture-browser-scenario "${scReqPath}" --format json`, {
        encoding: 'utf8',
        maxBuffer: 50 * 1024 * 1024
      });
      scParsed = JSON.parse(scOut);
      fs.writeFileSync(path.join(outDir, `scenario_${p.name}.json`), scOut, 'utf8');
      console.log(`Scenario Evidence ID: ${scParsed.evidence_id}`);
    } catch (err) {
      console.error(`Scenario capture failed for ${p.name}:`, err.message);
      continue;
    }

    // 3. Extract screenshot artifact
    const lastStep = scParsed.normalized_result.steps[scParsed.normalized_result.steps.length - 1];
    const screenshotArtifact = lastStep.artifacts.screenshot.value;
    const artPath = path.join(outDir, `artifact_${p.name}.json`);
    fs.writeFileSync(artPath, JSON.stringify(screenshotArtifact), 'utf8');

    // 4. Compare with live artifact
    console.log(`Running rea compare-web-screenshots for ${p.name}...`);
    let diffParsed;
    try {
      const diffOut = execSync(`rea compare-web-screenshots "${liveArtifactPath}" "${artPath}" --format json`, {
        encoding: 'utf8',
        maxBuffer: 50 * 1024 * 1024
      });
      diffParsed = JSON.parse(diffOut);
      fs.writeFileSync(path.join(outDir, `diff_${p.name}.json`), diffOut, 'utf8');
      console.log(`Diff Evidence ID: ${diffParsed.evidence_id}`);
      console.log(`Compared: ${diffParsed.normalized_result.compared_pixels}, Changed: ${diffParsed.normalized_result.changed_pixels} (${(diffParsed.normalized_result.changed_ratio * 100).toFixed(2)}%)`);
    } catch (err) {
      console.error(`Diff failed for ${p.name}:`, err.message);
      continue;
    }

    results.push({
      panel: p.name,
      description: p.desc,
      url: `http://127.0.0.1:5173/${p.query}`,
      scenario_evidence_id: scParsed.evidence_id,
      diff_evidence_id: diffParsed.evidence_id,
      compared_pixels: diffParsed.normalized_result.compared_pixels,
      changed_pixels: diffParsed.normalized_result.changed_pixels,
      changed_ratio: diffParsed.normalized_result.changed_ratio,
      accuracy: ((1 - diffParsed.normalized_result.changed_ratio) * 100).toFixed(2) + '%'
    });
  }

  fs.writeFileSync('analysis/audit_16_panels_ledger.json', JSON.stringify(results, null, 2), 'utf8');
  console.log(`\n========================================`);
  console.log(`Successfully completed REA audit of all ${results.length}/16 panels!`);
  console.log(`Summary written to analysis/audit_16_panels_ledger.json`);
  console.log(`========================================`);
}

run().catch(console.error);
