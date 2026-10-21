const fs = require('fs');

function inspectChunk(chunkName, terms) {
  const content = fs.readFileSync('recovered-modules-combined/' + chunkName, 'utf8');
  for (const term of terms) {
    let idx = 0;
    while ((idx = content.indexOf(term, idx)) !== -1) {
      const dStart = content.lastIndexOf('__d(', idx);
      const m = content.substring(dStart, dStart + 80).match(/__d\("([^"]+)"/);
      const line = content.substring(0, idx).split('\n').length;
      console.log(`[${term}] in module ${m ? m[1] : 'unknown'} at ${chunkName}#L${line}`);
      idx += term.length + 50000;
    }
  }
}

inspectChunk('chunk_09_source-9-122c3e652dc14fd507309af34868b6f__bundle.js', ['Archived', 'Archive']);
inspectChunk('chunk_26_source-26-d9b5cb7fdfe11a88b2d9ce3c290436__bundle.js', ['Butterbar', 'Smiley', 'VideoCall', 'VoiceCall', 'Voip']);
inspectChunk('chunk_10_3nzqNpHbcmc__bundle.js', ['MetaAi', 'Encryption', 'End-to-end', 'e2e']);
