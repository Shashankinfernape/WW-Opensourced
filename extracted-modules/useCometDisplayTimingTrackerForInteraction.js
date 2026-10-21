__d("useCometDisplayTimingTrackerForInteraction", [
    "InteractionTracingMetrics",
    "performanceNow",
    "react",
    "react-compiler-runtime",
    "vc-tracker"
], function(t, n, r, o, a, i, l) {
    "use strict";
    let e;
    let s;
    const u = s || (s = o("react"));
    const { useCallback, useRef } = u;
    function useM(t, n, a) {
        const i = o("react-compiler-runtime").c(4);
        const l = n === undefined ? false : n;
        const sRef = useRef(null);
        let u;
        if (i[0] !== a || i[1] !== l || i[2] !== t) {
            u = function(o) {
                if (t != null && sRef.current !== o && (sRef.current = o, o)) {
                    const n = (e || (e = r("performanceNow")))();
                    if (a != null) {
                        r("InteractionTracingMetrics").addMountPoint(a, n, t);
                    } else {
                        r("InteractionTracingMetrics").currentInteractionLogger().forEach((e)=>r("InteractionTracingMetrics").addMountPoint(e.traceId, n, t));
                    }
                    if (!l) {
                        const i = r("vc-tracker").getCurrentVCTraces();
                        i.forEach((e)=>{
                            if (e.interactionType !== "INTERACTION") {
                                e.excludeElement(o);
                            }
                        });
                    }
                }
            };
            i[0] = a;
            i[1] = l;
            i[2] = t;
            i[3] = u;
        } else {
            u = i[3];
        }
        return u;
    }
    l.default = useM;
}, 98);