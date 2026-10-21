__d("BaseToastContentWrapper.react", [
    "BaseTheme.react",
    "BaseView.react",
    "CometThemeInfraBaseTheme.react",
    "XPlatReactFocusRegion.react",
    "basePushToast",
    "focusScopeQueries",
    "react",
    "react-compiler-runtime",
    "useCometThemeInfraThemesWithPageFallback",
    "useCurrentDisplayMode"
], function(t, n, r, o, a, i, l) {
    "use strict";
    let e;
    const s = e || (e = o("react"));
    const u = {
        dark: "__fb-dark-mode ",
        light: "__fb-light-mode ",
        type: "CLASSNAMES"
    };
    function c(e) {
        const t = o("react-compiler-runtime").c(12);
        const { ariaLabelledBy, children, ref, role, testid, themeConfig, useInvertedDisplayMode, xstyle } = e;
        let _;
        if (t[0] === Symbol.for("react.memo_cache_sentinel")) {
            _ = o("basePushToast").passesNewToastAPIGK();
            t[0] = _;
        } else {
            _ = t[0];
        }
        const f = _;
        const g = r("useCurrentDisplayMode")();
        const h = g === "dark" ? "light" : "dark";
        const themes = r("useCometThemeInfraThemesWithPageFallback")();
        let C;
        if (t[1] !== ariaLabelledBy || t[2] !== children || t[3] !== themes || t[4] !== h || t[5] !== ref || t[6] !== role || t[7] !== testid || t[8] !== themeConfig || t[9] !== useInvertedDisplayMode || t[10] !== xstyle) {
            const Component = r("CometThemeInfraBaseTheme.react");
            const Component_1 = r("BaseTheme.react");
            const Component_2 = r("BaseView.react");
            const b = useInvertedDisplayMode ? themes.auto != null ? <Component aria-labelledby={ariaLabelledBy} displayMode={h} ref={ref} role={role} testid={undefined} themes={themes} xstyle={xstyle}>{children}</Component> : <Component_1 aria-labelledby={ariaLabelledBy} config={themeConfig ?? u} displayMode={h} ref={ref} role={role} testid={undefined} xstyle={xstyle}>{children}</Component_1> : <Component_2 aria-labelledby={ariaLabelledBy} ref={ref} role={role} testid={undefined} xstyle={xstyle}>{children}</Component_2>;
            const Component_3 = r("XPlatReactFocusRegion.react");
            C = f ? <Component_3 autoRestoreFocus containFocusQuery={o("focusScopeQueries").tabbableScopeQuery}>{b}</Component_3> : b;
            t[1] = ariaLabelledBy;
            t[2] = children;
            t[3] = themes;
            t[4] = h;
            t[5] = ref;
            t[6] = role;
            t[7] = testid;
            t[8] = themeConfig;
            t[9] = useInvertedDisplayMode;
            t[10] = xstyle;
            t[11] = C;
        } else {
            C = t[11];
        }
        return C;
    }
    l.default = c;
}, 98);