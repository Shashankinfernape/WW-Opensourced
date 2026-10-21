__d("NavigationTracingUtils", [
    "interaction-tracing-metrics",
    "performance",
    "performanceNavigationStart"
], function(t, n, r, o, a, i, l) {
    "use strict";
    let e;
    const s = r("performanceNavigationStart")();
    function u(t) {
        let n;
        const i = ((e || (e = r("performance"))) == null ? undefined : (e || (e = r("performance"))).timing) || {};
        const l = ((e || (e = r("performance"))) == null || (n = (e || (e = r("performance"))).navigation) == null ? undefined : n.redirectCount) || 0;
        o("interaction-tracing-metrics").InteractionTracingMetricsCore.addAnnotationInt(t, "redirectCount", l);
        const u = typeof (e || (e = r("performance"))).getEntriesByType === "function" ? (e || (e = r("performance"))).getEntriesByType("navigation")[0] : null;
        if (u != null && u.nextHopProtocol) {
            o("interaction-tracing-metrics").InteractionTracingMetricsCore.addAnnotation(t, "httpProtocol", u.nextHopProtocol);
        }
        if (u != null && u.type) {
            o("interaction-tracing-metrics").InteractionTracingMetricsCore.addAnnotation(t, "navigationType", u.type);
        } else if ((e || (e = r("performance"))).navigation?.type != null) {
            o("interaction-tracing-metrics").InteractionTracingMetricsCore.addAnnotation(t, "navigationType", (e || (e = r("performance"))).navigation.type);
        }
        for(const c in i){
            if (typeof i[c] === "number" && i[c] >= s) {
                o("interaction-tracing-metrics").InteractionTracingMetricsCore.addMarkerPoint(t, c, "NavigationTiming", i[c] - s);
            }
        }
        if (u != null && u.workerStart) {
            o("interaction-tracing-metrics").InteractionTracingMetricsCore.addMarkerPoint(t, "workerStart", "NavigationTiming", u.workerStart);
        }
        if (u != null && u.fetchStart) {
            o("interaction-tracing-metrics").InteractionTracingMetricsCore.addMarkerPoint(t, "navFetchStart", "NavigationTiming", u.fetchStart);
        }
        const d = u ?? {};
        const { fetchStart, workerStart } = d;
        if (fetchStart && workerStart) {
            o("interaction-tracing-metrics").InteractionTracingMetricsCore.addAnnotationInt(t, "workerProcessingTime", fetchStart - workerStart);
        }
        o("interaction-tracing-metrics").InteractionTracingMetricsCore.addAnnotationInt(t, "documentDOMElementCount", document.getElementsByTagName("*").length);
    }
    function c(e) {
        const document_referrer = document.referrer;
        if (typeof document_referrer === "string") {
            const n = /^\w+:\/\/[^\/]+/.exec(document_referrer);
            if (n && n[0]) {
                o("interaction-tracing-metrics").InteractionTracingMetricsCore.addAnnotation(e, "referrer", n[0]);
            }
        }
    }
    l.addNavigationTiming = u;
    l.addReferrer = c;
}, 98);