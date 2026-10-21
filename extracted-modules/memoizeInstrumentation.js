__d("memoizeInstrumentation", [
    "ExecutionEnvironment",
    "FBLogger",
    "err",
    "justknobx"
], function(t, n, r, o, a, i, l) {
    let e;
    let s = false;
    try {
        s = r("justknobx")._("1590");
    } catch (e) {}
    const u = 1 / 100;
    const c = [
        1000,
        10000,
        100000,
        1000000
    ];
    function d() {
        return s && Math.random() < u;
    }
    function m() {
        return {
            creationStack: _(),
            nextThresholdIdx: 0
        };
    }
    function p(e, t, n, o) {
        while(o.nextThresholdIdx < c.length && e >= c[o.nextThresholdIdx]){
            const a = c[o.nextThresholdIdx];
            o.nextThresholdIdx++;
            try {
                r("FBLogger")("memoize_instrumentation", "cache_grew_large").warn("Unbounded memoize cache crossed %s entries (utility=%s, fn=%s, page=%s, creationStack=%s)", a, t, n != null && n !== "" ? n : "<anonymous>", f(), o.creationStack ?? "<no-stack>");
            } catch (e) {}
        }
    }
    function _() {
        try {
            const e = r("err")("stack for memoization").stack;
            if (e == null) {
                return undefined;
            }
            return e.split("\n").slice(0, 10).join("\n");
        } catch (e) {
            return null;
        }
    }
    function f() {
        if (!(e || (e = r("ExecutionEnvironment"))).canUseDOM) {
            return "<no-dom>";
        }
        try {
            if (window.top !== window.self) {
                return "<iframe>";
            }
            return window.location.pathname;
        } catch (e) {
            return "<error>";
        }
    }
    l.shouldTrackThisInstance = d;
    l.createCacheSizeTracker = m;
    l.maybeLogMemoizeCacheSize = p;
}, 98);