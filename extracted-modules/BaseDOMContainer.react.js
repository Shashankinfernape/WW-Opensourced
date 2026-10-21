__d("BaseDOMContainer.react", [
    "react",
    "react-compiler-runtime",
    "useMergeRefs"
], function(t, n, r, o, a, i, l) {
    "use strict";
    let e;
    const s = e || (e = o("react"));
    const u = e;
    const { useLayoutEffect, useRef } = u;
    function MComponent(e) {
        const t = o("react-compiler-runtime").c(5);
        const { node, ref } = e;
        const iRef = useRef(null);
        let l;
        let u;
        if (t[0] !== node) {
            l = function() {
                const iRef_current = iRef.current;
                if (node != null && iRef_current != null) {
                    iRef_current.appendChild(node);
                    return function() {
                        iRef_current.removeChild(node);
                    };
                }
            };
            u = [
                node
            ];
            t[0] = node;
            t[1] = l;
            t[2] = u;
        } else {
            l = t[1];
            u = t[2];
        }
        useLayoutEffect(l, u);
        const m = r("useMergeRefs")(ref, iRef);
        let p;
        if (t[3] !== m) {
            p = <div ref={m}/>;
            t[3] = m;
            t[4] = p;
        } else {
            p = t[4];
        }
        return p;
    }
    const p = s.memo(MComponent);
    l.default = p;
}, 98);