__d("BaseTheme.react", [
    "BaseThemeProvider.react",
    "BaseView.react",
    "react",
    "react-compiler-runtime"
], function(t, n, r, o, a, i, l) {
    "use strict";
    const e = [
        "config",
        "displayMode",
        "ref",
        "style",
        "xstyle"
    ];
    let s;
    const u = s || (s = o("react"));
    function CComponent(t) {
        const n = o("react-compiler-runtime").c(16);
        let a;
        let i;
        let l;
        let s;
        let c;
        let d;
        if (n[0] !== t) {
            a = t.config;
            i = t.displayMode;
            s = t.ref;
            c = t.style;
            d = t.xstyle;
            l = babelHelpers.objectWithoutPropertiesLoose(t, e);
            n[0] = t;
            n[1] = a;
            n[2] = i;
            n[3] = l;
            n[4] = s;
            n[5] = c;
            n[6] = d;
        } else {
            a = n[1];
            i = n[2];
            l = n[3];
            s = n[4];
            c = n[5];
            d = n[6];
        }
        let m;
        if (n[7] !== l || n[8] !== s || n[9] !== c || n[10] !== d) {
            m = function(t, n) {
                return u.jsx(r("BaseView.react"), babelHelpers.extends({}, l, {
                    ref: s,
                    style: babelHelpers.extends({}, n, c),
                    xstyle: [
                        t,
                        d
                    ]
                }));
            };
            n[7] = l;
            n[8] = s;
            n[9] = c;
            n[10] = d;
            n[11] = m;
        } else {
            m = n[11];
        }
        let p;
        if (n[12] !== a || n[13] !== i || n[14] !== m) {
            const Component = r("BaseThemeProvider.react");
            p = <Component config={a} displayMode={i}>{m}</Component>;
            n[12] = a;
            n[13] = i;
            n[14] = m;
            n[15] = p;
        } else {
            p = n[15];
        }
        return p;
    }
    l.default = CComponent;
}, 98);