__d("useWAWebVoipViewportMobileLayout", [
    "WAWebVoipMobileLayoutGating",
    "react",
    "react-compiler-runtime"
], function(t, n, r, o, a, i, l) {
    "use strict";
    let e;
    const s = e || (e = o("react"));
    const { useEffect, useState } = s;
    function d(e) {
        const t = o("react-compiler-runtime").c(2);
        const n = useState(m);
        const r = n[0];
        const a = n[1];
        let i;
        let l;
        if (t[0] === Symbol.for("react.memo_cache_sentinel")) {
            i = function() {
                const e = matchMedia(o("WAWebVoipMobileLayoutGating").MOBILE_CALL_LAYOUT_MEDIA_QUERY);
                const t = function() {
                    a(e.matches);
                };
                e.addListener(t);
                return function() {
                    e.removeListener(t);
                };
            };
            l = [];
            t[0] = i;
            t[1] = l;
        } else {
            i = t[0];
            l = t[1];
        }
        useEffect(i, l);
        return e && r;
    }
    function m() {
        return matchMedia(o("WAWebVoipMobileLayoutGating").MOBILE_CALL_LAYOUT_MEDIA_QUERY).matches;
    }
    l.default = d;
}, 98);