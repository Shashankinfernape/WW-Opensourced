__d("BaseContextualLayerDefaultContainer.react", [
    "LegacyHidden",
    "react",
    "react-compiler-runtime",
    "stylex",
    "testID"
], function(t, n, r, o, a, i, l) {
    "use strict";
    let e;
    let s;
    const u = s || (s = o("react"));
    function c(t) {
        const n = o("react-compiler-runtime").c(13);
        const { children, hidden, ref, stopClickPropagation, testid, xstyle } = t;
        let p;
        if (n[0] !== testid) {
            p = r("testID")(testid);
            n[0] = testid;
            n[1] = p;
        } else {
            p = n[1];
        }
        let _;
        if (n[2] !== xstyle) {
            _ = (e || (e = r("stylex")))(xstyle);
            n[2] = xstyle;
            n[3] = _;
        } else {
            _ = n[3];
        }
        const f = stopClickPropagation === true ? d : undefined;
        let htmlAttributes;
        if (n[4] !== p || n[5] !== _ || n[6] !== f) {
            htmlAttributes = babelHelpers.extends({}, p, {
                className: _,
                onClick: f
            });
            n[4] = p;
            n[5] = _;
            n[6] = f;
            n[7] = htmlAttributes;
        } else {
            htmlAttributes = n[7];
        }
        const mode = hidden ? "hidden" : "visible";
        let y;
        if (n[8] !== children || n[9] !== ref || n[10] !== htmlAttributes || n[11] !== mode) {
            const Component = r("LegacyHidden");
            y = <Component htmlAttributes={htmlAttributes} mode={mode} ref={ref}>{children}</Component>;
            n[8] = children;
            n[9] = ref;
            n[10] = htmlAttributes;
            n[11] = mode;
            n[12] = y;
        } else {
            y = n[12];
        }
        return y;
    }
    function d(e) {
        return e.stopPropagation();
    }
    l.default = c;
}, 98);