const fs = require('fs');
const crypto = require('crypto');
const path = require('path');

function getHash(filePath) {
  if (!fs.existsSync(filePath)) return 'FILE_NOT_FOUND';
  const buf = fs.readFileSync(filePath);
  return crypto.createHash('sha256').update(buf).digest('hex');
}

const entries = [
  // 1. Target Artifacts
  { category: 'Target Artifacts', file: 'target_artifacts/whatsapp-web/css/production.css', desc: 'Captured WhatsApp Web production stylesheet (1.45 MB)' },
  { category: 'Target Artifacts', file: 'target_artifacts/whatsapp-web/live-screenshot-artifact.json', desc: 'Normalized live viewport screenshot artifact JSON' },
  { category: 'Target Artifacts', file: 'target_artifacts/whatsapp-web/page-capture.json', desc: 'Full DOM, accessibility, and V8 script sources capture' },

  // 2. Extracted Ground Truth
  { category: 'Extracted Ground Truth', file: 'analysis/css-tokens.json', desc: '3,208 CSS custom properties extracted from production.css' },
  { category: 'Extracted Ground Truth', file: 'analysis/svg-icons.json', desc: '151 verified decompiled SVG icons from bundle modules' },
  { category: 'Extracted Ground Truth', file: 'analysis/bubble-grouping-rules.md', desc: 'Message clustering, tail-in/out, and date boundary rules' },
  { category: 'Extracted Ground Truth', file: 'analysis/tick-state-machine.md', desc: 'ACK progression: CLOCK -> SENT -> RECEIVED -> READ' },

  // 3. Source Decompiled Chunks
  { category: 'Decompiled Source Modules', file: 'recovered-modules-combined/chunk_05_Sp7m9vtWcB2__bundle.js', desc: 'Icon factory and WDS vector registrations' },
  { category: 'Decompiled Source Modules', file: 'recovered-modules-combined/chunk_09_source-9-122c3e652dc14fd507309af34868b6f__bundle.js', desc: 'Navigation rail, search, and system icon registrations' },
  { category: 'Decompiled Source Modules', file: 'recovered-modules-combined/chunk_10_3nzqNpHbcmc__bundle.js', desc: 'Conversation preview, tick status, and StyleX class mappings' },
  { category: 'Decompiled Source Modules', file: 'recovered-modules-combined/chunk_17_7Tf0qWLsuo3__bundle.js', desc: 'Speech bubble tail-in and tail-out vector components' },
  { category: 'Decompiled Source Modules', file: 'recovered-modules-combined/chunk_19_36kJFHJBFHp__bundle.js', desc: 'Ack state bindings and chat list selection logic' },
  { category: 'Decompiled Source Modules', file: 'recovered-modules-combined/chunk_26_source-26-d9b5cb7fdfe11a88b2d9ce3c290436__bundle.js', desc: 'Composer bar, attachments, and background sync logic' }
];

let md = `# WhatsApp Web Reconstruction — Cryptographic Evidence Ledger

This ledger records the SHA-256 digests and provenance of all target artifacts, extracted ground-truth specs, and decompiled source chunks.

| Category | File Path | SHA-256 Digest | Description |
| :--- | :--- | :--- | :--- |
`;

entries.forEach(e => {
  const hash = getHash(e.file);
  md += `| **${e.category}** | \`${e.file}\` | \`${hash}\` | ${e.desc} |\n`;
});

fs.writeFileSync('analysis/evidence-ledger.md', md, 'utf8');
console.log('Successfully written analysis/evidence-ledger.md');
