__d("BaseLinkV2.react", [
    "BaseLinkInternal.react",
    "react",
    "react-compiler-runtime"
], function(t, n, r, o, a, i, l) {
    "use strict";
    const e = [
        "ref",
        "children",
        "variant"
    ];
    let s;
    const u = s || (s = o("react"));
    function c(t) {
        const a = o("react-compiler-runtime").c(10);
        let i;
        let l;
        let s;
        let c;
        if (a[0] !== t) {
            s = t.ref;
            i = t.children;
            c = t.variant;
            l = babelHelpers.objectWithoutPropertiesLoose(t, e);
            a[0] = t;
            a[1] = i;
            a[2] = l;
            a[3] = s;
            a[4] = c;
        } else {
            i = a[1];
            l = a[2];
            s = a[3];
            c = a[4];
        }
        const d = c.xstyleConfig?.link;
        let m;
        if (a[5] !== i || a[6] !== l || a[7] !== s || a[8] !== d) {
            m = u.jsx(r("BaseLinkInternal.react"), babelHelpers.extends({}, l, {
                ref: s,
                style: d,
                children: i
            }));
            a[5] = i;
            a[6] = l;
            a[7] = s;
            a[8] = d;
            a[9] = m;
        } else {
            m = a[9];
        }
        return m;
    }
    l.default = c;
}, 98);