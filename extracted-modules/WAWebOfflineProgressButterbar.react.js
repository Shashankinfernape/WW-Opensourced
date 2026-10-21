__d("WAWebOfflineProgressButterbar.react", [
    "fbt",
    "WAShiftTimer",
    "WAWebCmd",
    "WAWebOfflineHandler",
    "WDSBanner.react",
    "WDSIconIcSync.react",
    "react",
    "react-compiler-runtime",
    "useWAWebListener"
], function(t, n, r, o, a, i, l, s) {
    let e;
    const u = e || (e = o("react"));
    const e_useState = e.useState;
    const d = 120 * 1000;
    function m() {
        const e = o("react-compiler-runtime").c(11);
        const t = e_useState(0);
        const n = t[0];
        const a = t[1];
        const i = e_useState(false);
        const l = i[0];
        const m = i[1];
        let p;
        if (e[0] === Symbol.for("react.memo_cache_sentinel")) {
            p = function() {
                a(o("WAWebOfflineHandler").OfflineMessageHandler.getOfflineDeliveryProgress());
            };
            e[0] = p;
        } else {
            p = e[0];
        }
        o("useWAWebListener").useListener(o("WAWebCmd").Cmd, "offline_progress_update_from_bridge", p);
        new (o("WAShiftTimer")).ShiftTimer(function() {
            m(true);
        }).onOrAfter(d);
        let _;
        if (e[1] !== n) {
            _ = s._("_j{\"*\":\"Loading messages ({percentage}\\u0025)\"}", [
                s._param("percentage", n, [
                    0
                ])
            ]);
            e[1] = n;
            e[2] = _;
        } else {
            _ = e[2];
        }
        const f = _;
        if (l) {
            let g;
            if (e[3] === Symbol.for("react.memo_cache_sentinel")) {
                g = {
                    className: "x1380le5 xefnzgg x1uvdrpn x14mko6t"
                };
                e[3] = g;
            } else {
                g = e[3];
            }
            let h;
            if (e[4] === Symbol.for("react.memo_cache_sentinel")) {
                h = s._("Messages are still loading. You can continue to wait, or log out and relink with your phone.");
                e[4] = h;
            } else {
                h = e[4];
            }
            let y;
            if (e[5] !== f) {
                y = <div {...babelHelpers.extends({}, g, {
                    children: u.jsx(r("WDSBanner.react"), {
                        type: "default",
                        icon: r("WDSIconIcSync.react"),
                        title: f,
                        body: h
                    })
                })}/>;
                e[5] = f;
                e[6] = y;
            } else {
                y = e[6];
            }
            return y;
        }
        let C;
        if (e[7] === Symbol.for("react.memo_cache_sentinel")) {
            C = {
                className: "x1380le5 xefnzgg x1uvdrpn x14mko6t"
            };
            e[7] = C;
        } else {
            C = e[7];
        }
        let b;
        if (e[8] === Symbol.for("react.memo_cache_sentinel")) {
            b = s._("Messages are loading.");
            e[8] = b;
        } else {
            b = e[8];
        }
        let v;
        if (e[9] !== f) {
            v = <div {...babelHelpers.extends({}, C, {
                children: u.jsx(r("WDSBanner.react"), {
                    type: "default",
                    icon: r("WDSIconIcSync.react"),
                    title: f,
                    body: b
                })
            })}/>;
            e[9] = f;
            e[10] = v;
        } else {
            v = e[10];
        }
        return v;
    }
    l.default = m;
}, 226);