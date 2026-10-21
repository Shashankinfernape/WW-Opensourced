__d("WAWebSimilarNewsletterSessionId", [
    "react",
    "react-compiler-runtime"
], function(t, n, r, o, a, i, l) {
    "use strict";
    let e;
    const useMemo = (e || (e = o("react"))).useMemo;
    function u() {
        return 1 + Math.floor(Number.MAX_SAFE_INTEGER * Math.random());
    }
    function c() {
        const e = o("react-compiler-runtime").c(1);
        let t;
        if (e[0] === Symbol.for("react.memo_cache_sentinel")) {
            t = u();
            e[0] = t;
        } else {
            t = e[0];
        }
        return t;
    }
    function d(e) {
        return e;
    }
    l.generateSessionId = u;
    l.useSimilarNewslettersSessionId = c;
    l.newsletterSessionIdToInt = d;
}, 98);