__d("WAWebVoipIncomingOfferReceivedWallClockStore", [], function(t, n, r, o, a, i) {
    "use strict";
    let e = null;
    function l(t) {
        if (!(e != null && e.callId === t)) {
            e = {
                callId: t,
                offerAtMs: Date.now()
            };
        }
    }
    function s() {
        const r = e?.offerAtMs ?? null;
        e = null;
        return r;
    }
    i.recordIncomingOfferReceivedWallClock = l;
    i.consumeIncomingOfferReceivedWallMs = s;
}, 66);