__d("CometHidden", [
    "CometHiddenAPIContext",
    "LegacyHidden",
    "react",
    "react-compiler-runtime"
], function(t, n, r, o, a, i, l) {
    "use strict";
    const e = [
        "ref"
    ];
    let s;
    const u = s || (s = o("react"));
    const c = s;
    const { unstable_Activity: UnstableActivity, useContext } = c;
    function CometHidden(t) {
        const n = o("react-compiler-runtime").c(17);
        let a;
        let i;
        if (n[0] !== t) {
            a = t.ref;
            i = babelHelpers.objectWithoutPropertiesLoose(t, e);
            n[0] = t;
            n[1] = a;
            n[2] = i;
        } else {
            a = n[1];
            i = n[2];
        }
        const l = i;
        const { children, htmlAttributes, mode, suppressHydrationWarning } = l;
        const f = useContext(r("CometHiddenAPIContext"));
        if (f) {
            let g;
            if (n[3] !== children || n[4] !== a || n[5] !== htmlAttributes || n[6] !== mode || n[7] !== suppressHydrationWarning) {
                const Component = r("LegacyHidden");
                g = <Component htmlAttributes={htmlAttributes} mode={mode} ref={a} suppressHydrationWarning={suppressHydrationWarning}>{children}</Component>;
                n[3] = children;
                n[4] = a;
                n[5] = htmlAttributes;
                n[6] = mode;
                n[7] = suppressHydrationWarning;
                n[8] = g;
            } else {
                g = n[8];
            }
            return g;
        }
        const h = mode === "hidden" ? "hidden" : "visible";
        let y;
        if (n[9] !== children || n[10] !== a || n[11] !== htmlAttributes || n[12] !== suppressHydrationWarning) {
            y = <div {...babelHelpers.extends({}, htmlAttributes, {
                ref: a,
                suppressHydrationWarning,
                children
            })}/>;
            n[9] = children;
            n[10] = a;
            n[11] = htmlAttributes;
            n[12] = suppressHydrationWarning;
            n[13] = y;
        } else {
            y = n[13];
        }
        let C;
        if (n[14] !== h || n[15] !== y) {
            C = <UnstableActivity mode={h}>{y}</UnstableActivity>;
            n[14] = h;
            n[15] = y;
            n[16] = C;
        } else {
            C = n[16];
        }
        return C;
    }
    CometHidden.displayName = "CometHidden";
    l.default = CometHidden;
}, 98);