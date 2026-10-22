import fs from 'fs';
import { execSync } from 'child_process';

const staticEvidence = JSON.parse(fs.readFileSync('analysis/whatsapp-app-evidence.json', 'utf8'));

const ledgerReq = {
  evidence_bundle: {
    artifacts: [],
    providers: [],
    environments: [],
    scenarios: [],
    captures: [],
    unknowns: [],
    records: [staticEvidence]
  },
  reviewed_obligations: [],
  manifest: {
    bindings: [],
    contradictions: []
  }
};

fs.writeFileSync('analysis/obligation_req.json', JSON.stringify(ledgerReq));

try {
  console.log('Generating reconstruction obligation ledger from static evidence...');
  const ledgerOut = execSync('rea build-reconstruction-obligation-ledger analysis/obligation_req.json --format json', {
    encoding: 'utf8',
    maxBuffer: 50 * 1024 * 1024
  });
  fs.writeFileSync('analysis/reconstruction_obligation_ledger.json', ledgerOut, 'utf8');
  const parsedLedger = JSON.parse(ledgerOut);
  console.log('SUCCESS! Obligation Ledger Evidence ID:', parsedLedger.evidence_id);
  console.log('Derived candidate obligations count:', parsedLedger.normalized_result?.summary?.total);
} catch (e) {
  console.error('Obligation ledger error:', e.stdout?.slice(0, 500) || e.message);
} finally {
  if (fs.existsSync('analysis/obligation_req.json')) fs.unlinkSync('analysis/obligation_req.json');
}
