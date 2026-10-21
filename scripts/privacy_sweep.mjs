import fs from 'fs';
import path from 'path';
import { execSync } from 'child_process';

async function runPrivacySweep() {
  console.log('Starting Privacy Sweep across Build, Evidence Ledger, and Analysis Files...\n');

  // 1. Gather all tracked files in git
  const trackedFilesRaw = execSync('git ls-files', { encoding: 'utf8' });
  const trackedFiles = trackedFilesRaw.split('\n').map(s => s.trim()).filter(Boolean);

  // 2. Discover live names/texts from raw live DOM snapshots (to ensure NONE leaked into tracked repo)
  const liveSnapshotFiles = [
    'analysis/live-side-dom.html',
    'analysis/live-main-dom.html',
    'analysis/live-messages.html',
    'analysis/live-chat-row.html',
    'analysis/live-footer.html'
  ];

  const liveExtractedNames = new Set();
  const phonePattern = /(\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9})/g;
  const livePhones = new Set();

  for (const f of liveSnapshotFiles) {
    if (fs.existsSync(f)) {
      const content = fs.readFileSync(f, 'utf8');
      // Look for title attributes on spans (typical contact names in WhatsApp)
      const titleMatches = content.matchAll(/title="([^"]+)"/g);
      for (const m of titleMatches) {
        const val = m[1].trim();
        // Ignore generic UI labels
        if (val && !['WhatsApp', 'Search', 'Menu', 'Status', 'Chats', 'New chat', 'Filter', 'Profile details'].includes(val)) {
          if (val.length >= 3 && !val.includes('{') && !val.includes('<')) {
            liveExtractedNames.add(val);
          }
        }
      }
      const pMatches = content.match(phonePattern) || [];
      for (const p of pMatches) {
        if (p.replace(/\D/g, '').length >= 10) {
          livePhones.add(p.trim());
        }
      }
    }
  }

  console.log(`Identified ${liveExtractedNames.size} live contact titles and ${livePhones.size} phone patterns in raw live DOM.`);

  // 3. Scan scope:
  // - reconstruction/src/**
  // - reconstruction/dist/**
  // - analysis/evidence-ledger.md
  // - analysis/PROGRESS.md
  const scanDirs = ['reconstruction/src', 'reconstruction/dist'];
  const scanIndividualFiles = ['analysis/evidence-ledger.md', 'analysis/PROGRESS.md'];

  function getAllFiles(dirPath, arrayOfFiles = []) {
    if (!fs.existsSync(dirPath)) return arrayOfFiles;
    const files = fs.readdirSync(dirPath);
    for (const file of files) {
      const fullPath = path.join(dirPath, file);
      if (fs.statSync(fullPath).isDirectory()) {
        getAllFiles(fullPath, arrayOfFiles);
      } else {
        arrayOfFiles.push(fullPath);
      }
    }
    return arrayOfFiles;
  }

  let filesToScan = [];
  for (const d of scanDirs) {
    filesToScan = filesToScan.concat(getAllFiles(d));
  }
  for (const f of scanIndividualFiles) {
    if (fs.existsSync(f)) filesToScan.push(f);
  }

  console.log(`Scanning ${filesToScan.length} files across build, ledger, and progress reports...`);

  const leaks = [];

  for (const file of filesToScan) {
    // Skip binary / map files
    if (file.endsWith('.webp') || file.endsWith('.png') || file.endsWith('.map') || file.endsWith('.svg')) continue;
    const text = fs.readFileSync(file, 'utf8');

    // Check against live extracted names
    for (const name of liveExtractedNames) {
      // Don't flag single words that are common English words
      if (['You', 'Archived', 'Starred', 'Settings', 'Communities', 'Channels', 'Calls'].includes(name)) continue;
      if (text.includes(name)) {
        leaks.push({ file, type: 'LIVE_CONTACT_NAME', match: name });
      }
    }

    // Check for phone numbers (>= 10 digits)
    const matches = text.match(phonePattern) || [];
    for (const m of matches) {
      const digits = m.replace(/\D/g, '');
      // Ignore timestamp or git hashes or standard numbers
      if (digits.length >= 10 && digits.length <= 15) {
        // Exclude svg paths or date timestamps like 17925...
        if (!m.includes('e+') && !m.includes('.') && !m.startsWith('1792')) {
          leaks.push({ file, type: 'PHONE_NUMBER', match: m });
        }
      }
    }
  }

  // 4. Verify live snapshot storage paths are OUTSIDE source control
  const liveStorageLocations = [
    { path: 'target_artifacts/whatsapp-web/', desc: 'Raw live full-page DOM & CDP artifacts' },
    { path: 'analysis/live-*.html', desc: 'Raw extracted live DOM snippets' },
    { path: 'analysis/compare/live-*.json', desc: 'Captured live component screenshot artifacts' },
    { path: 'analysis/compare/live-*.png', desc: 'Rendered live component PNG bitmaps' },
    { path: 'C:\\whatsapp-rea-profile', desc: 'Isolated user Chrome debugging profile' }
  ];

  const sourceControlAudit = [];
  for (const loc of liveStorageLocations) {
    const isTracked = trackedFiles.some(f => f.startsWith(loc.path.replace(/\\/g, '/')) || (loc.path.includes('*') && f.includes('live-')));
    sourceControlAudit.push({
      path: loc.path,
      description: loc.desc,
      trackedInGit: isTracked,
      status: isTracked ? 'FAIL (LEAKED TO GIT)' : 'PASS (EXCLUDED FROM GIT)'
    });
  }

  // Report
  console.log('\n==========================================');
  console.log('PRIVACY SWEEP RESULTS:');
  console.log(`Leaked Real Contacts / Messages: ${leaks.length}`);
  if (leaks.length > 0) {
    console.log('Matches:', leaks);
  }
  console.log('\nSOURCE CONTROL EXCLUSION AUDIT:');
  for (const a of sourceControlAudit) {
    console.log(`- [${a.status}] ${a.path} (${a.description})`);
  }
  console.log('==========================================\n');

  fs.writeFileSync('analysis/compare/privacy-sweep-results.json', JSON.stringify({
    leaksCount: leaks.length,
    leaks,
    sourceControlAudit
  }, null, 2));

  if (leaks.length > 0 || sourceControlAudit.some(a => a.trackedInGit)) {
    process.exit(1);
  }
}

runPrivacySweep().catch(console.error);
