__d("BaseThemeProvider.react", [
    "BaseThemeConfigContext",
    "BaseThemeDisplayModeContext",
    "react",
    "react-compiler-runtime",
    "useCurrentDisplayMode"
], function(t, n, r, o, a, i, l) {
    "use strict";
    let e;
    const s = e || (e = o("react"));
    const u = e;
    const { useContext, useMemo } = u;
    function m(e) {
        const t = o("react-compiler-runtime").c(33);
        const { children, config, displayMode } = e;
        const l = useContext(r("BaseThemeConfigContext"));
        const u = r("useCurrentDisplayMode")();
        const d = displayMode ?? u;
        let theme;
        if (config != null && config.type === "CLASSNAMES") {
            theme = d === "dark" ? config.dark : config.light;
        } else {
            theme = d === "dark" ? l.darkClassName : l.lightClassName;
        }
        let _;
        if (t[0] !== theme) {
            _ = theme != null ? {
                $$css: true,
                theme
            } : null;
            t[0] = theme;
            t[1] = _;
        } else {
            _ = t[1];
        }
        const g = _;
        let h;
        e: {
            if (config != null) {
                if (config.type === "VARIABLES") {
                    let darkVariables;
                    if (t[2] !== config.dark || t[3] !== l.darkVariables) {
                        darkVariables = babelHelpers.extends({}, l.darkVariables, config.dark);
                        t[2] = config.dark;
                        t[3] = l.darkVariables;
                        t[4] = darkVariables;
                    } else {
                        darkVariables = t[4];
                    }
                    let lightVariables;
                    if (t[5] !== config.light || t[6] !== l.lightVariables) {
                        lightVariables = babelHelpers.extends({}, l.lightVariables, config.light);
                        t[5] = config.light;
                        t[6] = l.lightVariables;
                        t[7] = lightVariables;
                    } else {
                        lightVariables = t[7];
                    }
                    let b;
                    if (t[8] !== l || t[9] !== darkVariables || t[10] !== lightVariables) {
                        b = babelHelpers.extends({}, l, {
                            darkVariables,
                            lightVariables
                        });
                        t[8] = l;
                        t[9] = darkVariables;
                        t[10] = lightVariables;
                        t[11] = b;
                    } else {
                        b = t[11];
                    }
                    h = b;
                    break e;
                } else if (config.type === "CLASSNAMES") {
                    let v;
                    if (t[12] !== config.dark || t[13] !== config.light || t[14] !== l) {
                        v = babelHelpers.extends({}, l, {
                            darkClassName: config.dark,
                            lightClassName: config.light
                        });
                        t[12] = config.dark;
                        t[13] = config.light;
                        t[14] = l;
                        t[15] = v;
                    } else {
                        v = t[15];
                    }
                    h = v;
                    break e;
                }
            }
            h = l;
        }
        const S = h;
        let R;
        let L;
        let E;
        let k;
        let I;
        if (t[16] !== children || t[17] !== d || t[18] !== S || t[19] !== g) {
            const T = p(d === "dark" ? S.darkVariables : S.lightVariables);
            L = r("BaseThemeConfigContext").Provider;
            I = S;
            R = r("BaseThemeDisplayModeContext").Provider;
            E = d;
            k = children(g, T);
            t[16] = children;
            t[17] = d;
            t[18] = S;
            t[19] = g;
            t[20] = R;
            t[21] = L;
            t[22] = E;
            t[23] = k;
            t[24] = I;
        } else {
            R = t[20];
            L = t[21];
            E = t[22];
            k = t[23];
            I = t[24];
        }
        let D;
        if (t[25] !== R || t[26] !== E || t[27] !== k) {
            D = <R value={E}>{k}</R>;
            t[25] = R;
            t[26] = E;
            t[27] = k;
            t[28] = D;
        } else {
            D = t[28];
        }
        let x;
        if (t[29] !== L || t[30] !== I || t[31] !== D) {
            x = <L value={I}>{D}</L>;
            t[29] = L;
            t[30] = I;
            t[31] = D;
            t[32] = x;
        } else {
            x = t[32];
        }
        return x;
    }
    function p(e) {
        const t = {};
        Object.keys(e).forEach((n)=>{
            t[`--${n}`] = e[n];
        });
        return t;
    }
    l.default = m;
}, 98);