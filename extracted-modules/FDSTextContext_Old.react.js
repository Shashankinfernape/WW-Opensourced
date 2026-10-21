__d("FDSTextContext_Old.react", [
    "CometTextTypography",
    "FDSTextContext",
    "react",
    "react-compiler-runtime"
], function(t, n, r, o, a, i, l) {
    "use strict";
    let e;
    const s = e || (e = o("react"));
    const e_useMemo = e.useMemo;
    const c = {
        disabled: "disabledButton",
        highlight: "primaryDeemphasizedButton",
        secondary: "secondaryButton",
        white: "primaryButton"
    };
    function d(e, t) {
        let n;
        if (t && (n = c[e]) != null) {
            return n;
        }
        return e;
    }
    function m(e) {
        const t = o("react-compiler-runtime").c(12);
        const { children, color, type } = e;
        const defaultColor = r("CometTextTypography")[type].defaultColor;
        const u = defaultColor === undefined ? "primary" : defaultColor;
        const c = color ?? u;
        const m = type === "button1" || type === "button2";
        let p;
        if (t[0] !== c || t[1] !== m) {
            p = d(c, m);
            t[0] = c;
            t[1] = m;
            t[2] = p;
        } else {
            p = t[2];
        }
        const _ = p;
        let f;
        if (t[3] !== _ || t[4] !== type) {
            f = {
                color: _,
                type
            };
            t[3] = _;
            t[4] = type;
            t[5] = f;
        } else {
            f = t[5];
        }
        const g = f;
        let h;
        if (t[6] !== children || t[7] !== g) {
            h = typeof children === "function" ? children(g) : children;
            t[6] = children;
            t[7] = g;
            t[8] = h;
        } else {
            h = t[8];
        }
        let y;
        if (t[9] !== g || t[10] !== h) {
            const Component = o("FDSTextContext").FDSTextContext.Provider;
            y = <Component value={g}>{h}</Component>;
            t[9] = g;
            t[10] = h;
            t[11] = y;
        } else {
            y = t[11];
        }
        return y;
    }
    l.default = m;
}, 98);