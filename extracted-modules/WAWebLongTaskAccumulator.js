__d("WAWebLongTaskAccumulator", [], function(t, n, r, o, a, i) {
    const e = {
        count: 0,
        totalMs: 0
    };
    let l = null;
    function s() {
        if (!(l != null || !d())) {
            l = new self.PerformanceObserver(function(t) {
                t.getEntries().forEach((t)=>{
                    e.count++;
                    e.totalMs += t.duration;
                });
            });
            l.observe({
                type: "longtask",
                buffered: false
            });
        }
    }
    function u() {
        return babelHelpers.extends({}, e);
    }
    function c(t) {
        if (l == null) {
            return null;
        }
        return {
            int: {
                long_task_count: e.count - t.count,
                long_task_ms: Math.round(e.totalMs - t.totalMs)
            }
        };
    }
    function d() {
        return typeof self.PerformanceObserver?.supportedEntryTypes?.includes === "function" && self.PerformanceObserver.supportedEntryTypes.includes("longtask");
    }
    i.startLongTaskAccumulator = s;
    i.getLongTaskTotals = u;
    i.getLongTaskAnnotationsSince = c;
}, 66);