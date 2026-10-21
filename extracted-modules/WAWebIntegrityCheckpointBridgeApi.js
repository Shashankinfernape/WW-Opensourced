__d("WAWebIntegrityCheckpointBridgeApi", [
    "WALogger",
    "requireDeferred"
], function(t, n, r, o, a, i, l) {
    let e;
    let s;
    const u = r("requireDeferred")("WAWebIntegrityCheckpointOpener").__setRef("WAWebIntegrityCheckpointBridgeApi");
    const c = {
        openIntegrityCheckpoint: function(n) {
            o("WALogger").LOG(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                "[integrity-challenge] openIntegrityCheckpoint called"
            ])));
            u.load().then((e)=>e.openChallengeModal(n)).catch((e)=>{
                o("WALogger").ERROR(s || (s = babelHelpers.taggedTemplateLiteralLoose([
                    "[integrity-challenge] failed to load checkpoint opener"
                ]))).sendLogs("integrity-challenge-opener-load-failed");
            });
        }
    };
    l.IntegrityCheckpointBridgeApi = c;
}, 98);