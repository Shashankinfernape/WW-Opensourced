__d("BaseTooltipEndCarat.svg.react", [
    "fbt",
    "react",
    "react-compiler-runtime",
    "stylex",
    "vulture"
], function(t, n, r, o, a, i, l, s) {
    "use strict";
    let e;
    let u;
    const c = u || (u = o("react"));
    function DComponent(t) {
        const n = o("react-compiler-runtime").c(6);
        const t_fillXStyle = t.fillXStyle;
        r("vulture")("eUKqFkrVPwPefpHLvH53ZohT9_A=");
        let i;
        if (n[0] === Symbol.for("react.memo_cache_sentinel")) {
            i = {
                transform: "scaleX(-1)"
            };
            n[0] = i;
        } else {
            i = n[0];
        }
        let l;
        if (n[1] === Symbol.for("react.memo_cache_sentinel")) {
            l = <title>{s._("Tooltip start carat")}</title>;
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
            d = <svg fill="none" height="22" style={i} viewBox="0.5 0 8 22" width="8">{l}<path {...babelHelpers.extends({}, u, {
                clipRule: "evenodd",
                d: "M0.5 21.5C0.5 17.5 7.5 13.681 7.5 11C7.5 8.3185 0.5 4.4995 0.5 0.5L0.5 21.5Z",
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