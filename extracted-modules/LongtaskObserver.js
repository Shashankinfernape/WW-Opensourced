__d("LongtaskObserver", [
    "OneTraceCore",
    "addAnnotations",
    "uuidv4"
], function(t, n, r, o, a, i, l) {
    "use strict";
    const s = typeof window.PerformanceObserver?.supportedEntryTypes?.includes === "function" && window.PerformanceObserver.supportedEntryTypes.includes("longtask");
    const u = new Set;
    let c = false;
    let d = 1;
    function m(e) {
        const t = new Set;
        r("OneTraceCore").currentTraces.forEach((n)=>{
            if (n.traceID !== e.traceID && n.traceType !== "RESPONSIVENESS") {
                t.add(n.traceType);
            }
        });
        if (t.size > 0) {
            r("addAnnotations")(e.annotations, {
                string_array: {
                    currentTraceTypes: Array.from(t).sort()
                }
            });
        }
    }
    function p() {
        if (!c) {
            if (s) {
                const e = new window.PerformanceObserver(function(e) {
                    const t = e.getEntries();
                    t.forEach((e)=>{
                        u.forEach((t)=>{
                            t(e);
                        });
                    });
                });
                e.observe({
                    buffered: true,
                    type: "longtask"
                });
            }
            _(function(e) {
                let t;
                const n = (t = r("OneTraceCore")).startTrace(r("uuidv4")(), t.getCurrentTracePolicy(), "LONGTASK", e.startTime, null);
                r("addAnnotations")(n.annotations, {
                    int: {
                        instanceNum: d++
                    },
                    string: {
                        recentInteractionIndentifier: t.getRecentInteractionIndentifier()
                    }
                });
                m(n);
                t.endTrace(n.traceID, e.startTime + e.duration, "SUCCESS");
            });
            c = true;
        }
    }
    function _(e) {
        if (s) {
            u.add(e);
            return function() {
                u.delete(e);
            };
        }
        return function() {};
    }
    l.canUseLongTasksAPI = s;
    l.logActiveTraceTypes = m;
    l.init = p;
    l.subscribe = _;
}, 98);