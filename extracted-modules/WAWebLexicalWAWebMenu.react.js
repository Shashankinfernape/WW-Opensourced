__d("WAWebLexicalWAWebMenu.react", [
    "WAWebMenu.react",
    "WAWebPerformantMenu.react",
    "react",
    "react-compiler-runtime",
    "useWAWebLexicalMenuController"
], function(t, n, r, o, a, i, l) {
    let e;
    const s = e || (e = o("react"));
    function u(e) {
        const t = o("react-compiler-runtime").c(3);
        const n = o("useWAWebLexicalMenuController").useLexicalMenuController();
        let r;
        if (t[0] !== n || t[1] !== e) {
            r = s.jsx(o("WAWebMenu.react").WAWebMenu, babelHelpers.extends({}, e, {
                size: "medium",
                menuControllerRef: n
            }));
            t[0] = n;
            t[1] = e;
            t[2] = r;
        } else {
            r = t[2];
        }
        return r;
    }
    function c(e) {
        const t = o("react-compiler-runtime").c(3);
        const n = o("useWAWebLexicalMenuController").useLexicalMenuController();
        let r;
        if (t[0] !== n || t[1] !== e) {
            r = s.jsx(o("WAWebPerformantMenu.react").WDSPerformantMenu, babelHelpers.extends({}, e, {
                menuControllerRef: n
            }));
            t[0] = n;
            t[1] = e;
            t[2] = r;
        } else {
            r = t[2];
        }
        return r;
    }
    l.LexicalWAWebMenu = u;
    l.LexicalWAWebPerformantMenu = c;
}, 98);