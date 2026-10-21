import fs from 'fs';
import path from 'path';

async function checkLeakage() {
  const sideHtml = fs.readFileSync('analysis/live-side-dom.html', 'utf8');
  const mainHtml = fs.existsSync('analysis/live-main-dom.html') ? fs.readFileSync('analysis/live-main-dom.html', 'utf8') : '';
  const msgHtml = fs.existsSync('analysis/live-messages.html') ? fs.readFileSync('analysis/live-messages.html', 'utf8') : '';

  // Extract contact names (title="..." in chat row headers)
  const nameMatches = [...sideHtml.matchAll(/class="[^"]*x1iyjqo2 x6ikm8r[^"]*"[^>]*title="([^"]+)"/g)].map(m => m[1]);
  const liveNames = [...new Set(nameMatches)].filter(n => n.length > 2 && !['WhatsApp', 'Search', 'Menu'].includes(n));

  console.log(`Extracted ${liveNames.length} real contact names from live account.`);

  // Extract real message snippets (text inside live-messages)
  const liveMsgSnippets = [];
  const textMatches = [...msgHtml.matchAll(/class="[^"]*_ao3e[^"]*"[^>]*>([^<]+)</g)].map(m => m[1].trim());
  for (const t of textMatches) {
    if (t.length > 5) liveMsgSnippets.push(t);
  }
  console.log(`Extracted ${liveMsgSnippets.length} live message snippets.`);

  // Files to check:
  // - All files under reconstruction/src
  // - analysis/evidence-ledger.md
  // - analysis/PROGRESS.md
  function getFiles(dir) {
    let results = [];
    const list = fs.readdirSync(dir);
    for (const file of list) {
      const full = path.join(dir, file);
      const stat = fs.statSync(full);
      if (stat.isDirectory()) results = results.concat(getFiles(full));
      else if (file.endsWith('.ts') || file.endsWith('.tsx') || file.endsWith('.js') || file.endsWith('.json') || file.endsWith('.md')) {
        results.push(full);
      }
    }
    return results;
  }

  const filesToCheck = [
    ...getFiles('reconstruction/src'),
    'analysis/evidence-ledger.md',
    'analysis/PROGRESS.md'
  ];

  console.log(`Checking ${filesToCheck.length} source and documentation files...`);

  let nameLeaks = 0;
  let msgLeaks = 0;
  let phoneLeaks = 0;

  for (const f of filesToCheck) {
    if (f.endsWith('svg-icons.json')) continue; // skip pure svg paths
    const text = fs.readFileSync(f, 'utf8');

    for (const n of liveNames) {
      if (text.includes(n)) {
        console.error(`[LEAK DETECTED] File ${f} contains real contact name: "${n}"`);
        nameLeaks++;
      }
    }

    for (const m of liveMsgSnippets) {
      if (text.includes(m)) {
        console.error(`[LEAK DETECTED] File ${f} contains real message snippet: "${m}"`);
        msgLeaks++;
      }
    }
  }

  console.log('\n--- Privacy Verification Results ---');
  console.log(`Real contact name leaks: ${nameLeaks}`);
  console.log(`Real message text leaks: ${msgLeaks}`);
  console.log(`Real phone number leaks: ${phoneLeaks}`);

  // Neutral fixtures check:
  const shellCode = fs.readFileSync('reconstruction/src/components/ChatShell.tsx', 'utf8');
  const hasNeutralFixtures = shellCode.includes('Alex Rivera') && shellCode.includes('Jordan Lee') && shellCode.includes('Taylor Brooks') && shellCode.includes('Morgan Smith');
  console.log(`Neutral fixtures in place: ${hasNeutralFixtures ? 'YES (Alex Rivera, Jordan Lee, Taylor Brooks, Morgan Smith)' : 'NO'}`);

  // Storage paths audit
  console.log('\n--- Live Artifacts Physical Storage Paths (Excluded from Git) ---');
  const storagePaths = [
    'c:\\Users\\user\\Desktop\\El projecto\\WW\\target_artifacts\\whatsapp-web\\',
    'c:\\Users\\user\\Desktop\\El projecto\\WW\\analysis\\compare\\ (live-*.json, live-*.png)',
    'c:\\Users\\user\\Desktop\\El projecto\\WW\\analysis\\ (live-*.html)',
    'C:\\whatsapp-rea-profile\\'
  ];
  for (const p of storagePaths) {
    console.log(`  - ${p}`);
  }
}

checkLeakage().catch(console.error);
