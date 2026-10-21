__d("WAWebVoipOutgoingSetupLatencyStore", [], function(t, n, r, o, a, i) {
    "use strict";
    let e = null;
    let l = null;
    function s(t, n) {
        e = t;
        l = n;
    }
    function u(t) {
        if (l == null || l !== t) {
            return null;
        }
        const n = e;
        e = null;
        l = null;
        return n;
    }
    i.setOutgoingCallSetupActiveMs = s;
    i.consumeOutgoingCallSetupActiveMsForCall = u;
}, 66);