__d("JSSPInteractionTraceDataMarker", [
    "JSSPTraceBaseTransformer",
    "asyncToGeneratorRuntime",
    "interaction-tracing-metrics",
    "performanceNow"
], function(t, n, r, o, a, i, l) {
    "use strict";
    let e;
    const s = ((t)=>{
        function a() {
            return t.apply(this, arguments) || this;
        }
        babelHelpers.inheritsLoose(a, t);
        const a_prototype = a.prototype;
        a_prototype.transform = (()=>{
            const t = n("asyncToGeneratorRuntime").asyncToGenerator(function*(t) {
                const l = t.metadata?.interactionId;
                if (l == null) {
                    return t;
                }
                const s = o("interaction-tracing-metrics").InteractionTracingMetricsCore.get(l);
                if (s != null) {
                    t.metadata = t.metadata ?? {};
                    t.metadata.interactionDuration = Math.floor((s.completed ?? (e || (e = r("performanceNow")))()) - s.start);
                }
                return t;
            });
            function a(e) {
                return t.apply(this, arguments);
            }
            return a;
        })();
        return a;
    })(r("JSSPTraceBaseTransformer"));
    l.default = s;
}, 98);