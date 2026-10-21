__d("useHeroBootloadedComponent", [
    "CometHeroInteractionContext",
    "react",
    "react-compiler-runtime"
], function(t, n, r, o, a, i, l) {
    "use strict";
    let e;
    const s = e || (e = o("react"));
    const { useContext, useEffect } = s;
    function useD(e) {
        const t = o("react-compiler-runtime").c(4);
        const n = useContext(r("CometHeroInteractionContext").Context);
        let a;
        let i;
        if (t[0] !== n || t[1] !== e) {
            a = function() {
                n.consumeBootload(e.getModuleId());
            };
            i = [
                n,
                e
            ];
            t[0] = n;
            t[1] = e;
            t[2] = a;
            t[3] = i;
        } else {
            a = t[2];
            i = t[3];
        }
        useEffect(a, i);
    }
    l.default = useD;
}, 98);