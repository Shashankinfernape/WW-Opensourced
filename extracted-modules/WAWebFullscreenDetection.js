__d("WAWebFullscreenDetection", [
    "react",
    "react-compiler-runtime",
    "useWAWebStableCallback"
], function(t, n, r, o, a, i, l) {
    "use strict";
    let e;
    const useEffect = (e || (e = o("react"))).useEffect;
    const u = window.matchMedia("(display-mode: fullscreen)");
    function c() {
        return u.matches;
    }
    function d(e) {
        const t = function(n) {
            e(n.matches);
        };
        u.addEventListener("change", t);
        return function() {
            u.removeEventListener("change", t);
        };
    }
    function m(e) {
        const t = o("react-compiler-runtime").c(3);
        const n = r("useWAWebStableCallback")(e);
        let a;
        let i;
        if (t[0] !== n) {
            a = function() {
                return d(n);
            };
            i = [
                n
            ];
            t[0] = n;
            t[1] = a;
            t[2] = i;
        } else {
            a = t[1];
            i = t[2];
        }
        useEffect(a, i);
    }
    l.isFullscreen = c;
    l.useOnFullscreenChange = m;
}, 98);