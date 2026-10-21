__d("CometQPLPayloadStore", [], function(t, n, r, o, a, i) {
    "use strict";
    let e = null;
    function l(t) {
        e = t;
    }
    function s() {
        const n = window;
        return e ?? n.pldmp ?? null;
    }
    let u = null;
    function c(e) {
        u = e;
    }
    function d() {
        const t = window;
        return u ?? t.plbs ?? null;
    }
    i.storePayloadMap = l;
    i.getPayloadMap = s;
    i.storePayloadBytesSent = c;
    i.getPayloadBytesSent = d;
}, 66);