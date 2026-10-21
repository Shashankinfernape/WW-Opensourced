__d("CometExceptionDialog.react", [
    "cr:17519",
    "react",
    "react-compiler-runtime"
], function(t, n, r, o, a, i, l) {
    "use strict";
    const e = [
        "testid"
    ];
    let s;
    const u = s || (s = o("react"));
    function c(t) {
        const r = o("react-compiler-runtime").c(6);
        let a;
        let i;
        if (r[0] !== t) {
            i = t.testid;
            a = babelHelpers.objectWithoutPropertiesLoose(t, e);
            r[0] = t;
            r[1] = a;
            r[2] = i;
        } else {
            a = r[1];
            i = r[2];
        }
        const l = i === undefined ? "comet-exception-dialog" : i;
        let s;
        if (r[3] !== a || r[4] !== l) {
            s = u.jsx(n("cr:17519"), babelHelpers.extends({}, a, {
                testid: undefined
            }));
            r[3] = a;
            r[4] = l;
            r[5] = s;
        } else {
            s = r[5];
        }
        return s;
    }
    l.default = c;
}, 98);