__d("useTransformRelativeUri", [
    "BaseLinkUriBaseContext",
    "ConstUriUtils",
    "isRelativeURL",
    "react",
    "react-compiler-runtime"
], function(t, n, r, o, a, i, l) {
    "use strict";
    let e;
    const s = e || (e = o("react"));
    const { useContext, useMemo } = s;
    function d(e, t) {
        if (r("isRelativeURL")(t)) {
            const n = o("ConstUriUtils").getUri(t);
            if (n != null) {
                const i = e.addQueryParams(n.getQueryParams())?.setPath(n.getPath())?.setFragment(n.getFragment())?.toString();
                if (i != null) {
                    return i;
                }
            }
        }
        return t;
    }
    function m(e) {
        const t = o("react-compiler-runtime").c(3);
        const n = useContext(r("BaseLinkUriBaseContext"));
        let a;
        if (t[0] !== e || t[1] !== n) {
            a = n == null || e == null ? e : d(n, e);
            t[0] = e;
            t[1] = n;
            t[2] = a;
        } else {
            a = t[2];
        }
        return a;
    }
    l.default = m;
}, 98);