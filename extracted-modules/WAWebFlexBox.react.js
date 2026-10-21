__d("WAWebFlexBox.react", [
    "WAWebBox.react",
    "react",
    "react-compiler-runtime"
], function(t, n, r, o, a, i, l) {
    const e = [
        "ref"
    ];
    const s = [
        "ref"
    ];
    const u = [
        "ref"
    ];
    let c;
    const d = c || (c = o("react"));
    function m(t) {
        const n = o("react-compiler-runtime").c(6);
        let a;
        let i;
        if (n[0] !== t) {
            i = t.ref;
            a = babelHelpers.objectWithoutPropertiesLoose(t, e);
            n[0] = t;
            n[1] = a;
            n[2] = i;
        } else {
            a = n[1];
            i = n[2];
        }
        let l;
        if (n[3] !== a || n[4] !== i) {
            l = d.jsx(r("WAWebBox.react"), babelHelpers.extends({}, a, {
                flex: true,
                direction: "horizontal",
                ref: i
            }));
            n[3] = a;
            n[4] = i;
            n[5] = l;
        } else {
            l = n[5];
        }
        return l;
    }
    function p(e) {
        const t = o("react-compiler-runtime").c(6);
        let n;
        let a;
        if (t[0] !== e) {
            a = e.ref;
            n = babelHelpers.objectWithoutPropertiesLoose(e, s);
            t[0] = e;
            t[1] = n;
            t[2] = a;
        } else {
            n = t[1];
            a = t[2];
        }
        let i;
        if (t[3] !== n || t[4] !== a) {
            i = d.jsx(r("WAWebBox.react"), babelHelpers.extends({}, n, {
                flex: true,
                direction: "vertical",
                ref: a
            }));
            t[3] = n;
            t[4] = a;
            t[5] = i;
        } else {
            i = t[5];
        }
        return i;
    }
    function _(e) {
        const t = o("react-compiler-runtime").c(6);
        let n;
        let a;
        if (t[0] !== e) {
            a = e.ref;
            n = babelHelpers.objectWithoutPropertiesLoose(e, u);
            t[0] = e;
            t[1] = n;
            t[2] = a;
        } else {
            n = t[1];
            a = t[2];
        }
        let i;
        if (t[3] !== n || t[4] !== a) {
            i = d.jsx(r("WAWebBox.react"), babelHelpers.extends({}, n, {
                ref: a
            }));
            t[3] = n;
            t[4] = a;
            t[5] = i;
        } else {
            i = t[5];
        }
        return i;
    }
    l.FlexRow = m;
    l.FlexColumn = p;
    l.FlexItem = _;
}, 98);