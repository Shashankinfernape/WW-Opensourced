__d("WAWebErrorBoundaryInstrumented.react", [
    "WAWebErrorBoundary.react",
    "react",
    "react-compiler-runtime"
], function(t, n, r, o, a, i, l) {
    "use strict";
    const e = [
        "ref"
    ];
    const s = [
        "children"
    ];
    let u;
    const c = u || (u = o("react"));
    function d(t) {
        const n = o("react-compiler-runtime").c(8);
        let r;
        if (n[0] !== t) {
            const a = t.ref;
            const i = babelHelpers.objectWithoutPropertiesLoose(t, e);
            r = i;
            n[0] = t;
            n[1] = r;
        } else {
            r = n[1];
        }
        let l;
        let u;
        if (n[2] !== r) {
            const d = r;
            l = d.children;
            u = babelHelpers.objectWithoutPropertiesLoose(d, s);
            n[2] = r;
            n[3] = l;
            n[4] = u;
        } else {
            l = n[3];
            u = n[4];
        }
        let m;
        if (n[5] !== l || n[6] !== u) {
            m = c.jsx(o("WAWebErrorBoundary.react").ErrorBoundary, babelHelpers.extends({}, u, {
                children: l
            }));
            n[5] = l;
            n[6] = u;
            n[7] = m;
        } else {
            m = n[7];
        }
        return m;
    }
    l.default = d;
}, 98);