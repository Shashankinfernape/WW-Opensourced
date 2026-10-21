__d("WAWebContentEntryPointContext", [
    "react",
    "react-compiler-runtime"
], function(t, n, r, o, a, i, l) {
    "use strict";
    let e;
    const s = e || (e = o("react"));
    const e_useContext = e.useContext;
    const CContext = s.createContext(null);
    function d(e) {
        const t = o("react-compiler-runtime").c(3);
        const { children, value } = e;
        let a;
        if (t[0] !== children || t[1] !== value) {
            a = <CContext.Provider value={value}>{children}</CContext.Provider>;
            t[0] = children;
            t[1] = value;
            t[2] = a;
        } else {
            a = t[2];
        }
        return a;
    }
    function m() {
        return e_useContext(CContext);
    }
    l.WAWebContentEntryPointProvider = d;
    l.useWAWebContentEntryPoint = m;
}, 98);