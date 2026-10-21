__d("useWAWebPendingLeadStage", [
    "WAWebLeadStageStore",
    "WAWebNoop",
    "react",
    "react-compiler-runtime"
], function(t, n, r, o, a, i, l) {
    "use strict";
    let e;
    const s = e || (e = o("react"));
    const { useCallback, useSyncExternalStore } = s;
    function d(e) {
        const t = o("react-compiler-runtime").c(4);
        let n;
        if (t[0] !== e) {
            n = function(n) {
                if (e != null) {
                    return o("WAWebLeadStageStore").subscribeToLeadStageStore(n);
                }
                return r("WAWebNoop");
            };
            t[0] = e;
            t[1] = n;
        } else {
            n = t[1];
        }
        const a = n;
        let i;
        if (t[2] !== e) {
            i = function() {
                if (e != null) {
                    return o("WAWebLeadStageStore").getPendingLeadStage(e);
                }
                return null;
            };
            t[2] = e;
            t[3] = i;
        } else {
            i = t[3];
        }
        return useSyncExternalStore(a, i);
    }
    l.default = d;
}, 98);