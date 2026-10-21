__d("CometKeyCommandWrapper.react", [
    "CometKeyCommandWidget",
    "react",
    "react-compiler-runtime"
], function(t, n, r, o, a, i, l) {
    "use strict";
    const e = [
        "children"
    ];
    let s;
    const u = s || (s = o("react"));
    function c(t) {
        const n = o("react-compiler-runtime").c(6);
        let a;
        let i;
        if (n[0] !== t) {
            a = t.children;
            i = babelHelpers.objectWithoutPropertiesLoose(t, e);
            n[0] = t;
            n[1] = a;
            n[2] = i;
        } else {
            a = n[1];
            i = n[2];
        }
        let l;
        if (n[3] !== a || n[4] !== i) {
            l = u.jsx(r("CometKeyCommandWidget").Wrapper, babelHelpers.extends({}, i, {
                children: a
            }));
            n[3] = a;
            n[4] = i;
            n[5] = l;
        } else {
            l = n[5];
        }
        return l;
    }
    l.default = c;
}, 98);