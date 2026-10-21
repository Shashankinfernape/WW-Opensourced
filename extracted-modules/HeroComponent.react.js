__d("HeroComponent.react", [
    "HeroInteractionContext",
    "HeroInteractionIDContext",
    "react",
    "react-compiler-runtime"
], function(t, n, r, o, a, i, l) {
    "use strict";
    let e;
    const s = e || (e = o("react"));
    const u = e;
    const { useContext, useLayoutEffect } = u;
    function HeroComponent(e) {
        const t = o("react-compiler-runtime").c(5);
        const e_description = e.description;
        const a = useContext(o("HeroInteractionContext").Context);
        const i = useContext(r("HeroInteractionIDContext"));
        let l;
        let s;
        if (t[0] !== e_description || t[1] !== a || t[2] !== i) {
            l = function() {
                if (i != null) {
                    a.logHeroRender(i, e_description, a.pageletStack);
                }
            };
            s = [
                e_description,
                a,
                i
            ];
            t[0] = e_description;
            t[1] = a;
            t[2] = i;
            t[3] = l;
            t[4] = s;
        } else {
            l = t[3];
            s = t[4];
        }
        useLayoutEffect(l, s);
        return null;
    }
    HeroComponent.displayName = "HeroComponent";
    const p = s.memo(HeroComponent);
    l.default = p;
}, 98);