__d("useWAWebLeadStageFromStore", [
    "WAWebLeadStageStore",
    "WAWebNoop",
    "react",
    "react-compiler-runtime"
], function(t, n, r, o, a, i, l) {
    "use strict";
    let e;
    const s = e || (e = o("react"));
    const { useCallback, useSyncExternalStore } = s;
    function useD(e, t) {
        const n = o("react-compiler-runtime").c(5);
        const a = t && e != null;
        let i;
        if (n[0] !== a) {
            i = function(t) {
                if (a) {
                    return o("WAWebLeadStageStore").subscribeToLeadStageStore(t);
                }
                return r("WAWebNoop");
            };
            n[0] = a;
            n[1] = i;
        } else {
            i = n[1];
        }
        const l = i;
        let s;
        if (n[2] !== e || n[3] !== a) {
            s = function() {
                if (a && e != null) {
                    return o("WAWebLeadStageStore").getLeadStageFromStore(e);
                }
                return null;
            };
            n[2] = e;
            n[3] = a;
            n[4] = s;
        } else {
            s = n[4];
        }
        return useSyncExternalStore(l, s);
    }
    l.default = useD;
}, 98);