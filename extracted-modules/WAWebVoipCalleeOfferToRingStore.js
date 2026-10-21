__d("WAWebVoipCalleeOfferToRingStore", [], function(t, n, r, o, a, i) {
    "use strict";
    let e = null;
    function l(t) {
        if (!(e != null && e.callId === t && e.ringAtMs == null)) {
            const offerAtMs = m();
            e = offerAtMs == null ? null : {
                callId: t,
                offerAtMs,
                ringAtMs: null
            };
        }
    }
    function s(t) {
        if (!(e == null || e.callId !== t || e.ringAtMs != null)) {
            e = babelHelpers.extends({}, e, {
                ringAtMs: m()
            });
        }
    }
    function u() {
        const n = e?.ringAtMs;
        if (e == null || n == null || n <= e.offerAtMs) {
            return null;
        }
        return Math.round(n - e.offerAtMs);
    }
    function c(t) {
        if (t != null && t !== "" && e?.callId !== t) {
            e = null;
        }
    }
    function d() {
        e = null;
    }
    function m() {
        return globalThis.performance?.now() ?? null;
    }
    i.recordCalleeOfferReceived = l;
    i.recordCalleeRing = s;
    i.getCalleeOfferToRingT = u;
    i.dropCalleeOfferToRingOfOtherCall = c;
    i.resetCalleeOfferToRing = d;
}, 66);