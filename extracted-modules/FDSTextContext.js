__d("FDSTextContext", [
    "FDSTextContext_Old.react",
    "react",
    "react-compiler-runtime"
], function(t, n, r, o, a, i, l) {
    "use strict";
    let e;
    const s = e || (e = o("react"));
    const e_useContext = e.useContext;
    const CContext = s.createContext(null);
    function d() {
        return e_useContext(CContext);
    }
    function MComponent(e) {
        const t = o("react-compiler-runtime").c(8);
        const { children, color, type } = e;
        if (type == null) {
            let l;
            if (t[0] !== children) {
                l = typeof children === "function" ? children(null) : children;
                t[0] = children;
                t[1] = l;
            } else {
                l = t[1];
            }
            let u;
            if (t[2] !== l) {
                u = <CContext.Provider value={null}>{l}</CContext.Provider>;
                t[2] = l;
                t[3] = u;
            } else {
                u = t[3];
            }
            return u;
        } else {
            const d = color ?? "primary";
            let m;
            if (t[4] !== children || t[5] !== d || t[6] !== type) {
                const Component = r("FDSTextContext_Old.react");
                m = <Component color={d} type={type}>{children}</Component>;
                t[4] = children;
                t[5] = d;
                t[6] = type;
                t[7] = m;
            } else {
                m = t[7];
            }
            return m;
        }
    }
    function p(e) {
        const t = o("react-compiler-runtime").c(2);
        let n;
        if (t[0] !== e) {
            n = s.jsx(r("FDSTextContext_Old.react"), babelHelpers.extends({}, e));
            t[0] = e;
            t[1] = n;
        } else {
            n = t[1];
        }
        return n;
    }
    l.FDSTextContext = CContext;
    l.useFDSTextContext = d;
    l.FDSTextContextProvider = MComponent;
    l.FDSTextContextProviderNonNull = p;
}, 98);