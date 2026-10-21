__d("NavigationTracing", [
    "InteractionTracingMetrics",
    "WebSession",
    "cr:873"
], function(t, n, r, o, a, i, l) {
    "use strict";
    const e = (t)=>{
        const e = o("WebSession").getSessionId();
        if (e != null) {
            r("InteractionTracingMetrics").addMetadata(t, "websession_id", e);
        }
    };
    function s(t, r) {
        if (t.startTime == null) {
            t.startTime = 0;
        }
        const o = n("cr:873").navigation.traceInitialLoad(n("cr:873").transformStartMetadata(t), r);
        e(o);
        return o;
    }
    function u(t, r) {
        const o = n("cr:873").navigation.traceNavigation(n("cr:873").transformStartMetadata(t), r);
        e(o);
        return o;
    }
    l.traceInitialLoad = s;
    l.traceNavigation = u;
}, 98);