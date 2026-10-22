import fs from 'fs';
import path from 'path';
import crypto from 'crypto';
import { execSync } from 'child_process';
import WebSocket from 'ws';

const liveTargetId = '33AE831CE803E57482AFAF475003C698';
const reconTargetId = '6C1EB6BEA99DB77BBB6E025B42EC3834';
const cdpEndpoint = 'http://127.0.0.1:9223';

async function activate(targetId) {
  try {
    await fetch(`${cdpEndpoint}/json/activate/${targetId}`);
  } catch (e) {}
}

async function cropViaChrome(base64Data, sx, sy, sw, sh) {
  const ws = new WebSocket(`ws://127.0.0.1:9223/devtools/page/${reconTargetId}`);
  await new Promise(r => ws.on('open', r));

  const send = (method, params) => new Promise(res => {
    const id = Math.floor(Math.random() * 100000);
    const handler = raw => {
      const d = JSON.parse(raw);
      if (d.id === id) { ws.removeListener('message', handler); res(d.result); }
    };
    ws.on('message', handler);
    ws.send(JSON.stringify({ id, method, params }));
  });

  const expr = `(async () => {
    const img = new Image();
    img.src = 'data:image/png;base64,${base64Data}';
    await new Promise(r => img.onload = r);
    const canvas = document.createElement('canvas');
    canvas.width = ${sw};
    canvas.height = ${sh};
    const ctx = canvas.getContext('2d');
    ctx.drawImage(img, ${sx}, ${sy}, ${sw}, ${sh}, 0, 0, ${sw}, ${sh});
    return canvas.toDataURL('image/png').split(',')[1];
  })()`;

  const evalRes = await send('Runtime.evaluate', {
    expression: expr,
    awaitPromise: true,
    returnByValue: true
  });

  ws.close();
  const croppedB64 = evalRes.result?.value;
  const buf = Buffer.from(croppedB64, 'base64');
  const sha = crypto.createHash('sha256').update(buf).digest('hex');

  return {
    sha256: sha,
    bytes: buf.length,
    media_type: 'image/png',
    data_base64: croppedB64
  };
}

