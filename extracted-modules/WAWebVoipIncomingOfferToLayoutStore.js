__d("WAWebVoipIncomingOfferToLayoutStore", [], function(t, n, r, o, a, i) {
    "use strict";
    let e = null;
    let l = null;
    function s(t) {
        if (!(l === t && e != null)) {
            e = Date.now();
            l = t;
        }
    }
    function u() {
        const t = e;
        e = null;
        l = null;
        return t;
    }
    i.recordIncomingCallWindowShown = s;
    i.consumeIncomingCallWindowShownMs = u;
}, 66);