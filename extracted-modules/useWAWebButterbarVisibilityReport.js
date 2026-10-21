__d("useWAWebButterbarVisibilityReport", [
    "react",
    "react-compiler-runtime",
    "useWAWebStableCallback"
], function(t, n, r, o, a, i, l) {
    "use strict";
    let e;
    const useLayoutEffect = (e || (e = o("react"))).useLayoutEffect;
    function u(e, t) {
        const n = o("react-compiler-runtime").c(7);
        const a = r("useWAWebStableCallback")(t);
        let i;
        let l;
        if (n[0] !== e || n[1] !== a) {
            i = function() {
                if (e != null) {
                    a(e);
                }
            };
            l = [
                e,
                a
            ];
            n[0] = e;
            n[1] = a;
            n[2] = i;
            n[3] = l;
        } else {
            i = n[2];
            l = n[3];
        }
        useLayoutEffect(i, l);
        let u;
        let c;
        if (n[4] !== a) {
            u = function() {
                return function() {
                    a(false);
                };
            };
            c = [
                a
            ];
            n[4] = a;
            n[5] = u;
            n[6] = c;
        } else {
            u = n[5];
            c = n[6];
        }
        useLayoutEffect(u, c);
    }
    l.default = u;
}, 98);