__d("memoizeStringOnly", [
    "memoizeInstrumentation"
], function(t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
        const t = {};
        let n = 0;
        const r = o("memoizeInstrumentation").shouldTrackThisInstance() ? o("memoizeInstrumentation").createCacheSizeTracker() : null;
        return function(a) {
            if (!Object.prototype.hasOwnProperty.call(t, a)) {
                t[a] = e.call(this, a);
                if (r != null) {
                    n++;
                    o("memoizeInstrumentation").maybeLogMemoizeCacheSize(n, "memoizeStringOnly", e.name, r);
                }
            }
            return t[a];
        };
    }
    l.default = e;
}, 98);