__d("useWAWebToggle", [
    "react",
    "react-compiler-runtime",
    "useWAWebStableCallback"
], function(t, n, r, o, a, i, l) {
    let e;
    const s = e || (e = o("react"));
    const { useCallback, useState } = s;
    function d(e, t) {
        const n = o("react-compiler-runtime").c(5);
        const a = r("useWAWebStableCallback")(t);
        const i = useState(e);
        const l = i[0];
        const s = i[1];
        let u;
        if (n[0] !== a) {
            u = function() {
                return s(function(e) {
                    const t = !e;
                    a(t);
                    return t;
                });
            };
            n[0] = a;
            n[1] = u;
        } else {
            u = n[1];
        }
        const d = u;
        let m;
        if (n[2] !== l || n[3] !== d) {
            m = [
                l,
                d
            ];
            n[2] = l;
            n[3] = d;
            n[4] = m;
        } else {
            m = n[4];
        }
        return m;
    }
    l.default = d;
}, 98);