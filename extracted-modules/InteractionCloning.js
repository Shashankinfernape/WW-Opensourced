__d("InteractionCloning", [
    "InteractionTracingLogger",
    "interaction-tracing-metrics",
    "uuidv4"
], function(t, n, r, o, a, i, l) {
    function e(e) {
        const n = e.annotations.string?.clonedInteractionId;
        if (n != null) {
            return o("interaction-tracing-metrics").InteractionTracingMetricsCore.get(n);
        }
        return null;
    }
    function s(t, n, r) {
        const a = e(t);
        if (a != null) {
            if (a.annotations === t.annotations) {
                t.annotations = babelHelpers.extends({}, t.annotations);
            }
            if (a.annotations.string === t.annotations.string) {
                t.annotations.string = babelHelpers.extends({}, t.annotations.string);
            }
        }
        o("interaction-tracing-metrics").InteractionTracingMetricsCore.addAnnotation(t.traceId, n, r);
    }
    function u(t, n, r) {
        const a = e(t);
        if (a != null && a.tagSet === t.tagSet) {
            t.tagSet = babelHelpers.extends({}, t.tagSet);
        }
        o("interaction-tracing-metrics").InteractionTracingMetricsCore.addTag(t.traceId, n, r);
    }
    function addMarkerPoint_cloneSafe(t, n, r, a) {
        const i = e(t);
        if (i != null && i.markerPoints === t.markerPoints) {
            t.markerPoints = babelHelpers.extends({}, t.markerPoints);
        }
        o("interaction-tracing-metrics").InteractionTracingMetricsCore.addMarkerPoint(t.traceId, n, r, a);
    }
    function addSubspan_cloneSafe(t, n, r, a, i, l) {
        const s = e(t);
        if (s != null && s.subSpans === t.subSpans) {
            t.subSpans = babelHelpers.extends({}, t.subSpans);
        }
        o("interaction-tracing-metrics").InteractionTracingMetricsCore.addSubspan(t.traceId, n, r, a, i, l);
    }
    function cloneAndStart(e, t, n, a, i, l) {
        const m = r("uuidv4")();
        let p = o("interaction-tracing-metrics").InteractionTracingMetricsCore.addTracedInteraction(m, e.start, function() {});
        p = Object.assign(p, e);
        p.traceId = m;
        p.annotations = babelHelpers.extends({}, e.annotations);
        p.annotations.string = babelHelpers.extends({}, e.annotations.string);
        o("interaction-tracing-metrics").InteractionTracingMetricsCore.addAnnotation(m, "clonedInteractionId", e.traceId);
        s(p, "interactionId", m);
        u(p, "traceID", m);
        p.qplEvent = t;
        p.debugName = n;
        o("InteractionTracingLogger").initQPL(a, i, t, p.start, l);
        const _ = i.WebLoom ? i.WebLoom.startTraceManually(p.traceId, t, p.start, 1, p.tracePolicy ?? "unknown.cloned_interaction", p.interactionClass ?? "contingent") : null;
        const f = _?.traceReferenceId;
        if (f != null) {
            s(p, "loomRefId", f);
        }
        return p;
    }
    function log(e, t, n, r, a) {
        const l = o("InteractionTracingLogger").getTraceStatus(e, r.qplActionCancelOnNavigation);
        const s = o("InteractionTracingLogger").logQPL(r, a, t, l, e, n);
        a.WebLoom?.endTraceForInteraction(e, s);
    }
    const _ = {
        addMarkerPoint_cloneSafe,
        addSubspan_cloneSafe,
        clone: function(t, n, r, o) {
            const e = t.getTrace();
            if (e != null) {
                const a = t.getConfigAndDependencies();
                const { cfg, deps } = a;
                const s = cloneAndStart(e, n, r, cfg, deps, o);
                log(s, n, o, cfg, deps);
            }
        },
        cloneAndStart,
        log
    };
    l.default = _;
}, 98);