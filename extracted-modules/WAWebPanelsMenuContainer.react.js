__d("WAWebPanelsMenuContainer.react", [
    "$InternalEnum",
    "WAWebPanelsMenuContainerStyles",
    "WAWebStopEvent",
    "react",
    "react-compiler-runtime",
    "stylex"
], function(t, n, r, o, a, i, l) {
    let e;
    let s;
    const u = s || (s = o("react"));
    const c = n("$InternalEnum").Mirrored([
        "TAB_MARKER_SEPARATOR",
        "SHADOW"
    ]);
    function d(t) {
        const n = o("react-compiler-runtime").c(6);
        const { children, role, theme } = t;
        let s;
        if (n[0] !== theme) {
            s = (e || (e = r("stylex"))).props(o("WAWebPanelsMenuContainerStyles").panelsMenuContainerStyles.container, theme === c.TAB_MARKER_SEPARATOR && o("WAWebPanelsMenuContainerStyles").panelsMenuContainerStyles.menuTabMakerReactions, theme === c.SHADOW && o("WAWebPanelsMenuContainerStyles").panelsMenuContainerStyles.shadow);
            n[0] = theme;
            n[1] = s;
        } else {
            s = n[1];
        }
        let d;
        if (n[2] !== children || n[3] !== role || n[4] !== s) {
            d = <div {...babelHelpers.extends({
                role
            }, s, {
                onMouseDown: o("WAWebStopEvent").stopPropagation,
                children
            })}/>;
            n[2] = children;
            n[3] = role;
            n[4] = s;
            n[5] = d;
        } else {
            d = n[5];
        }
        return d;
    }
    l.MenuContainerTheme = c;
    l.MenuContainer = d;
}, 98);