__d("useWAWebUnmountSignal", [
    "react",
    "react-compiler-runtime"
], function(t, n, r, o, a, i, l) {
    let e;
    const s = e || (e = o("react"));
    const { useEffect: u, useState: c } = s;
    function d() {
        const e = o("react-compiler-runtime").c(3);
        const t = c(m);
        const n = t[0];
        let r;
        let a;
        if (e[0] !== n) {
            r = function() {
                return function() {
                    return n.abort();
                };
            };
            a = [
                n
            ];
            e[0] = n;
            e[1] = r;
            e[2] = a;
        } else {
            r = e[1];
            a = e[2];
        }
        u(r, a);
        return n.signal;
    }
    function m() {
        return new AbortController;
    }
    l.default = d;
}, 98);