__d("useWAWebAdaptiveLayoutMode", [
    "WAWebAdaptiveLayoutConfig",
    "react",
    "react-compiler-runtime",
    "useWAWebWindowSize"
], function(t, n, r, o, a, i, l) {
    let e;
    const useMemo = (e || (e = o("react"))).useMemo;
    function u() {
        const e = o("react-compiler-runtime").c(2);
        const t = r("useWAWebWindowSize")();
        const t_width = t.width;
        let a;
        if (e[0] !== t_width) {
            a = c(t_width);
            e[0] = t_width;
            e[1] = a;
        } else {
            a = e[1];
        }
        return a;
    }
    function c(e) {
        if (e >= o("WAWebAdaptiveLayoutConfig").WIDE_BREAKPOINT_PX) {
            return "wide";
        }
        if (e >= o("WAWebAdaptiveLayoutConfig").MID_BREAKPOINT_PX) {
            return "mid";
        }
        return "narrow";
    }
    l.default = u;
}, 98);