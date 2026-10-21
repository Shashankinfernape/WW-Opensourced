__d("WAWebLoadable", [
    "react",
    "react-compiler-runtime",
    "react-loadable"
], function(t, n, r, o, a, i, l) {
    const e = [
        "forwardedRefDoNotUse"
    ];
    const s = [
        "ref"
    ];
    let u;
    const c = u || (u = o("react"));
    function d({ loader: n, loading: a, renderLoadingImmediately: l = false }) {
        const U = r("react-loadable")({
            loader: n,
            loading: function(t) {
                if (!t.pastDelay && !l) {
                    return null;
                }
                return a(t);
            },
            render: function(n, r) {
                const t = r.forwardedRefDoNotUse;
                const o = babelHelpers.objectWithoutPropertiesLoose(r, e);
                return c.jsx(n, babelHelpers.extends({
                    ref: t
                }, o));
            }
        });
        function d(e) {
            const t = o("react-compiler-runtime").c(6);
            let n;
            let r;
            if (t[0] !== e) {
                r = e.ref;
                n = babelHelpers.objectWithoutPropertiesLoose(e, s);
                t[0] = e;
                t[1] = n;
                t[2] = r;
            } else {
                n = t[1];
                r = t[2];
            }
            let a;
            if (t[3] !== n || t[4] !== r) {
                a = <U {...babelHelpers.extends({
                    forwardedRefDoNotUse: r
                }, n)}/>;
                t[3] = n;
                t[4] = r;
                t[5] = a;
            } else {
                a = t[5];
            }
            return a;
        }
        return d;
    }
    l.default = d;
}, 98);