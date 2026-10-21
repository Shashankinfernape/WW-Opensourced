__d("WAWebVoipDarkThemeRoot.react", [
    "WAWebFlex.react",
    "WAWebNoop",
    "WAWebThemeContext",
    "WDSThemes",
    "react",
    "react-compiler-runtime"
], function(t, n, r, o, a, i, l) {
    "use strict";
    let e;
    const s = e || (e = o("react"));
    const u = {
        theme: "dark",
        setTheme: r("WAWebNoop"),
        setSystemThemeMode: r("WAWebNoop"),
        systemThemeMode: false
    };
    function c(e) {
        const t = o("react-compiler-runtime").c(8);
        const { children, ref, tabIndex, testid, xstyle } = e;
        let c;
        if (t[0] !== xstyle) {
            c = [
                o("WDSThemes").WDSDarkTheme,
                xstyle
            ];
            t[0] = xstyle;
            t[1] = c;
        } else {
            c = t[1];
        }
        let d;
        if (t[2] !== children || t[3] !== ref || t[4] !== c || t[5] !== tabIndex || t[6] !== testid) {
            const Component = o("WAWebFlex.react").FlexColumn;
            const Component_1 = o("WAWebThemeContext").ThemeContext.Provider;
            d = <Component_1 value={u}><Component ref={ref} tabIndex={tabIndex} testid={testid} xstyle={c}>{children}</Component></Component_1>;
            t[2] = children;
            t[3] = ref;
            t[4] = c;
            t[5] = tabIndex;
            t[6] = testid;
            t[7] = d;
        } else {
            d = t[7];
        }
        return d;
    }
    l.default = c;
}, 98);