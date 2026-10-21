__d("BaseTooltipAboveCarat.svg.react", [
    "fbt",
    "react",
    "react-compiler-runtime",
    "stylex"
], function(t, n, r, o, a, i, l, s) {
    "use strict";
    let e;
    let u;
    const c = u || (u = o("react"));
    function DComponent(t) {
        const n = o("react-compiler-runtime").c(5);
        const t_fillXStyle = t.fillXStyle;
        let i;
        if (n[0] === Symbol.for("react.memo_cache_sentinel")) {
            i = <title id="tooltipCaratTitle">{s._("Tooltip above carat")}</title>;
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
            u = <svg fill="none" height="8" title="tooltip carat" viewBox="0 0.3 21 8" width="21" xmlns="http://www.w3.org/2000/svg">{i}<path {...babelHelpers.extends({}, l, {
                clipRule: "evenodd",
                d: "M0 0C4 0 7.819 8 10.5 8C13.1815 8 17.0005 0 21 0H0Z",
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
    l.default = DComponent;
}, 226);