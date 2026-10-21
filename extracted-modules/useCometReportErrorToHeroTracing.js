__d("useCometReportErrorToHeroTracing", [
    "failCometInteraction",
    "hero-tracing-placeholder",
    "interaction-tracing",
    "interaction-tracing-metrics",
    "react",
    "react-compiler-runtime",
    "useHeroFailTrigger"
], function(t, n, r, o, a, i, l) {
    "use strict";
    let e;
    const s = e || (e = o("react"));
    const { useCallback, useContext } = s;
    function useD(e) {
        const t = o("react-compiler-runtime").c(4);
        const n = useContext(o("hero-tracing-placeholder").HeroCurrentInteractionForLoggingContext);
        const a = r("useHeroFailTrigger")();
        let i;
        if (t[0] !== n || t[1] !== a || t[2] !== e) {
            i = function(error, l) {
                const u = l === undefined ? "CometErrorBoundary" : l;
                const c = n.current?.interactionUUID;
                if (c == null) {
                    r("failCometInteraction")(error);
                    return;
                }
                const d = r("interaction-tracing").InteractionTracingCore.getPendingInteractionById(c);
                const m = d?.getConfigAndDependencies()?.cfg;
                if (m?.failOnCometErrorBoundary === "fail" && (e == null || !e(error))) {
                    a({
                        error
                    });
                }
                if (m?.failOnCometErrorBoundary === "fail" || m?.failOnCometErrorBoundary === "annotate") {
                    o("interaction-tracing-metrics").InteractionTracingMetricsCore.addAnnotation(c, "failType", u);
                }
            };
            t[0] = n;
            t[1] = a;
            t[2] = e;
            t[3] = i;
        } else {
            i = t[3];
        }
        return i;
    }
    l.default = useD;
}, 98);