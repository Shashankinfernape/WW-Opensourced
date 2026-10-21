__d("useBoolean", [
    "react",
    "react-compiler-runtime"
], function(t, n, r, o, a, i, l) {
    "use strict";
    let e;
    const s = e || (e = o("react"));
    const { useCallback, useState } = s;
    function useD(e) {
        const t = o("react-compiler-runtime").c(5);
        const n = useState(e);
        const r = n[0];
        const a = n[1];
        let toggle;
        if (t[0] === Symbol.for("react.memo_cache_sentinel")) {
            toggle = function() {
                return a(m);
            };
            t[0] = toggle;
        } else {
            toggle = t[0];
        }
        let setTrue;
        if (t[1] === Symbol.for("react.memo_cache_sentinel")) {
            setTrue = function() {
                return a(true);
            };
            t[1] = setTrue;
        } else {
            setTrue = t[1];
        }
        let setFalse;
        if (t[2] === Symbol.for("react.memo_cache_sentinel")) {
            setFalse = function() {
                return a(false);
            };
            t[2] = setFalse;
        } else {
            setFalse = t[2];
        }
        let u;
        if (t[3] !== r) {
            u = {
                value: r,
                set: a,
                toggle,
                setTrue,
                setFalse
            };
            t[3] = r;
            t[4] = u;
        } else {
            u = t[4];
        }
        return u;
    }
    function m(e) {
        return !e;
    }
    l.default = useD;
}, 98);