__d("useWAWebOnUnmount", [
    "react",
    "react-compiler-runtime",
    "useWAWebStableCallback"
], function(t, n, r, o, a, i, l) {
    let e;
    const s = (e || (e = o("react"))).useEffect;
    function u(e) {
        const t = o("react-compiler-runtime").c(3);
        const n = r("useWAWebStableCallback")(e);
        let a;
        let i;
        if (t[0] !== n) {
            a = function() {
                return n;
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
        s(a, i);
    }
    l.default = u;
}, 98);