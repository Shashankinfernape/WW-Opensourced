__d("OneTraceCore", [
    "OneTraceSetup",
    "ResponsivenessTracker",
    "addAnnotations"
], function(t, n, r, o, a, i, l) {
    "use strict";
    let e = null;
    let s = null;
    const currentTraces = new Map;
    const c = {
        "trace-start": new Set,
        "trace-end": new Set,
        "trace-end-before-logging": new Set,
        "trace-policy-set": new Set
    };
    let d = 1;
    function startTrace(e, t, n, o, qplEvent, i) {
        const l = d++;
        const s = {
            traceID: e,
            tracePolicy: t,
            traceType: n,
            instanceKey: l,
            status: "START",
            startTime: o,
            endTime: null,
            annotations: {
                string: {},
                int: {},
                double: {},
                bool: {},
                string_array: {},
                int_array: {},
                double_array: {},
                bool_array: {}
            },
            markerPoints: {},
            qplEvent
        };
        if (i != null) {
            r("addAnnotations")(s.annotations, i);
        }
        currentTraces.set(e, s);
        c["trace-start"].forEach((e)=>e(s));
        if (t != null) {
            setTracePolicy(e, n, t);
        }
        return s;
    }
    function setTracePolicy(e, t, n) {
        if (t === "INITIAL_LOAD" || t === "NAVIGATION" || t === "INTERACTION" && o("OneTraceSetup").getConfig()?.includeInteractionTracePolicy === true) {
            s = n;
            const a = currentTraces.get(e);
            if (a != null) {
                a.tracePolicy = n;
                c["trace-policy-set"].forEach((e)=>e(a));
            }
        }
    }
    function endTrace(e, t, n) {
        const o = currentTraces.get(e);
        if (o) {
            r("addAnnotations")(o.annotations, {
                string: {
                    traceId: e,
                    tracePolicy: o.tracePolicy
                }
            });
            o.endTime = t;
            o.status = n;
            currentTraces.delete(e);
            c["trace-end-before-logging"].forEach((e)=>e(o));
            c["trace-end"].forEach((e)=>e(o));
        }
        return o;
    }
    function subscribe(e, t) {
        c[e].add(t);
        return function() {
            c[e].delete(t);
        };
    }
    function getCurrentTracePolicy() {
        return s;
    }
    function annotateInteractionIndentifier(t) {
        e = t;
        o("ResponsivenessTracker").annotateInteractionToResponsiveness(t);
    }
    function getRecentInteractionIndentifier() {
        return e;
    }
    const C = {
        annotateInteractionIndentifier,
        currentTraces,
        endTrace,
        subscribe,
        getCurrentTracePolicy,
        getRecentInteractionIndentifier,
        setTracePolicy,
        startTrace
    };
    l.default = C;
}, 98);