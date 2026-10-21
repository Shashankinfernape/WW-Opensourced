__d("WAWebFullScreenEntryPointContext", [
    "react",
    "react-compiler-runtime"
], function(t, n, r, o, a, i, l) {
    "use strict";
    let e;
    const s = e || (e = o("react"));
    const u = e.useContext;
    const c = s.createContext(null);
    function d(e) {
        const t = o("react-compiler-runtime").c(3);
        const { children: n, value: r } = e;
        let a;
        if (t[0] !== n || t[1] !== r) {
            a = <c.Provider value={r}>{n}</c.Provider>;
            t[0] = n;
            t[1] = r;
            t[2] = a;
        } else {
            a = t[2];
        }
        return a;
    }
    function m() {
        return u(c);
    }
    l.WAWebFullScreenEntryPointProvider = d;
    l.useWAWebFullScreenEntryPoint = m;
}, 98);