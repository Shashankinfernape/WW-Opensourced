__d("WAWebGalaxyFlowResponseLastMsg.react", [
    "WAWebGalaxyFlowResponseUtils",
    "WDSIconIcDescription.react",
    "react",
    "react-compiler-runtime"
], function(t, n, r, o, a, i, l) {
    let e;
    const s = e || (e = o("react"));
    const u = {
        icon: {
            display: "x78zum5",
            verticalAlign: "x16dsc37",
            justifyContent: "xl56j7k",
            $$css: true
        }
    };
    function c(e) {
        const t = o("react-compiler-runtime").c(2);
        const e_msg = e.msg;
        if (o("WAWebGalaxyFlowResponseUtils").isGalaxyFlowsResponseBubble(e_msg)) {
            let a;
            if (t[0] === Symbol.for("react.memo_cache_sentinel")) {
                a = {
                    className: "x78zum5 x1q0g3np x16q7b9a"
                };
                t[0] = a;
            } else {
                a = t[0];
            }
            let i;
            if (t[1] === Symbol.for("react.memo_cache_sentinel")) {
                i = <div {...babelHelpers.extends({}, a, {
                    children: s.jsx(r("WDSIconIcDescription.react"), {
                        xstyle: u.icon,
                        width: 18,
                        height: 18,
                        viewBox: {
                            height: 24,
                            width: 24,
                            x: 0,
                            y: 0
                        }
                    })
                })}/>;
                t[1] = i;
            } else {
                i = t[1];
            }
            return i;
        }
        return null;
    }
    l.default = c;
}, 98);