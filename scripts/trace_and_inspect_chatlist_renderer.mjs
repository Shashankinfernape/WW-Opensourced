import fs from 'fs';
import path from 'path';
import { execSync } from 'child_process';

const staticEvidencePath = path.resolve('analysis/whatsapp-app-evidence.json');
console.log('Loading static application evidence graph...');
const staticEvidence = JSON.parse(fs.readFileSync(staticEvidencePath, 'utf8'));

const outDir = path.resolve('analysis/chatlist_traces');
if (!fs.existsSync(outDir)) {
  fs.mkdirSync(outDir, { recursive: true });
}

const traceResults = {
  semantic_traces: [],
  feature_traces: [],
  inspections: []
};

// 1. Semantic Traces
const semanticSeeds = [
  { seed: 'useWAWebChatlistRowHeight', direction: 'callers' },
  { seed: 'useWAWebChatlistRowHeight', direction: 'forward-influence' },
  { seed: 'WDSPreviewListItemMetrics', direction: 'callers' },
  { seed: 'WDSPreviewListItemMetrics', direction: 'forward-influence' }
];

for (const s of semanticSeeds) {
  const req = {
    application: staticEvidence,
    query: {
      seed: {
        kind: 'literal',
        value: s.seed
      },
      direction: s.direction
    }
  };
  const reqPath = path.join(outDir, `req_sem_${s.seed}_${s.direction}.json`);
  fs.writeFileSync(reqPath, JSON.stringify(req));
  console.log(`Running rea trace-javascript-semantics: seed="${s.seed}" direction="${s.direction}"...`);
  try {
    const out = execSync(`npx rea trace-javascript-semantics "${reqPath}" --format json`, {
      encoding: 'utf8',
      maxBuffer: 50 * 1024 * 1024
    });
    const parsed = JSON.parse(out);
    traceResults.semantic_traces.push({
      seed: s.seed,
      direction: s.direction,
      evidence_id: parsed.evidence_id
    });
    console.log(`  -> Evidence ID: ${parsed.evidence_id}`);
  } catch (err) {
    console.error(`  -> Failed:`, err.message);
  } finally {
    if (fs.existsSync(reqPath)) fs.unlinkSync(reqPath);
  }
}

// 2. Feature Traces
const featureSeeds = [
  'ic-sticker',
  'ic-notifications-off',
  'ic-pin',
  'msg-dblcheck'
];

for (const seed of featureSeeds) {
  const req = {
    application: staticEvidence,
    native_observations: [],
    seed: {
      kind: 'string',
      value: seed,
      match: 'contains',
      case_sensitive: false
    },
    direction: 'both'
  };
  const reqPath = path.join(outDir, `req_feat_${seed}.json`);
  fs.writeFileSync(reqPath, JSON.stringify(req));
  console.log(`Running rea trace-application-feature: seed="${seed}" match="contains" direction="both"...`);
  try {
    const out = execSync(`npx rea trace-application-feature "${reqPath}" --format json`, {
      encoding: 'utf8',
      maxBuffer: 50 * 1024 * 1024
    });
    const parsed = JSON.parse(out);
    traceResults.feature_traces.push({
      seed,
      match: 'contains',
      direction: 'both',
      evidence_id: parsed.evidence_id
    });
    console.log(`  -> Evidence ID: ${parsed.evidence_id}`);
  } catch (err) {
    console.error(`  -> Failed:`, err.message);
  } finally {
    if (fs.existsSync(reqPath)) fs.unlinkSync(reqPath);
  }
}

// 3. Inspect-analysis-view on key module nodes
const inspectionNodeIds = [
  'jag_node_75dda4f908461c3391b41080ef440ed6dcf21ded18b2fcf2aaa63ef57f9a3e2d', // chunk_10 bundle (row renderer, chatlist metrics)
  'jag_node_1752bf1f8d02457aad7ba3f22591252a4d9cfbdfc4d81200505caaa264e9b2b7', // LexicalSelection module
  'jag_node_1ec4532c2f418002ebb02887f977036cd32fcb16c7644042748addd553b21306', // chunk_17 bundle
  'jag_node_38f4217165e6c7997c2d9f79c28c9206eb23bf1b457b56de78ce79e5e2909779'  // chunk_09 bundle
];

