__d("BaseTooltipStartCarat.svg.react", [
    "fbt",
    "react",
    "react-compiler-runtime",
    "stylex"
], function(t, n, r, o, a, i, l, s) {
    "use strict";
    let e;
    let u;
    const c = u || (u = o("react"));
    function d(t) {
        const n = o("react-compiler-runtime").c(5);
        const t_fillXStyle = t.fillXStyle;
        let i;
        if (n[0] === Symbol.for("react.memo_cache_sentinel")) {
            i = <title>{s._("Tooltip end carat")}</title>;
            n[0] = i;
        } else {
            i = n[0];
        }
        let l;
        if (n[1] !== t_fillXStyle) {
            l = (e || (e = r("stylex"))).props(t_fillXStyle);
            n[1] = t_fillXStyle;
            n[2] = l;
        } else {
            l = n[2];
        }
        let u;
        if (n[3] !== l) {
            u = <svg fill="none" height="22" viewBox="0.7 0 8 22" width="8">{i}<path {...babelHelpers.extends({}, l, {
                clipRule: "evenodd",
                d: "M0.5 21.5C0.5 17.5 7.5 13.681 7.5 11C7.5 8.3185 0.5 4.4995 0.5 0.5L0.5 21.5Z",
                fill: "black",
                fillRule: "evenodd"
            })}/></svg>;
            n[3] = l;
            n[4] = u;
        } else {
            u = n[4];
        }
        return u;
    }
    l.default = d;
}, 226);