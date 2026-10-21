__d("WAWebWamInitQueue", [
    "WAWebWamRuntimeProvider"
], function(t, n, r, o, a, i, l) {
    const e = [];
    function s(t, n = false) {
        e.push([
            t,
            n
        ]);
    }
    function u(t, n) {
        e.push([
            false,
            t,
            n
        ]);
    }
    function c() {
        const t = o("WAWebWamRuntimeProvider").getWamRuntime();
        if (t != null) {
            const n = e.splice(0);
            n.forEach((e)=>{
                if (e.length === 2) {
                    t.commit(...e);
                } else {
                    t.set(e[1], e[2]);
                }
            });
        }
    }
    l.queueEvent = s;
    l.queueMetric = u;
    l.processQueuedJobs = c;
}, 98);