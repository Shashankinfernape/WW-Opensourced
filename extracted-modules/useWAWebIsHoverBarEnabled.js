__d("useWAWebIsHoverBarEnabled", [
    "WAWebReactionGatingUtils",
    "react-compiler-runtime",
    "useWAWebMessageHoverBar"
], function(t, n, r, o, a, i, l) {
    function e() {
        const e = o("react-compiler-runtime").c(2);
        const t = r("useWAWebMessageHoverBar")();
        const t_isAvailable = t.isAvailable;
        let a;
        if (e[0] !== t_isAvailable) {
            a = o("WAWebReactionGatingUtils").isHoverBarEnabled() && t_isAvailable;
            e[0] = t_isAvailable;
            e[1] = a;
        } else {
            a = e[1];
        }
        return a;
    }
    l.default = e;
}, 98);