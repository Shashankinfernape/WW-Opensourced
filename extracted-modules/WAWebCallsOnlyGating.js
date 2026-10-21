__d("WAWebCallsOnlyGating", [
    "WAWebRuntimeEnvironmentUtils",
    "gkx"
], function(t, n, r, o, a, i, l) {
    let e = null;
    let s = null;
    function u() {
        return s ?? (o("WAWebRuntimeEnvironmentUtils").isWorker() ? false : (e != null || (e = r("gkx")("13707")), e));
    }
    function c(e) {
        s = e;
    }
    l.isCallsOnlyModeEnabled = u;
    l.initCallsOnlyModeFromWorkerInit = c;
}, 98);