__d("BaseDisabledContext", [
    "react",
    "react-compiler-runtime"
], function(t, n, r, o, a, i, l) {
    "use strict";
    let e;
    const s = e || (e = o("react"));
    const e_useContext = e.useContext;
    const CContext = s.createContext(undefined);
    function DComponent(e) {
        const t = o("react-compiler-runtime").c(3);
        const { children, disabled } = e;
        let a;
        if (t[0] !== children || t[1] !== disabled) {
            a = <CContext.Provider value={disabled}>{children}</CContext.Provider>;
            t[0] = children;
            t[1] = disabled;
            t[2] = a;
        } else {
            a = t[2];
        }
        return a;
    }
    function m() {
        return e_useContext(CContext);
    }
    l.BaseDisabledContextProvider = DComponent;
    l.useBaseDisabledContext = m;
}, 98);