__d("WAWebVoipPeerTcToken", [
    "WAWebBackendApi",
    "WAWebVoipGatingUtils",
    "asyncToGeneratorRuntime"
], function(t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
        return s.apply(this, arguments);
    }
    function s() {
        s = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
            if (o("WAWebVoipGatingUtils").isGuestViewer()) {
                return null;
            }
            const t = yield o("WAWebBackendApi").frontendSendAndReceive("getTcToken", {
                wid: e
            });
            const n = t.tcToken;
            return n;
        });
        return s.apply(this, arguments);
    }
    l.fetchPeerTcToken = e;
}, 98);