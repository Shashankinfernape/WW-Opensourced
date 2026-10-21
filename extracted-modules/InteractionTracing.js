__d("InteractionTracing", [
    "Env",
    "InteractionTracingConfigDefault",
    "InteractionTracingDependencies",
    "InteractionTracingMetrics",
    "JSSelfProfilerTrackedInteractions",
    "WebSession",
    "cr:955714",
    "interaction-tracing",
    "performanceNow"
], function(t, n, r, o, a, i, l) {
    "use strict";
    const e = [
        "cfg"
    ];
    let s;
    let u;
    function transformStartMetadata(t) {
        const t_cfg = t.cfg;
        const l = babelHelpers.objectWithoutPropertiesLoose(t, e);
        const c = l.startTime ?? (s || (s = r("performanceNow")))();
        if ((u || (u = r("Env"))).jssp_header_sent && (u || (u = r("Env"))).jssp_targeting_enabled) {
            const d = r("JSSelfProfilerTrackedInteractions").interactions;
            if (d) {
                const m = !!d.find((e)=>(e.tracePolicy === "*" || e.tracePolicy === t.tracePolicy) && (e.action === "*" || e.action === t.traceType));
                if (m && n("cr:955714")) {
                    r("InteractionTracingDependencies").WebLoom?.addProvider(n("cr:955714"));
                }
            }
        }
        return babelHelpers.extends({
            startTime: c
        }, l, {
            cfg: babelHelpers.extends({}, o("InteractionTracingConfigDefault").DEFAULT_TRACING_CONFIG, t_cfg),
            deps: r("InteractionTracingDependencies")
        });
    }
    const d = babelHelpers.extends({}, r("interaction-tracing").InteractionTracingCore, {
        transformStartMetadata,
        startInteraction: function(t, n) {
            return r("interaction-tracing").InteractionTracingCore.startInteraction(transformStartMetadata(t), n);
        },
        trace: ((e)=>{
            function t(t, n, r, o, a, i, l, s, u) {
                return e.apply(this, arguments);
            }
            t.toString = function() {
                return e.toString();
            };
            return t;
        })(function(e, t, n, a, i, l, c = (s || (s = r("performanceNow")))(), d, m) {
            const p = r("interaction-tracing").InteractionTracingCore.trace(babelHelpers.extends({}, o("InteractionTracingConfigDefault").DEFAULT_TRACING_CONFIG, m), r("InteractionTracingDependencies"), e, t, n, a, i, l, c, d);
            const _ = o("WebSession").getSessionId();
            if (_ != null) {
                r("InteractionTracingMetrics").addMetadata(p, "websession_id", _);
            }
            if ((u || (u = r("Env"))).brsid != null) {
                r("InteractionTracingMetrics").addAnnotation(p, "brsid", `${(u || (u = r("Env"))).brsid}`);
            }
            return p;
        }),
        navigation: r("interaction-tracing").NavigationTracing,
        getTraceStatus: r("interaction-tracing").getTraceStatus
    });
    l.default = d;
}, 98);