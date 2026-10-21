__d("TypingPerfTracker", [
    "OneTraceCore",
    "TypingPerfMetric",
    "TypingPerfMetric.experimental",
    "WebAPIs",
    "addAnnotations",
    "performanceNow",
    "uuidv4"
], function(t, n, r, o, a, i, l) {
    "use strict";
    let e;
    let s = null;
    function u(e) {
        return s?.has(e) ?? false;
    }
    let c = false;
    const d = o("WebAPIs").requestAnimationFrame != null && o("WebAPIs").cancelAnimationFrame != null;
    function m() {
        if (!c) {
            if (typeof WeakMap === "function") {
                s = new WeakMap;
            }
            c = true;
        }
    }
    function p(t, identifier, a, i, l) {
        const p = l === true ? o("TypingPerfMetric").measureAverageTypingPerformance : o("TypingPerfMetric.experimental").measureAverageTypingPerformance;
        if (s == null || !c || !d) {
            return function() {};
        }
        if (t !== a && a != null && u(a)) {
            _(a);
        }
        if (u(t)) {
            return function() {};
        }
        let f = null;
        const g = p(t, function() {
            const t = r("uuidv4")();
            f = r("OneTraceCore").startTrace(t, identifier, "TYPING", (e || (e = r("performanceNow")))());
            const routeTracePolicy = r("OneTraceCore").getCurrentTracePolicy();
            r("addAnnotations")(f.annotations, {
                string: {
                    routeTracePolicy,
                    identifier
                }
            });
        }, function({ allTimes, averageTimeToRender, keypresses, max, min }) {
            if (f) {
                const u = f;
                let keypressesBelow50ms = 0;
                allTimes.forEach((e)=>{
                    if (e < 50) {
                        keypressesBelow50ms++;
                    }
                });
                if (i) {
                    for(const d in i){
                        if (typeof i[d] === "string") {
                            r("addAnnotations")(u.annotations, {
                                string: {
                                    [d]: i[d]
                                }
                            });
                        } else if (typeof i[d] === "number") {
                            r("addAnnotations")(u.annotations, {
                                int: {
                                    [d]: i[d]
                                }
                            });
                        }
                    }
                }
                r("addAnnotations")(u.annotations, {
                    double: {
                        averageTimeToRender,
                        keypresses,
                        keypressesBelow50ms,
                        max,
                        min
                    }
                });
                r("OneTraceCore").endTrace(u.traceID, (e || (e = r("performanceNow")))(), "SUCCESS");
            }
        });
        const h = function() {
            g();
            s?.delete(t);
        };
        s?.set(t, h);
        return h;
    }
    function _(e) {
        if (s != null) {
            const t = s.get(e);
            if (t) {
                t();
            }
        }
    }
    l.init = m;
    l.trackTypingPerf = p;
    l.unregisterTypingPerf = _;
}, 98);