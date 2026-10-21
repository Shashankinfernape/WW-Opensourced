__d("useWAWebFocusState", [
    "react",
    "react-compiler-runtime",
    "react-gui-use-focus",
    "react-gui-use-focus-visibility"
], function(t, n, r, o, a, i, l) {
    let e;
    const s = (e || (e = o("react"))).useState;
    function u() {
        const e = o("react-compiler-runtime").c(4);
        const t = s(false);
        const n = t[0];
        const r = t[1];
        const a = o("react-gui-use-focus-visibility").useFocusVisibility();
        let i;
        if (e[0] === Symbol.for("react.memo_cache_sentinel")) {
            i = {
                onFocusChange: r
            };
            e[0] = i;
        } else {
            i = e[0];
        }
        const l = o("react-gui-use-focus").useFocus(i);
        const u = n && a;
        let c;
        if (e[1] !== u || e[2] !== l) {
            c = [
                l,
                u
            ];
            e[1] = u;
            e[2] = l;
            e[3] = c;
        } else {
            c = e[3];
        }
        return c;
    }
    l.default = u;
}, 98);