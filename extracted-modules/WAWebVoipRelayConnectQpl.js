__d("WAWebVoipRelayConnectQpl", [
    "WAWebQplFlow",
    "qpl"
], function(t, n, r, o, a, i, l) {
    "use strict";
    const e = r("qpl")._(891431646, "1606");
    const s = 60000;
    let u = null;
    let c = false;
    function d(t = true) {
        if (t && u == null && !c) {
            u = o("WAWebQplFlow").startQplFlow(e, {
                timeoutInMs: s
            });
        }
    }
    function m() {
        c = true;
    }
    function p(e = true) {
        if (e && u != null) {
            u.endSuccess();
            u = null;
            c = true;
        }
    }
    function _() {
        u?.endCancel(undefined, {
            string: {
                cancel_reason: "call_ended"
            }
        });
        u = null;
        c = false;
    }
    l.maybeStartVoipRelayConnectQpl = d;
    l.markVoipRelayConnectQplMeasured = m;
    l.endVoipRelayConnectQplSuccess = p;
    l.resetVoipRelayConnectQpl = _;
}, 98);