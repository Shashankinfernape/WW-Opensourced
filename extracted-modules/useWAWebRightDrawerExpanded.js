__d("useWAWebRightDrawerExpanded", [
    "WAWebCmd",
    "react",
    "react-compiler-runtime",
    "useWAWebListener"
], function(t, n, r, o, a, i, l) {
    let e;
    const useState = (e || (e = o("react"))).useState;
    function u() {
        const e = o("react-compiler-runtime").c(1);
        const t = useState(null);
        const n = t[0];
        const r = t[1];
        let a;
        if (e[0] === Symbol.for("react.memo_cache_sentinel")) {
            a = function(t, n) {
                r(n ? t : function(e) {
                    if (e === t) {
                        return null;
                    }
                    return e;
                });
            };
            e[0] = a;
        } else {
            a = e[0];
        }
        o("useWAWebListener").useListener(o("WAWebCmd").Cmd, "set_right_drawer_expanded", a);
        return n != null;
    }
    l.default = u;
}, 98);