__d("usePageletVCTracker", [
    "interaction-tracing-metrics",
    "performanceNow",
    "react",
    "react-compiler-runtime",
    "useStable"
], function(t, n, r, o, a, i, l) {
    "use strict";
    let e;
    let s;
    const u = s || (s = o("react"));
    const { useCallback, useRef } = u;
    function m(t) {
        const n = o("react-compiler-runtime").c(9);
        const { alwaysMarkMutationRootAsVisualChange, interactionUUID, isMutationRoot, observeTextMutation, pageletName, pageletType, vcCallback } = t;
        const _ = r("useStable")(p);
        const fRef = useRef(null);
        let g;
        if (n[0] !== alwaysMarkMutationRootAsVisualChange || n[1] !== interactionUUID || n[2] !== isMutationRoot || n[3] !== observeTextMutation || n[4] !== pageletName || n[5] !== pageletType || n[6] !== _ || n[7] !== vcCallback) {
            g = function(n) {
                if (n != null) {
                    const t = _.has(n);
                    let d = _.get(n);
                    if (d == null) {
                        d = (e || (e = r("performanceNow")))();
                        _.set(n, d);
                    }
                    let p;
                    const g = interactionUUID != null ? o("interaction-tracing-metrics").InteractionTracingMetricsCore.get(interactionUUID) : null;
                    if (interactionUUID != null && fRef.current !== interactionUUID && g && g.vcTracker) {
                        p = g.vcTracker;
                        if (isMutationRoot === true) {
                            if (observeTextMutation != null) {
                                p.config.observeTextMutation = observeTextMutation;
                            }
                            if (t && alwaysMarkMutationRootAsVisualChange === false) {
                                p.observeMutation(n);
                            } else {
                                p.addMutationRoot(n);
                            }
                        }
                    }
                    const h = t && g != null && g.start > d;
                    const y = h && g != null ? g.start : (e || (e = r("performanceNow")))();
                    if (interactionUUID != null && (!t || h)) {
                        o("interaction-tracing-metrics").InteractionTracingMetricsCore.addMountPoint(interactionUUID, y, pageletName);
                        p?.trackPagelet(n, pageletName, y, vcCallback, pageletType);
                    }
                    fRef.current = interactionUUID;
                }
            };
            n[0] = alwaysMarkMutationRootAsVisualChange;
            n[1] = interactionUUID;
            n[2] = isMutationRoot;
            n[3] = observeTextMutation;
            n[4] = pageletName;
            n[5] = pageletType;
            n[6] = _;
            n[7] = vcCallback;
            n[8] = g;
        } else {
            g = n[8];
        }
        return g;
    }
    function p() {
        if (typeof WeakMap === "function") {
            return new WeakMap;
        }
        return new Map;
    }
    l.default = m;
}, 98);