for (const nodeId of inspectionNodeIds) {
  const req = {
    source: {
      kind: 'evidence-file',
      path: staticEvidencePath
    },
    view: {
      kind: 'item',
      collection: 'modules',
      selector: {
        node_id: nodeId
      }
    }
  };
  const reqPath = path.join(outDir, `req_view_${nodeId}.json`);
  fs.writeFileSync(reqPath, JSON.stringify(req));
  console.log(`Running rea inspect-analysis-view: node_id="${nodeId}"...`);
  try {
    const out = execSync(`npx rea inspect-analysis-view "${reqPath}" --format json`, {
      encoding: 'utf8',
      maxBuffer: 50 * 1024 * 1024
    });
    const parsed = JSON.parse(out);
    traceResults.inspections.push({
      node_id: nodeId,
      evidence_id: parsed.evidence_id
    });
    console.log(`  -> Evidence ID: ${parsed.evidence_id}`);
  } catch (err) {
    console.error(`  -> Failed:`, err.message);
  } finally {
    if (fs.existsSync(reqPath)) fs.unlinkSync(reqPath);
  }
}

// 4. Record recovered module lines
const moduleDetails = [
  { module: 'useWAWebChatlistRowHeight.js', path: 'extracted-modules/useWAWebChatlistRowHeight.js', lines: '1-30', role: 'Virtualizer row-height metric (76px)' },
  { module: 'WDSPreviewListItemMetrics.js', path: 'extracted-modules/WDSPreviewListItemMetrics.js', lines: '1-25', role: 'Row height metrics max(48+8,44)+16+4' },
  { module: 'WAWebChatlistItem.react.js', path: 'extracted-modules/WAWebChatlistItem.react.js', lines: '1-60, 200-280', role: 'Chatlist row wrapper & cell dispatcher' },
  { module: 'WAWebChatCell.react.js', path: 'extracted-modules/WAWebChatCell.react.js', lines: '1-120', role: 'Row cell container with flex layout & hover actions' },
  { module: 'WAWebChatLastMsg.react.js', path: 'extracted-modules/WAWebChatLastMsg.react.js', lines: '170-178, 350-385, 408-419', role: 'Subtitle rendering: ack only when fromMe, group author prefix, inline symbols' },
  { module: 'WAWebChatMsgAck.react.js', path: 'extracted-modules/WAWebChatMsgAck.react.js', lines: '56-109', role: 'Sent state ack checkmarks (clock, delivered, read blue)' },
  { module: 'WAWebChatMsgSymbol.react.js', path: 'extracted-modules/WAWebChatMsgSymbol.react.js', lines: '45-84', role: 'Inline media symbol container data-testid="chat-msg-symbol"' },
  { module: 'WAWebRenderStickerPreviewIcon.js', path: 'extracted-modules/WAWebRenderStickerPreviewIcon.js', lines: '25-36', role: 'Inline 16x20/16x16 sticker icon data-testid="status-sticker"' },
  { module: 'WDSIconWdsIcSticker.react.js', path: 'extracted-modules/WDSIconWdsIcSticker.react.js', lines: '4-16', role: 'Sticker SVG path definition (evenodd compound path)' },
  { module: 'WAWebChatIcons.react.js', path: 'extracted-modules/WAWebChatIcons.react.js', lines: '204-234', role: 'Right-column meta icons: muted (ic-notifications-off), pinned (ic-push-pin), unread count pill' },
  { module: 'WDSIconIcNotificationsOff.react.js', path: 'extracted-modules/WDSIconIcNotificationsOff.react.js', lines: '4-6', role: 'Mute bell SVG path definition' },
  { module: 'WDSIconIcPushPin.react.js', path: 'extracted-modules/WDSIconIcPushPin.react.js', lines: '4-6', role: 'Pin SVG path definition' },
  { module: 'WDSIconWdsIcDelivered.react.js', path: 'extracted-modules/WDSIconWdsIcDelivered.react.js', lines: '4-6', role: 'Single checkmark SVG path definition' },
  { module: 'WDSIconWdsIcRead.react.js', path: 'extracted-modules/WDSIconWdsIcRead.react.js', lines: '4-6', role: 'Double checkmark SVG path definition' },
  { module: 'WAWebChatTimestamp.react.js', path: 'extracted-modules/WAWebChatTimestamp.react.js', lines: '38-50', role: 'Timestamp relative string caller' },
  { module: 'WAWebClock.js', path: 'extracted-modules/WAWebClock.js', lines: '764-784, 841-873', role: 'Clock.relativeStr: lowercase am/pm for today, capitalized Yesterday for -1d, weekday for < 7d' }
];

const inspectionsSummary = {
  generated_at: new Date().toISOString(),
  panel: 'chatlist',
  semantic_traces: traceResults.semantic_traces,
  feature_traces: traceResults.feature_traces,
  inspections: traceResults.inspections,
  module_details: moduleDetails
};

fs.writeFileSync('analysis/inspections_summary.json', JSON.stringify(inspectionsSummary, null, 2));
console.log('\nAll traces and inspections complete! Written to analysis/inspections_summary.json');
