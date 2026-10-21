__d("CometThemeInfraBaseTheme.react", [
    "BaseView.react",
    "CometThemeInfraBaseThemeContext.react",
    "react",
    "react-compiler-runtime"
], function(t, n, r, o, a, i, l) {
    "use strict";
    const e = [
        "displayMode",
        "ref",
        "themes",
        "children",
        "xstyle"
    ];
    let s;
    const u = s || (s = o("react"));
    function CComponent(t) {
        const n = o("react-compiler-runtime").c(18);
        let a;
        let i;
        let l;
        let s;
        let c;
        let d;
        if (n[0] !== t) {
            i = t.displayMode;
            s = t.ref;
            c = t.themes;
            a = t.children;
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
        const m = c[i ?? "auto"];
        let xstyle;
        if (n[7] !== m || n[8] !== d) {
            xstyle = [
                m,
                d
            ];
            n[7] = m;
            n[8] = d;
            n[9] = xstyle;
        } else {
            xstyle = n[9];
        }
        let _;
        if (n[10] !== a || n[11] !== l || n[12] !== s || n[13] !== xstyle) {
            _ = u.jsx(r("BaseView.react"), babelHelpers.extends({
                xstyle
            }, l, {
                ref: s,
                children: a
            }));
            n[10] = a;
            n[11] = l;
            n[12] = s;
            n[13] = xstyle;
            n[14] = _;
        } else {
            _ = n[14];
        }
        let f;
        if (n[15] !== _ || n[16] !== c) {
            const Component = r("CometThemeInfraBaseThemeContext.react").Provider;
            f = <Component value={c}>{_}</Component>;
            n[15] = _;
            n[16] = c;
            n[17] = f;
        } else {
            f = n[17];
        }
        return f;
    }
    l.default = CComponent;
}, 98);