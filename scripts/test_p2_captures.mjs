import fs from 'fs';
import { execSync } from 'child_process';

const croppedLive = JSON.parse(fs.readFileSync('analysis/panel_2_cropped_live_art.json', 'utf8'));
const croppedRecon = JSON.parse(fs.readFileSync('analysis/panel_2_cropped_recon_art.json', 'utf8'));

function makeNorm(origin, url, paramNames, cropped) {
  return {
    browser: {
      mode: 'connect',
      process_ownership: 'external',
      cleanup: 'disconnected-external',
      product: 'Chromium',
      version: '155.0.8059.85'
    },
    scenario: {
      start_origin: origin,
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
        before_url: { url, origin, query_parameter_names: paramNames, redacted: false },
        after_url: { url, origin, query_parameter_names: paramNames, redacted: false },
        event_sequence_start: 1,
        event_sequence_end: 0,
        artifacts: {
          screenshot: { state: 'not_requested' },
          dom: { state: 'not_requested' },
          accessibility: { state: 'not_requested' },
          url: { state: 'not_requested' },
          history: { state: 'not_requested' },
          storage: { state: 'not_requested' }
        },
        completeness: {
          status: 'complete',
          equality_eligible: true,
          missing_sections: [],
          truncated_sections: []
        },
        status: 'completed',
        error: null
      },
      {
        step_index: 1,
        step_id: 'profile_drawer_view',
        action: 'wait_for_timeout',
        elapsed_ms: 500,
        before_url: { url, origin, query_parameter_names: paramNames, redacted: false },
        after_url: { url, origin, query_parameter_names: paramNames, redacted: false },
        event_sequence_start: 1,
        event_sequence_end: 0,
        artifacts: {
          screenshot: {
            state: 'captured',
            value: {
              sha256: cropped.sha256,
              bytes: cropped.bytes,
              media_type: cropped.media_type,
              data_base64: cropped.data_base64
            }
          },
          dom: { state: 'not_requested' },
          accessibility: { state: 'not_requested' },
          url: { state: 'not_requested' },
          history: { state: 'not_requested' },
          storage: { state: 'not_requested' }
        },
        completeness: {
          status: 'complete',
          equality_eligible: true,
          missing_sections: [],
          truncated_sections: []
        },
        status: 'completed',
        error: null
      }
    ],
    events: {
      retained: 0,
      dropped: 0,
      items: [],
      omissions: { by_kind: [], network_transactions: [], network_transaction_range: null }
    },
    completeness: {
      status: 'incomplete',
      equality_eligible: false,
      missing_sections: ['events'],
      truncated_sections: []
    },
    limitations: [
      'Event sequence records provider receipt order; simultaneous browser causality is not inferred.'
    ]
  };
}

const liveNorm = makeNorm('https://web.whatsapp.com', 'https://web.whatsapp.com/', [], croppedLive);
const reconNorm = makeNorm('http://127.0.0.1:5173', 'http://127.0.0.1:5173/?drawer=profile', ['drawer'], croppedRecon);

fs.writeFileSync('analysis/panel_2_norm_live.json', JSON.stringify(liveNorm, null, 2));
fs.writeFileSync('analysis/panel_2_norm_recon.json', JSON.stringify(reconNorm, null, 2));

console.log('Running rea compare-web-captures on panel_2...');
const out = execSync('npx rea compare-web-captures analysis/panel_2_norm_live.json analysis/panel_2_norm_recon.json --format json', {
  encoding: 'utf8',
  maxBuffer: 50 * 1024 * 1024
});

const parsed = JSON.parse(out);
console.log('SUCCESS! Capture Diff Evidence ID:', parsed.evidence_id);
console.log('Aligned steps:', parsed.normalized_result?.alignment?.aligned_steps);
fs.writeFileSync('analysis/panel_2_capture_diff.json', out, 'utf8');
