__d("BaseTooltipBelowCarat.svg.react", [
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
        const n = o("react-compiler-runtime").c(6);
        const t_fillXStyle = t.fillXStyle;
        let i;
        if (n[0] === Symbol.for("react.memo_cache_sentinel")) {
            i = {
                transform: "scaleY(-1)"
            };
            n[0] = i;
        } else {
            i = n[0];
        }
        let l;
        if (n[1] === Symbol.for("react.memo_cache_sentinel")) {
            l = <title id="tooltipCaratTitle">{s._("Tooltip below carat")}</title>;
            n[1] = l;
        } else {
            l = n[1];
        }
        let u;
        if (n[2] !== t_fillXStyle) {
            u = (e || (e = r("stylex"))).props(t_fillXStyle);
            n[2] = t_fillXStyle;
            n[3] = u;
        } else {
            u = n[3];
        }
        let d;
        if (n[4] !== u) {
            d = <svg fill="none" height="8" style={i} title="tooltip carat" viewBox="0 0 21 8" width="21" xmlns="http://www.w3.org/2000/svg">{l}<path {...babelHelpers.extends({}, u, {
                clipRule: "evenodd",
                d: "M0 0C4 0 7.819 8 10.5 8C13.1815 8 17.0005 0 21 0H0Z",
                fill: "black",
                fillRule: "evenodd"
            })}/></svg>;
            n[4] = u;
            n[5] = d;
        } else {
            d = n[5];
        }
        return d;
    }
    l.default = DComponent;
}, 226);