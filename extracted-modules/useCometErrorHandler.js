__d("useCometErrorHandler", [
    "react",
    "react-compiler-runtime",
    "useCometReportErrorToHeroTracing"
], function(t, n, r, o, a, i, l) {
    "use strict";
    let e;
    const useCallback = (e || (e = o("react"))).useCallback;
    function u(e, t) {
        const n = o("react-compiler-runtime").c(3);
        const a = r("useCometReportErrorToHeroTracing")(t);
        let i;
        if (n[0] !== e || n[1] !== a) {
            i = function(n, r) {
                a(n);
                e?.(n, r);
            };
            n[0] = e;
            n[1] = a;
            n[2] = i;
        } else {
            i = n[2];
        }
        return i;
    }
    l.default = u;
}, 98);