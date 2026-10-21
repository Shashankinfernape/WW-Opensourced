const fs = require('fs');

console.log('=== EVIDENCE LEDGER COMPREHENSIVE AUDIT SCRIPT ===');

const cssPath = 'target_artifacts/whatsapp-web/css/production.css';
const css = fs.readFileSync(cssPath, 'utf8');

const ledgerPath = 'analysis/evidence-ledger.md';
let ledger = fs.readFileSync(ledgerPath, 'utf8');

let errors = 0;
let checked = 0;

// 1. Audit all production.css byte offsets in the ledger
// Matches patterns like `Byte offset: \d+` or `offset \d+` or `835436`
console.log('\n--- Auditing production.css Byte Offsets ---');
const cssOffsetRegex = /`(\d{6,7})`(?:\s*\|.*?(?:`([^`]+)`|\b(--[A-Za-z0-9-_]+|(?:\.[a-z0-9]+))))/g;
// Let's also parse table rows in Section 1.2 and Section 4.1
const lines = ledger.split('\n');

for (let i = 0; i < lines.length; i++) {
  const line = lines[i];
  if (!line.includes('|')) continue;
  
  // Section 1.2 and Section 4.1 table rows
  // Example: | **[DIRECT]** | `--WDS-surface-emphasized` | ... | `835436` | ...
  const parts = line.split('|').map(p => p.trim());
  if (parts.length >= 5) {
    // Check if parts contain a byte offset
    for (let pIdx = 0; pIdx < parts.length; pIdx++) {
      const part = parts[pIdx];
      const match = /^`?(\d{6,7})`?$/.exec(part);
      if (match) {
        const offset = parseInt(match[1], 10);
        // Look for token or class in other cells of the row
        const rowText = line;
        // Find token candidate
        const tokenMatch = /`(--[A-Za-z0-9-_]+|\.[a-z0-9]+)`/.exec(rowText);
        if (tokenMatch) {
          const token = tokenMatch[1];
          checked++;
          // Check if token exists at or near that offset
          const sliceAtOffset = css.slice(offset, offset + token.length + 30);
          if (!sliceAtOffset.includes(token)) {
            console.error(`[OFFSET MISMATCH] Line ${i + 1}: Token "${token}" NOT at offset ${offset}! Found instead: "${sliceAtOffset.slice(0, 30)}"`);
            errors++;
            
            // Find true offset
            let trueOffset = -1;
            if (token.startsWith('.')) {
              trueOffset = css.indexOf(token + '{');
            } else if (token.startsWith('--')) {
              // check in dark block
              const darkStart = css.indexOf('@media (prefers-color-scheme: dark){.xfmqtgv.xfmqtgv');
              const darkEnd = css.indexOf('}', css.indexOf('{', darkStart + 40) + 1);
              const inDark = css.indexOf(token + ':', darkStart);
              if (inDark !== -1 && inDark < darkEnd) {
                trueOffset = inDark;
              } else {
                trueOffset = css.indexOf(token + ':');
              }
            }
            if (trueOffset !== -1) {
              console.log(`  -> Correcting line ${i + 1} offset from ${offset} to ${trueOffset}`);
              lines[i] = lines[i].replace(`\`${offset}\``, `\`${trueOffset}\``);
            }
          } else {
            console.log(`[PASS] Token "${token}" verified at production.css:${offset}`);
          }
        }
      }
    }
  }
}

// 2. Audit all module-name-to-chunk mappings and byte offsets in the ledger
console.log('\n--- Auditing Decompiled Module Chunk & Byte Offsets ---');
const modRegex = /`([a-zA-Z0-9_.-]+\.js)(?:#L(\d+))?`.*?`([a-zA-Z0-9_.-]+(?:\.react)?)`/g;

for (let i = 0; i < lines.length; i++) {
  const line = lines[i];
  if (!line.includes('.js')) continue;

  const chunkMatch = /`(chunk_[0-9]+[a-zA-Z0-9_.-]*\.js)`/.exec(line);
  const modMatch = /`([A-Z][a-zA-Z0-9_.-]*\.react)`/.exec(line);
  const offsetMatch = /`(\d{5,7})`/.exec(line);

  if (chunkMatch && modMatch) {
    const chunkFile = 'recovered-modules-combined/' + chunkMatch[1];
    const modName = modMatch[1];
    checked++;

    if (!fs.existsSync(chunkFile)) {
      console.error(`[CHUNK NOT FOUND] ${chunkFile} does not exist`);
      errors++;
      continue;
    }

    const chunkContent = fs.readFileSync(chunkFile, 'utf8');
    const decl = `__d("${modName}"`;
    const actualIdx = chunkContent.indexOf(decl);

    if (actualIdx === -1) {
      console.error(`[MODULE NOT IN CHUNK] Module "${modName}" NOT in cited file ${chunkMatch[1]}!`);
      errors++;
      
      // Find where it actually is
      const allFiles = fs.readdirSync('recovered-modules-combined').filter(f => f.endsWith('.js'));
      for (const af of allFiles) {
        const c = fs.readFileSync('recovered-modules-combined/' + af, 'utf8');
        const fIdx = c.indexOf(decl);
        if (fIdx !== -1) {
          const actualLine = c.slice(0, fIdx).split('\n').length;
          console.log(`  -> True location for "${modName}": ${af} at offset ${fIdx}, line ${actualLine}`);
          lines[i] = lines[i].replace(chunkMatch[1], af);
          if (line.includes('#L')) {
            lines[i] = lines[i].replace(/#L\d+/, `#L${actualLine}`);
          }
          break;
        }
      }
    } else {
      const actualLine = chunkContent.slice(0, actualIdx).split('\n').length;
      if (offsetMatch) {
        const citedOff = parseInt(offsetMatch[1], 10);
        if (citedOff !== actualIdx) {
          console.error(`[OFFSET MISMATCH] ${modName} in ${chunkMatch[1]}: cited offset ${citedOff} != actual ${actualIdx}`);
          lines[i] = lines[i].replace(`\`${citedOff}\``, `\`${actualIdx}\``);
        }
      }
      console.log(`[PASS] Module "${modName}" verified in ${chunkMatch[1]} at offset ${actualIdx}, line ${actualLine}`);
    }
  }
}

fs.writeFileSync(ledgerPath, lines.join('\n'), 'utf8');
console.log(`\n=== AUDIT COMPLETE ===`);
console.log(`Checked citations: ${checked}`);
console.log(`Mismatches identified & corrected: ${errors}`);
