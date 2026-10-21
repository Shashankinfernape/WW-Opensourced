__d("HeroHoldTrigger.react", [
    "HeroHoldLoggingBoundaryContext",
    "HeroInteractionContext",
    "HeroInteractionIDContext",
    "react",
    "react-compiler-runtime"
], function(t, n, r, o, a, i, l) {
    "use strict";
    let e;
    const s = e || (e = o("react"));
    const { useContext, useLayoutEffect } = s;
    function HeroHoldTrigger(e) {
        const n = o("react-compiler-runtime").c(8);
        const { description, hold } = e;
        const l = useContext(o("HeroInteractionContext").Context);
        const s = useContext(r("HeroInteractionIDContext"));
        const d = useContext(r("HeroHoldLoggingBoundaryContext"));
        const m = d?.placeholderUUID;
        const p = d?.boundaryName ?? undefined;
        let _;
        let f;
        if (n[0] !== p || n[1] !== m || n[2] !== description || n[3] !== l || n[4] !== hold || n[5] !== s) {
            _ = function() {
                if (hold && s != null) {
                    const e = l.hold(s, l.pageletStack, description, m, p);
                    return function() {
                        l.unhold(s, e);
                    };
                }
            };
            f = [
                description,
                l,
                s,
                hold,
                m,
                p
            ];
            n[0] = p;
            n[1] = m;
            n[2] = description;
            n[3] = l;
            n[4] = hold;
            n[5] = s;
            n[6] = _;
            n[7] = f;
        } else {
            _ = n[6];
            f = n[7];
        }
        useLayoutEffect(_, f);
        return null;
    }
    HeroHoldTrigger.displayName = "HeroHoldTrigger";
    l.default = HeroHoldTrigger;
}, 98);