__d("WAWebVoipAnrTracker", [
    "WALogger",
    "WAWebVoipActivityTracker"
], function(t, n, r, o, a, i, l) {
    "use strict";
    let e;
    let s;
    let u;
    let c = 0;
    let d = false;
    function m() {
        if (!d) {
            c = 0;
            d = true;
            o("WALogger").LOG(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                "[voip:anrTracker] started"
            ])));
        }
    }
    function p() {
        if (d) {
            c++;
            o("WAWebVoipActivityTracker").recordFirstAnrTimestamp();
            o("WALogger").LOG(s || (s = babelHelpers.taggedTemplateLiteralLoose([
                "[voip:anrTracker] ANR detected, count=",
                ""
            ])), c);
        }
    }
    function _() {
        return d;
    }
    function f() {
        if (!d) {
            return null;
        }
        const e = c;
        d = false;
        c = 0;
        o("WALogger").LOG(u || (u = babelHelpers.taggedTemplateLiteralLoose([
            "[voip:anrTracker] consumed count=",
            ""
        ])), e);
        return e;
    }
    l.startAnrTracking = m;
    l.incrementAnrCount = p;
    l.isAnrTrackingActive = _;
    l.consumeAnrCount = f;
}, 98);