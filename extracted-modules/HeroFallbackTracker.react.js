__d("HeroFallbackTracker.react", [
    "HeroInteractionContext",
    "HeroInteractionIDContext",
    "react",
    "react-compiler-runtime"
], function(t, n, r, o, a, i, l) {
    "use strict";
    let e;
    const s = e || (e = o("react"));
    const { useContext, useLayoutEffect } = s;
    function HeroFallbackTracker(e) {
        const t = o("react-compiler-runtime").c(5);
        const e_uuid = e.uuid;
        const a = useContext(o("HeroInteractionContext").Context);
        const i = useContext(r("HeroInteractionIDContext"));
        let l;
        let s;
        if (t[0] !== a || t[1] !== i || t[2] !== e_uuid) {
            l = function() {
                if (i != null) {
                    a.registerPlaceholder(i, e_uuid, a.pageletStack);
                    return function() {
                        a.removePlaceholder(i, e_uuid);
                    };
                }
            };
            s = [
                a,
                i,
                e_uuid
            ];
            t[0] = a;
            t[1] = i;
            t[2] = e_uuid;
            t[3] = l;
            t[4] = s;
        } else {
            l = t[3];
            s = t[4];
        }
        useLayoutEffect(l, s);
        return null;
    }
    HeroFallbackTracker.displayName = "HeroFallbackTracker";
    l.default = HeroFallbackTracker;
}, 98);