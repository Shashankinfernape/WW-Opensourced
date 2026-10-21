__d("BaseTextContext", [
    "react",
    "react-compiler-runtime"
], function(t, n, r, o, a, i, l) {
    "use strict";
    let e;
    const s = e || (e = o("react"));
    const u = e;
    const { useContext, useMemo } = u;
    const MContext = s.createContext(null);
    function p(e) {
        const t = o("react-compiler-runtime").c(5);
        const { children, nested } = e;
        let a;
        if (t[0] !== nested) {
            a = {
                nested
            };
            t[0] = nested;
            t[1] = a;
        } else {
            a = t[1];
        }
        const i = a;
        let l;
        if (t[2] !== children || t[3] !== i) {
            l = <MContext.Provider value={i}>{children}</MContext.Provider>;
            t[2] = children;
            t[3] = i;
            t[4] = l;
        } else {
            l = t[4];
        }
        return l;
    }
    function useComponent() {
        return useContext(MContext);
    }
    l.BaseTextContextProvider = p;
    l.useBaseTextContext = useComponent;
}, 98);