__d("useApplyEndpointModifiersToHref", [
    "BaseLinkEndpointModifierContext",
    "FBLogger",
    "isCometRouterUrl",
    "react",
    "react-compiler-runtime"
], function(t, n, r, o, a, i, l) {
    "use strict";
    let e;
    const s = e || (e = o("react"));
    const { useCallback, useContext } = s;
    function d(e, t, n) {
        if (t == null) {
            return null;
        }
        return e.reduce((acc, item)=>{
            const o = item(acc);
            if (n && !r("isCometRouterUrl")(o)) {
                r("FBLogger")("comet_infra").mustfix("Endpoint modifier returned a non-router URL, ignoring.");
                return acc;
            }
            return o;
        }, t);
    }
    function m(e) {
        const t = o("react-compiler-runtime").c(3);
        const n = e === undefined ? true : e;
        const a = useContext(r("BaseLinkEndpointModifierContext"));
        let i;
        if (t[0] !== n || t[1] !== a) {
            i = function(t) {
                return d(a, t, n);
            };
            t[0] = n;
            t[1] = a;
            t[2] = i;
        } else {
            i = t[2];
        }
        return i;
    }
    l.default = m;
}, 98);