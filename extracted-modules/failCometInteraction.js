__d("failCometInteraction", [
    "interaction-tracing"
], function(t, n, r, o, a, i, l) {
    "use strict";
    const e = 1000;
    function s(t) {
        const n = t ?? "";
        if (n.length > e) {
            return `${n.slice(0, e)}...`;
        }
        return n;
    }
    function u(e) {
        const t = r("interaction-tracing").InteractionTracingCore.getPendingInteractions();
        t.forEach((t)=>{
            const cfg = t.getConfigAndDependencies().cfg;
            const { failLoggingFixCometErrorBoundary, failOnCometErrorBoundary } = cfg;
            if (failOnCometErrorBoundary !== "disabled") {
                t.addAnnotation("failType", "failCometInteraction");
                const i = s(e?.message ?? "unknown");
                if (failLoggingFixCometErrorBoundary) {
                    if (failOnCometErrorBoundary === "fail") {
                        t.failTrace(i, true);
                    } else {
                        t.addMetadata("errorComponent", i);
                    }
                }
            }
        });
    }
    l.default = u;
}, 98);