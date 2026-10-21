__d("useWAWebVPVOverlayEnabled", [
    "WAWebDebugBizVPVOverlay",
    "react",
    "react-compiler-runtime"
], function(t, n, r, o, a, i, l) {
    "use strict";
    let e;
    const s = e || (e = o("react"));
    const { useEffect, useState } = s;
    function d() {
        const e = o("react-compiler-runtime").c(2);
        const t = useState(o("WAWebDebugBizVPVOverlay").isVPVOverlayEnabled);
        const n = t[0];
        const r = t[1];
        let a;
        let i;
        if (e[0] === Symbol.for("react.memo_cache_sentinel")) {
            a = function() {
                return o("WAWebDebugBizVPVOverlay").subscribeToVPVOverlay(r);
            };
            i = [];
            e[0] = a;
            e[1] = i;
        } else {
            a = e[0];
            i = e[1];
        }
        useEffect(a, i);
        return n;
    }
    l.default = d;
}, 98);