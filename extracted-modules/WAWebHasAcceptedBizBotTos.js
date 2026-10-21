__d("WAWebHasAcceptedBizBotTos", [
    "WAWebBotTos",
    "WAWebTos",
    "react",
    "react-compiler-runtime",
    "useWAWebListener"
], function(t, n, r, o, a, i, l) {
    "use strict";
    let e;
    const useState = (e || (e = o("react"))).useState;
    function u() {
        const e = o("react-compiler-runtime").c(1);
        const t = useState(o("WAWebBotTos").hasAcceptedBizBotTos);
        const n = t[0];
        const r = t[1];
        let a;
        if (e[0] === Symbol.for("react.memo_cache_sentinel")) {
            a = function() {
                r(o("WAWebBotTos").hasAcceptedBizBotTos());
            };
            e[0] = a;
        } else {
            a = e[0];
        }
        o("useWAWebListener").useListener(o("WAWebTos").TosManager, "change", a);
        return n;
    }
    l.useHasAcceptedBizBotTos = u;
}, 98);