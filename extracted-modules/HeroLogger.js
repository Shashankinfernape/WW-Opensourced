__d("HeroLogger", [
    "hero-tracing-placeholder",
    "interaction-tracing-metrics",
    "performanceNow",
    "uuidv4"
], function(t, n, r, o, a, i, l) {
    "use strict";
    let e;
    const s = {};
    let u = 0;
    const c = new Map;
    function d(e) {
        const t = u++;
        c.set(t, e);
        return function() {
            c.delete(t);
        };
    }
    function m(e) {
        const t = e ?? r("uuidv4")();
        if (!o("hero-tracing-placeholder").HeroPendingPlaceholderTracker.isInteractionActive(t)) {
            o("hero-tracing-placeholder").HeroPendingPlaceholderTracker.addInteraction(t);
        }
        return t;
    }
    function p(e) {
        o("hero-tracing-placeholder").HeroPendingPlaceholderTracker.removeInteraction(e);
    }
    function _(e, t, n, r) {
        const a = o("interaction-tracing-metrics").InteractionTracingMetricsCore.get(e);
        if (a != null) {
            if (n === "ABORT") {
                o("interaction-tracing-metrics").InteractionTracingMetricsCore.addAnnotationInt(e, "aborted", 1);
                o("interaction-tracing-metrics").InteractionTracingMetricsCore.addAnnotation(e, "cancelType", `aborted:${r ?? "unknown"}`);
            }
            C(e, t, "Interaction", `Interaction Done: ${a.tracePolicy ?? "unknown"}${` (${n})`}`, a.start);
        }
        o("interaction-tracing-metrics").InteractionTracingMetricsCore.complete(e);
    }
    function f(t, n, o) {
        const a = n + t;
        s[a] = o ?? (e || (e = r("performanceNow")))();
    }
    function g(t, n, a, i, description, contextualInteractionUUID) {
        const u = a ?? (e || (e = r("performanceNow")))();
        f(t, n, u);
        o("hero-tracing-placeholder").HeroPendingPlaceholderTracker.addPlaceholder(t, n, description, u, i ?? []);
        if (c.size) {
            const d = {
                placeholderID: n + t,
                interactionID: t,
                spanUUID: n,
                startTime: u,
                pageletStack: i,
                description,
                contextualInteractionUUID
            };
            c.forEach((e)=>{
                e.onStart(d);
            });
        }
    }
    function h(t, n, a, i, l, u, d, m) {
        const p = l + t;
        const _ = s[p];
        delete s[p];
        const f = d ?? (e || (e = r("performanceNow")))();
        if (_ != null) {
            C(t, n, a, i, _, f, u, m);
        }
        if (c.size) {
            const g = {
                placeholderID: l + t,
                interactionID: t,
                pageletStack: n,
                spanType: a,
                name: i,
                spanUUID: l,
                data: u,
                endTime: f
            };
            c.forEach((e)=>{
                e.onEnd(g);
            });
        }
        o("hero-tracing-placeholder").HeroPendingPlaceholderTracker.removePlaceholder(t, l);
    }
    function y(e, t, n, r, a, i, l) {
        h(e, t, n, r, a, i, l, "Placeholder");
        o("hero-tracing-placeholder").HeroPendingPlaceholderTracker.removePlaceholder(e, a);
    }
    function C(t, n, a, i, l, s = (e || (e = r("performanceNow")))(), u, c) {
        o("interaction-tracing-metrics").InteractionTracingMetricsCore.addSubspan(t, i, "HeroTracing", l, s ?? (e || (e = r("performanceNow")))(), babelHelpers.extends({}, u, {
            pagelet: n[n.length - 1],
            pageletStack: n,
            spanType: a
        }));
    }
    l.subscribeToPlaceholders = d;
    l.genHeroInteractionUUIDAndMarkStart = m;
    l.cleanupHeroInteraction = p;
    l.endHeroInteraction = _;
    l.markStart = f;
    l.markStartPlaceholder = g;
    l.markEnd = h;
    l.markEndPlaceholder = y;
    l.measure = C;
}, 98);