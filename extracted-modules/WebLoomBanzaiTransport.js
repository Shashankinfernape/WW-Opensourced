__d("WebLoomBanzaiTransport", [
    "Banzai"
], function(t, n, r, o, a, i, l) {
    "use strict";
    const e = {
        post: function(t, n) {
            r("Banzai").post("loom_trace", t, {
                callback: n.onComplete,
                delay: n.isHighPri ? r("Banzai").VITAL_WAIT : r("Banzai").BASIC_WAIT
            });
        },
        flush: function(t, n) {
            r("Banzai").flush(t, n);
        }
    };
    l.default = e;
}, 98);