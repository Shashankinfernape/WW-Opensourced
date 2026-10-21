__d("WAWebAppContext.react", [
    "WALogger",
    "WAWebNavBarTypes",
    "react",
    "react-compiler-runtime"
], function(t, n, r, o, a, i, l) {
    let e;
    let s;
    const u = s || (s = o("react"));
    const c = s;
    const { createContext, useContext, useEffect } = c;
    const _ = {
        rightDrawerOpen: false,
        activeNavBarItem: o("WAWebNavBarTypes").NavBarItems.Chats
    };
    const FContext = createContext(_);
    function g(e) {
        const t = o("react-compiler-runtime").c(6);
        const { activeNavBarItem, children, rightDrawerOpen } = e;
        let i;
        if (t[0] !== activeNavBarItem || t[1] !== rightDrawerOpen) {
            i = {
                rightDrawerOpen,
                activeNavBarItem
            };
            t[0] = activeNavBarItem;
            t[1] = rightDrawerOpen;
            t[2] = i;
        } else {
            i = t[2];
        }
        const l = i;
        let s;
        if (t[3] !== children || t[4] !== l) {
            s = <FContext.Provider value={l}>{children}</FContext.Provider>;
            t[3] = children;
            t[4] = l;
            t[5] = s;
        } else {
            s = t[5];
        }
        return s;
    }
    function h() {
        const t = useContext(FContext);
        useEffect(function() {
            if (t === _) {
                o("WALogger").WARN(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                    "[AppContext] useAppContext requires AppContext provider"
                ])));
            }
        }, []);
        return t;
    }
    l.AppContextProvider = g;
    l.useAppContext = h;
}, 98);