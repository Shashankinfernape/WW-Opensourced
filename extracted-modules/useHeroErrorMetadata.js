__d("useHeroErrorMetadata", [
    "QPLEvent",
    "fb-error",
    "hero-tracing-placeholder",
    "interaction-tracing-metrics",
    "react",
    "react-compiler-runtime"
], function(t, n, r, o, a, i, l) {
    "use strict";
    let e;
    let s;
    const u = e || (e = o("react"));
    const { useCallback, useContext } = u;
    function useM() {
        const e = o("react-compiler-runtime").c(3);
        const t = useContext(o("hero-tracing-placeholder").HeroCurrentInteractionForLoggingContext);
        const n = useContext(o("hero-tracing-placeholder").HeroInteractionContext.Context);
        const n_pageletStack = n.pageletStack;
        let i;
        if (e[0] !== t || e[1] !== n_pageletStack) {
            i = function(n) {
                const l = n.metadata ?? new (r("fb-error")).ErrorMetadata;
                n.metadata = l;
                const u = t.current?.interactionUUID;
                if (u != null) {
                    const c = o("interaction-tracing-metrics").InteractionTracingMetricsCore.get(u);
                    if (n_pageletStack != null) {
                        l.addEntry("COMET_INFRA", "INTERACTION_PAGELET_STACK", n_pageletStack.join(","));
                    }
                    if (c != null && c.qplAction == null) {
                        if (c.qplEvent != null) {
                            l.addEntry("COMET_INFRA", "INTERACTION_QPL_EVENT", String((s || (s = o("QPLEvent"))).getMarkerId(c.qplEvent)));
                        }
                        if (c.tracePolicy != null) {
                            l.addEntry("COMET_INFRA", "INTERACTION_TRACE_POLICY", c.tracePolicy);
                        }
                    }
                }
            };
            e[0] = t;
            e[1] = n_pageletStack;
            e[2] = i;
        } else {
            i = e[2];
        }
        return i;
    }
    l.default = useM;
}, 98);