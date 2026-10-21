__d("useWAWebCloseMenusOnAgentTakeover", [
    "WDSGlobalContext",
    "react",
    "react-compiler-runtime"
], function(t, n, r, o, a, i, l) {
    let e;
    const s = e || (e = o("react"));
    const { useContext, useLayoutEffect, useRef } = s;
    function m(e) {
        const t = o("react-compiler-runtime").c(5);
        const n = useContext(o("WDSGlobalContext").WDSContext);
        const { closeAllMenus, currentOpenMenus } = n;
        const i = currentOpenMenus.size > 0;
        const lRef = useRef(e);
        let s;
        let m;
        if (t[0] !== closeAllMenus || t[1] !== i || t[2] !== e) {
            s = function() {
                const lRef_current = lRef.current;
                lRef.current = e;
                if (e && !lRef_current && i) {
                    closeAllMenus();
                }
            };
            m = [
                closeAllMenus,
                i,
                e
            ];
            t[0] = closeAllMenus;
            t[1] = i;
            t[2] = e;
            t[3] = s;
            t[4] = m;
        } else {
            s = t[3];
            m = t[4];
        }
        useLayoutEffect(s, m);
    }
    l.default = m;
}, 98);