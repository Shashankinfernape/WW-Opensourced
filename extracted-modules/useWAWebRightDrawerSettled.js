__d("useWAWebRightDrawerSettled", [
    "WAWebCmd",
    "react",
    "react-compiler-runtime",
    "useWAWebListener"
], function(t, n, r, o, a, i, l) {
    let e;
    const s = e || (e = o("react"));
    const { useCallback, useState } = s;
    function d() {
        const e = o("react-compiler-runtime").c(4);
        const t = useState(false);
        const n = t[0];
        const r = t[1];
        let a;
        if (e[0] === Symbol.for("react.memo_cache_sentinel")) {
            a = function(t, n) {
                if (n) {
                    r(true);
                }
            };
            e[0] = a;
        } else {
            a = e[0];
        }
        o("useWAWebListener").useListener(o("WAWebCmd").Cmd, "set_right_drawer_expanded", a);
        let i;
        if (e[1] === Symbol.for("react.memo_cache_sentinel")) {
            i = function(t) {
                if (t !== "updated") {
                    r(false);
                }
            };
            e[1] = i;
        } else {
            i = e[1];
        }
        const l = i;
        let s;
        if (e[2] !== n) {
            s = [
                n,
                l
            ];
            e[2] = n;
            e[3] = s;
        } else {
            s = e[3];
        }
        return s;
    }
    l.default = d;
}, 98);