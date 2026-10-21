__d("requestAnimationFramePolyfill", [
    "ExecutionEnvironment",
    "nativeRequestAnimationFrame",
    "performanceNow"
], function(t, n, r, o, a, i, l) {
    let e;
    let s;
    let u = 0;
    let c = r("nativeRequestAnimationFrame");
    if ((e || (e = r("ExecutionEnvironment"))).isInWorker && c != null) {
        try {
            c(function() {});
        } catch (e) {
            c = null;
        }
    }
    const d = c || function(e) {
        const n = (s || (s = r("performanceNow")))();
        const o = Math.max(0, 16 - (n - u));
        u = n + o;
        return t.setTimeout(function() {
            e((s || (s = r("performanceNow")))());
        }, o);
    };
    l.default = d;
}, 98);