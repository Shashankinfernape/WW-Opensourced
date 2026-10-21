__d("useAttributionSourceForClick", [
    "XCometPrivacySandboxRegisterSourceControllerRouteBuilder",
    "justknobx",
    "react-compiler-runtime"
], function(t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t) {
        const n = o("react-compiler-runtime").c(4);
        if (r("justknobx")._("1425")) {
            return null;
        }
        let a;
        let i;
        if (n[0] !== e || n[1] !== t) {
            i = Symbol.for("react.early_return_sentinel");
            e: {
                const l = {};
                if (e != null && e.length > 0) {
                    l.eid = e;
                } else if (t != null && t.length > 0) {
                    l.xt = t;
                } else {
                    i = null;
                    break e;
                }
                const s = r("XCometPrivacySandboxRegisterSourceControllerRouteBuilder").buildUri(l);
                a = s.toString();
            }
            n[0] = e;
            n[1] = t;
            n[2] = a;
            n[3] = i;
        } else {
            a = n[2];
            i = n[3];
        }
        if (i !== Symbol.for("react.early_return_sentinel")) {
            return i;
        }
        return a;
    }
    l.default = e;
}, 98);