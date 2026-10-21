__d("getInteractionIDWithInheritance", [
    "InteractionTracingMetrics"
], function(t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t) {
        const a = e == null ? null : r("InteractionTracingMetrics").get(e)?.start;
        const i = t == null ? null : r("InteractionTracingMetrics").get(t)?.start;
        if (t != null && (e == null || a == null || a != null && i != null && a < i)) {
            return t;
        }
        return e;
    }
    l.default = e;
}, 98);