__d("useWAWebAppTracker", [
    "WAWebAppTracker",
    "react",
    "react-compiler-runtime"
], function(t, n, r, o, a, i, l) {
    "use strict";
    let e;
    const useEffect = (e || (e = o("react"))).useEffect;
    function u(e, t) {
        const n = o("react-compiler-runtime").c(4);
        let r;
        let a;
        if (n[0] !== t || n[1] !== e) {
            r = function() {
                if (t) {
                    o("WAWebAppTracker").AppTracker.start(e);
                    return function() {
                        o("WAWebAppTracker").AppTracker.stop(e);
                    };
                }
            };
            a = [
                t,
                e
            ];
            n[0] = t;
            n[1] = e;
            n[2] = r;
            n[3] = a;
        } else {
            r = n[2];
            a = n[3];
        }
        useEffect(r, a);
    }
    l.default = u;
}, 98);