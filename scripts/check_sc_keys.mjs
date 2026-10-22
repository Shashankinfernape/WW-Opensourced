import fs from 'fs';
import { execSync } from 'child_process';

const liveTargetId = '33AE831CE803E57482AFAF475003C698';
const reconTargetId = '6C1EB6BEA99DB77BBB6E025B42EC3834';
const cdpEndpoint = 'http://127.0.0.1:9223';

try {
  fetch(`${cdpEndpoint}/json/activate/${liveTargetId}`).catch(() => {});
} catch (e) {}

const out = execSync(`npx rea capture-web-screenshot ${cdpEndpoint} ${liveTargetId} --format json`, { encoding: 'utf8' });
const parsed = JSON.parse(out);

console.log('Top level keys:', Object.keys(parsed));
console.log('raw_result keys:', parsed.raw_result ? Object.keys(parsed.raw_result) : null);
console.log('normalized_result keys:', parsed.normalized_result ? Object.keys(parsed.normalized_result) : null);
console.log('artifact keys:', parsed.normalized_result?.artifact ? Object.keys(parsed.normalized_result.artifact) : null);