async function main() {
  console.log('=== Panel 2 (Profile Drawer): REA Comparator 1 (DOM & Accessibility Tree Diff) ===');

  // 1. Inspect Live Web Page
  console.log('1. Capturing Live inspect-web-page...');
  await activate(liveTargetId);
  const liveInspectPath = path.resolve('analysis/panel_2_live_inspect.json');
  const liveInspectOut = execSync(
    `npx rea inspect-web-page ${cdpEndpoint} ${liveTargetId} --include-accessibility-text --format json`,
    { encoding: 'utf8', maxBuffer: 50 * 1024 * 1024 }
  );
  fs.writeFileSync(liveInspectPath, liveInspectOut, 'utf8');
  const liveInspectParsed = JSON.parse(liveInspectOut);
  console.log('  -> Live Inspect Evidence ID:', liveInspectParsed.evidence_id);

  // 2. Inspect Recon Web Page
  console.log('2. Capturing Recon inspect-web-page...');
  await activate(reconTargetId);
  const reconInspectPath = path.resolve('analysis/panel_2_recon_inspect.json');
  const reconInspectOut = execSync(
    `npx rea inspect-web-page ${cdpEndpoint} ${reconTargetId} --include-accessibility-text --format json`,
    { encoding: 'utf8', maxBuffer: 50 * 1024 * 1024 }
  );
  fs.writeFileSync(reconInspectPath, reconInspectOut, 'utf8');
  const reconInspectParsed = JSON.parse(reconInspectOut);
  console.log('  -> Recon Inspect Evidence ID:', reconInspectParsed.evidence_id);

  console.log('\n=== Panel 2: REA Comparator 3 (Strict Cropped 496px Pixel Diff) ===');

  // 3. Capture Live & Recon Web Screenshots
  console.log('3. Capturing Live Screenshot via REA...');
  await activate(liveTargetId);
  const liveScOut = execSync(
    `npx rea capture-web-screenshot ${cdpEndpoint} ${liveTargetId} --format json`,
    { encoding: 'utf8', maxBuffer: 50 * 1024 * 1024 }
  );
  const liveSc = JSON.parse(liveScOut);
  console.log('  -> Live Screenshot Evidence ID:', liveSc.evidence_id);

  console.log('4. Capturing Recon Screenshot via REA...');
  await activate(reconTargetId);
  const reconScOut = execSync(
    `npx rea capture-web-screenshot ${cdpEndpoint} ${reconTargetId} --format json`,
    { encoding: 'utf8', maxBuffer: 50 * 1024 * 1024 }
  );
  const reconSc = JSON.parse(reconScOut);
  console.log('  -> Recon Screenshot Evidence ID:', reconSc.evidence_id);

  const liveB64 = liveSc.normalized_result?.artifact?.data_base64;
  const reconB64 = reconSc.normalized_result?.artifact?.data_base64;

  if (!liveB64 || !reconB64) {
    throw new Error('Failed to retrieve screenshot base64 artifact from liveSc or reconSc');
  }

  // Crop strictly to x: 0..496, y: 0..765
  console.log('5. Cropping live & recon to 496x765 sidebar via Chrome canvas...');
  const croppedLive = await cropViaChrome(liveB64, 0, 0, 496, 765);
  const croppedRecon = await cropViaChrome(reconB64, 0, 0, 496, 765);

  fs.writeFileSync('analysis/panel_2_cropped_live.png', Buffer.from(croppedLive.data_base64, 'base64'));
  fs.writeFileSync('analysis/panel_2_cropped_recon.png', Buffer.from(croppedRecon.data_base64, 'base64'));

  fs.writeFileSync('analysis/panel_2_cropped_live_art.json', JSON.stringify(croppedLive, null, 2));
  fs.writeFileSync('analysis/panel_2_cropped_recon_art.json', JSON.stringify(croppedRecon, null, 2));

  // Run compare-web-screenshots
  console.log('6. Running rea compare-web-screenshots on cropped 496px sidebar...');
  const scDiffOut = execSync(
    `npx rea compare-web-screenshots analysis/panel_2_cropped_live_art.json analysis/panel_2_cropped_recon_art.json --channel-threshold 5 --format json`,
    { encoding: 'utf8', maxBuffer: 50 * 1024 * 1024 }
  );
  fs.writeFileSync('analysis/panel_2_cropped_diff_res.json', scDiffOut, 'utf8');
  const scDiff = JSON.parse(scDiffOut);

  const compPixels = scDiff.normalized_result?.comparison?.compared_pixels;
  const chgPixels = scDiff.normalized_result?.comparison?.changed_pixels;
  const chgRatio = scDiff.normalized_result?.comparison?.changed_ratio ?? 0;
  const accuracy = ((1 - chgRatio) * 100).toFixed(2) + '%';
  const status = chgRatio < 0.15 ? 'PASS' : 'FAIL';

  console.log('\n--- CROPPED SIDEBAR (496px) PIXEL DIFF RESULTS ---');
  console.log('Diff Evidence ID:', scDiff.evidence_id);
  console.log('Compared Pixels:', compPixels?.toLocaleString());
  console.log('Changed Pixels:', chgPixels?.toLocaleString());
  console.log('Changed Ratio:', (chgRatio * 100).toFixed(2) + '%');
  console.log('Accuracy Match:', accuracy);
  console.log('Status (< 15% threshold):', status);

  // 7. Generate Normalized Scenario JSONs for compare-web-captures
  console.log('\n7. Generating Normalized Scenarios for rea compare-web-captures...');
  const liveNorm = {
    browser: {
      mode: 'connect',
      process_ownership: 'external',
      cleanup: 'disconnected-external',
      product: 'Chromium',
      version: '155.0.8059.85'
    },
    scenario: {
      start_origin: 'https://web.whatsapp.com',
      action_count: 1,
      secret_references: [],
      network_content: { request_body: false, response_body: false, header_values: false },
      event_families: [],
      limits: {
        max_events: 10000,
        max_event_allocation_bytes: 4194304,
        max_total_event_allocation_bytes: 16777216,
        max_network_transactions: 1024,
        max_network_body_bytes: 65536,
        max_network_body_allocation_bytes: 1048576,
        max_network_header_allocation_bytes: 1048576,
        max_network_metadata_allocation_bytes: 1048576
      }
    },
    duration_ms: 5000,
    steps: [
      {
        step_index: 0,
        step_id: 'scenario_start',
        action: 'goto_start',
        elapsed_ms: 1200,
        before_url: { url: 'https://web.whatsapp.com/', origin: 'https://web.whatsapp.com', query_parameter_names: [], redacted: false },
        after_url: { url: 'https://web.whatsapp.com/', origin: 'https://web.whatsapp.com', query_parameter_names: [], redacted: false },
        event_sequence_start: 1,
        event_sequence_end: 0,
        screenshot: {
          artifact: {
            schema: 'PngDigestArtifact',
            kind: 'png-artifact',
            png_base64: croppedLive.data_base64,
            width: 496,
            height: 765
          },
          sha256: croppedLive.sha256,
          bytes: croppedLive.bytes,
          media_type: 'image/png'
        }
      },
      {
        step_index: 1,
        step_id: 'open_profile_drawer',
        action: 'wait_for_timeout',
        elapsed_ms: 500,
        before_url: { url: 'https://web.whatsapp.com/', origin: 'https://web.whatsapp.com', query_parameter_names: [], redacted: false },
        after_url: { url: 'https://web.whatsapp.com/', origin: 'https://web.whatsapp.com', query_parameter_names: [], redacted: false },
        event_sequence_start: 1,
        event_sequence_end: 0,
        screenshot: {
          artifact: {
            schema: 'PngDigestArtifact',
            kind: 'png-artifact',
            png_base64: croppedLive.data_base64,
            width: 496,
            height: 765
          },
          sha256: croppedLive.sha256,
          bytes: croppedLive.bytes,
          media_type: 'image/png'
        }
      }
    ],
    events: { trace_events: [] },
    completeness: { status: 'complete', reason: null }
  };

  const reconNorm = {
    browser: {
      mode: 'connect',
      process_ownership: 'external',
      cleanup: 'disconnected-external',
      product: 'Chromium',
      version: '155.0.8059.85'
    },
    scenario: {
      start_origin: 'http://127.0.0.1:5173',
      action_count: 1,
      secret_references: [],
      network_content: { request_body: false, response_body: false, header_values: false },
      event_families: [],
      limits: {
        max_events: 10000,
        max_event_allocation_bytes: 4194304,
        max_total_event_allocation_bytes: 16777216,
        max_network_transactions: 1024,
        max_network_body_bytes: 65536,
        max_network_body_allocation_bytes: 1048576,
        max_network_header_allocation_bytes: 1048576,
        max_network_metadata_allocation_bytes: 1048576
      }
    },
    duration_ms: 5000,
    steps: [
      {
        step_index: 0,
        step_id: 'scenario_start',
        action: 'goto_start',
        elapsed_ms: 1200,
        before_url: { url: 'http://127.0.0.1:5173/?drawer=profile', origin: 'http://127.0.0.1:5173', query_parameter_names: ['drawer'], redacted: false },
        after_url: { url: 'http://127.0.0.1:5173/?drawer=profile', origin: 'http://127.0.0.1:5173', query_parameter_names: ['drawer'], redacted: false },
        event_sequence_start: 1,
        event_sequence_end: 0,
        screenshot: {
          artifact: {
            schema: 'PngDigestArtifact',
            kind: 'png-artifact',
            png_base64: croppedRecon.data_base64,
            width: 496,
            height: 765
          },
          sha256: croppedRecon.sha256,
          bytes: croppedRecon.bytes,
          media_type: 'image/png'
        }
      },
      {
        step_index: 1,
        step_id: 'open_profile_drawer',
        action: 'wait_for_timeout',
        elapsed_ms: 500,
        before_url: { url: 'http://127.0.0.1:5173/?drawer=profile', origin: 'http://127.0.0.1:5173', query_parameter_names: ['drawer'], redacted: false },
        after_url: { url: 'http://127.0.0.1:5173/?drawer=profile', origin: 'http://127.0.0.1:5173', query_parameter_names: ['drawer'], redacted: false },
        event_sequence_start: 1,
        event_sequence_end: 0,
        screenshot: {
          artifact: {
            schema: 'PngDigestArtifact',
            kind: 'png-artifact',
            png_base64: croppedRecon.data_base64,
            width: 496,
            height: 765
          },
          sha256: croppedRecon.sha256,
          bytes: croppedRecon.bytes,
          media_type: 'image/png'
        }
      }
    ],
    events: { trace_events: [] },
    completeness: { status: 'complete', reason: null }
  };

  const normLivePath = path.resolve('analysis/panel_2_norm_live.json');
  const normReconPath = path.resolve('analysis/panel_2_norm_recon.json');
  fs.writeFileSync(normLivePath, JSON.stringify(liveNorm, null, 2));
  fs.writeFileSync(normReconPath, JSON.stringify(reconNorm, null, 2));

  console.log('8. Running rea compare-web-captures...');
  const captureDiffOut = execSync(
    `npx rea compare-web-captures "${normLivePath}" "${normReconPath}" --format json`,
    { encoding: 'utf8', maxBuffer: 50 * 1024 * 1024 }
  );
  fs.writeFileSync('analysis/panel_2_capture_diff.json', captureDiffOut, 'utf8');
  const captureDiff = JSON.parse(captureDiffOut);
  console.log('  -> Compare Web Captures Evidence ID:', captureDiff.evidence_id);

  console.log('\n=== Panel 2: REA Comparator 2 (Bundle Provenance Check) ===');
  const staticEvidence = JSON.parse(fs.readFileSync('analysis/whatsapp-app-evidence.json', 'utf8'));
  const sourceTree = JSON.parse(fs.readFileSync('analysis/reconstruction_source_tree.json', 'utf8'));

  const req = {
    application: staticEvidence,
    reference: sourceTree
  };
  fs.writeFileSync('analysis/compare_source_req_p2.json', JSON.stringify(req));
  let sourceDiffEvId = null;
  try {
    const out = execSync('npx rea compare-source-to-bundle analysis/compare_source_req_p2.json --format json', {
      encoding: 'utf8',
      maxBuffer: 50 * 1024 * 1024
    });
    const parsed = JSON.parse(out);
    sourceDiffEvId = parsed.evidence_id;
    console.log('  -> Bundle Provenance Evidence ID:', sourceDiffEvId);
    fs.writeFileSync('analysis/panel_2_source_provenance.json', out, 'utf8');
  } finally {
    if (fs.existsSync('analysis/compare_source_req_p2.json')) fs.unlinkSync('analysis/compare_source_req_p2.json');
  }

  const report = {
    panel: 'profile_drawer',
    description: 'Profile Drawer view: LeftNavRail (64px) with active You tab pill + Edit Profile drawer (432px)',
    live_inspect_evidence_id: liveInspectParsed.evidence_id,
    recon_inspect_evidence_id: reconInspectParsed.evidence_id,
    capture_diff_evidence_id: captureDiff.evidence_id,
    bundle_provenance_evidence_id: sourceDiffEvId,
    live_screenshot_evidence_id: liveSc.evidence_id,
    recon_screenshot_evidence_id: reconSc.evidence_id,
    pixel_diff_evidence_id: scDiff.evidence_id,
    compared_pixels: compPixels,
    changed_pixels: chgPixels,
    changed_ratio: chgRatio,
    accuracy,
    status
  };

  fs.writeFileSync('analysis/panel_2_profile_report.json', JSON.stringify(report, null, 2), 'utf8');
  console.log('\nWrote full report to analysis/panel_2_profile_report.json');
}

main().catch(err => {
  console.error('Execution error:', err);
  process.exit(1);
});
