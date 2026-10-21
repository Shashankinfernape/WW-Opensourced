__d("WAWebActionMenuItem.react", [
    "WAWebCellMenuItem.react",
    "react",
    "react-compiler-runtime"
], function(t, n, r, o, a, i, l) {
    const e = [
        "ref"
    ];
    let s;
    const u = s || (s = o("react"));
    function c(t) {
        const n = o("react-compiler-runtime").c(6);
        let r;
        let a;
        if (n[0] !== t) {
            a = t.ref;
            r = babelHelpers.objectWithoutPropertiesLoose(t, e);
            n[0] = t;
            n[1] = r;
            n[2] = a;
        } else {
            r = n[1];
            a = n[2];
        }
        let i;
        if (n[3] !== r || n[4] !== a) {
            i = u.jsx(o("WAWebCellMenuItem.react").CellV2MenuItem, babelHelpers.extends({
                ref: a
            }, r, {
                type: "action"
            }));
            n[3] = r;
            n[4] = a;
            n[5] = i;
        } else {
            i = n[5];
        }
        return i;
    }
    l.ActionMenuItem = c;
}, 98);