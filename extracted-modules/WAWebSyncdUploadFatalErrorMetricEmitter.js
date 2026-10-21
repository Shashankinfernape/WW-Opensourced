__d("WAWebSyncdUploadFatalErrorMetricEmitter", [], function(t, n, r, o, a, i) {
    "use strict";
    let e = null;
    function l(t) {
        e = t;
    }
    function s(t) {
        e?.(t);
    }
    i.listenForUploadFatalErrorMetric = l;
    i.emitUploadFatalErrorMetric = s;
}, 66);