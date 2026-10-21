__d("WAWebVoipCallIdProvider", [
    "WALogger",
    "WARandomHex"
], function(t, n, r, o, a, i, l) {
    "use strict";
    let e;
    const s = "00";
    let u = null;
    function c() {
        const t = s + o("WARandomHex").randomHex(16).slice(2);
        o("WALogger").LOG(e || (e = babelHelpers.taggedTemplateLiteralLoose([
            "voip:generateCallId: ",
            ""
        ])), t);
        return t;
    }
    function d() {
        const e = c();
        u = e;
        return e;
    }
    function m() {
        const e = u;
        if (e != null) {
            u = null;
            return e;
        }
        return c();
    }
    function p() {
        u = null;
    }
    function _() {
        return u;
    }
    l.generateNewCallId = c;
    l.generateAndStoreNewCallId = d;
    l.consumeOrGenerateCallId = m;
    l.resetPendingCallId = p;
    l.getPendingCallIdForTest = _;
}, 98);