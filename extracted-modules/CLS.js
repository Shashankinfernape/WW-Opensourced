__d("CLS", [], function(t, n, r, o, a, i) {
    "use strict";
    const l = typeof window.PerformanceObserver?.supportedEntryTypes?.includes === "function" && window.PerformanceObserver.supportedEntryTypes.includes("layout-shift");
    function s() {
        if (!l) {
            return null;
        }
        let e = 0;
        let t = 0;
        let n = [];
        const r = new window.PerformanceObserver(function(r) {
            for (const o of r.getEntries()){
                if (!o.hadRecentInput) {
                    const a = n[0];
                    const i = n[n.length - 1];
                    if (t && o.startTime - i.startTime < 1000 && o.startTime - a.startTime < 5000) {
                        t += o.value;
                        n.push(o);
                    } else {
                        t = o.value;
                        n = [
                            o
                        ];
                    }
                    if (t > e) {
                        e = t;
                    }
                }
            }
        });
        r.observe({
            buffered: true,
            type: "layout-shift"
        });
        return function() {
            r.disconnect();
            return e;
        };
    }
    i.getCLSCallback = s;
}, 66);