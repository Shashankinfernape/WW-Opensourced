__d("HeroTracingDebugTracing", [
    "QPLEvent",
    "hero-tracing",
    "interaction-tracing-metrics",
    "performanceNow"
], function(t, n, r, o, a, i, l) {
    "use strict";
    let e;
    let s;
    const u = 600;
    const c = 150;
    const d = 5;
    function m(e) {
        const r = e?.annotations.string?.tracePolicy;
        return `${(e != null && e.qplEvent ? (s || (s = o("QPLEvent"))).getMarkerId(e.qplEvent) : null) ?? "unknown"}:${typeof r === "string" ? r : "unknown"}`;
    }
    function p(e, t, n, r, a) {
        let u;
        if (n.interactionID !== e.traceId) {
            u = "OtherInteraction";
        } else if (t.has(n.placeholderID)) {
            u = "LatePlaceholder";
        } else if (!r) {
            u = "IncompletePlaceholder";
        } else {
            return;
        }
        const c = {};
        c.type = u;
        if (r != null && r.spanType) {
            c.spanType = r?.spanType;
        }
        if (u === "OtherInteraction") {
            const d = o("interaction-tracing-metrics").InteractionTracingMetricsCore.get(n.interactionID);
            c.interactionType = m(d);
        }
        const p = r?.endTime ?? a;
        const _ = r?.name ?? n.description ?? "[No Description]";
        o("interaction-tracing-metrics").InteractionTracingMetricsCore.addSubspan(e.traceId, u === "OtherInteraction" ? `OtherInteraction: ${_}` : _, u === "OtherInteraction" ? "HeroDebug" : "LatePlaceholder", n.startTime, Math.max(p, n.startTime), c);
    }
    const _ = "LatePlaceholder";
    function f(t, n, a) {
        if (!(n.heroLatePlaceholderDetection || n.heroDebugTracing)) {
            return;
        }
        const i = t.getTraceId();
        const l = o("interaction-tracing-metrics").InteractionTracingMetricsCore.get(i);
        if (!l) {
            return;
        }
        const s = l;
        const f = new Map;
        const g = new Map;
        const h = new Set;
        let y = 0;
        const C = o("hero-tracing").HeroLogger.subscribeToPlaceholders({
            onStart: function(t) {
                if (!(t.interactionID !== i && !n.heroDebugTracing)) {
                    if (t.interactionID === i && s.completed != null) {
                        h.add(t.placeholderID);
                    }
                    f.set(t.placeholderID, t);
                }
            },
            onEnd: function(t) {
                if (!(t.interactionID !== i && !n.heroDebugTracing)) {
                    g.set(t.placeholderID, t);
                }
            }
        });
        function b() {
            C();
            t.unlockInteractionLogging(_);
        }
        function v() {
            const t = (e || (e = r("performanceNow")))();
            const a = new Set;
            f.forEach((e)=>{
                const n = g.get(e.placeholderID);
                if (e.interactionID !== i) {
                    a.add(e.interactionID);
                }
                p(s, h, e, n, t);
            });
            if (n.heroDebugTracing) {
                a.forEach((otherInteractionID)=>{
                    const n = o("interaction-tracing-metrics").InteractionTracingMetricsCore.get(otherInteractionID);
                    if (n) {
                        o("interaction-tracing-metrics").InteractionTracingMetricsCore.addSubspan(i, `OtherInteraction: ${m(n)}`, "HeroDebug", Math.max(n.start, s.start), Math.min(n.completed ?? t, t), {
                            otherInteractionID
                        });
                    }
                });
            }
            b();
        }
        function S() {
            if (y === 0 || y <= d && Array.from(h).some((e)=>!g.has(e))) {
                setTimeout(S, y === 0 ? u : c);
                y++;
            } else {
                v();
            }
        }
        t.lockInteractionLogging(_);
        t.onCompleteSync(function() {
            if (!a()) {
                b();
                return;
            }
            if (n.heroLatePlaceholderDetection) {
                setTimeout(()=>{
                    S();
                });
            } else {
                v();
            }
        });
    }
    l.addHeroDebugging = f;
}, 98);