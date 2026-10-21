__d("WAWebPortalThemeWrapper.react", [
    "WAWebChatThemeModeContext",
    "react",
    "react-compiler-runtime",
    "stylex"
], function(t, n, r, o, a, i, l) {
    let e;
    let s;
    const u = s || (s = o("react"));
    const s_useContext = s.useContext;
    const d = {
        root: {
            display: "xjp7ctv",
            $$css: true
        }
    };
    function m(t) {
        const n = o("react-compiler-runtime").c(5);
        const { children, wallpaperStyle } = t;
        const l = s_useContext(r("WAWebChatThemeModeContext"));
        const l_wallpaperStyle = l.wallpaperStyle;
        const m = wallpaperStyle ?? l_wallpaperStyle;
        let p;
        if (n[0] !== m) {
            p = (e || (e = r("stylex"))).props(d.root, m);
            n[0] = m;
            n[1] = p;
        } else {
            p = n[1];
        }
        let _;
        if (n[2] !== children || n[3] !== p) {
            _ = <div {...babelHelpers.extends({}, p, {
                children
            })}/>;
            n[2] = children;
            n[3] = p;
            n[4] = _;
        } else {
            _ = n[4];
        }
        return _;
    }
    l.default = m;
}, 98);