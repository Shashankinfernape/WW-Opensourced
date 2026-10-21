__d("ResponsivenessTracker", [
    "INPLogger",
    "LongtaskObserver",
    "MemoryUtils",
    "OneTraceCore",
    "VisibilityAPI",
    "VisibilityState",
    "WebAPIs",
    "addAnnotations",
    "clearInterval",
    "getIncrementalEventCount",
    "performanceNow",
    "setInterval",
    "uuidv4"
], function(t, n, r, o, a, i, l) {
    "use strict";
    let e;
    const s = 3;
    let u = false;
    let c = 1;
    let d = null;
    let m = null;
    function p(exitAction, t) {
        if (d) {
            const n = d;
            d = null;
            const a = n.metrics.annotations;
            const usedJSHeapSize = o("MemoryUtils").getCurrentMemory().usedJSHeapSize;
            for(const l in n.interruptionStat){
                const u = n.interruptionStat[l];
                r("addAnnotations")(a, {
                    int: {
                        [`${l}_Count`]: u.count,
                        [`${l}_Total`]: u.total,
                        [`${l}_Max`]: u.max,
                        [`${l}_Avg`]: u.count > 0 ? u.total / u.count : 0
                    }
                });
            }
            let totalEventCount = 0;
            o("INPLogger").getObservedEventTypes().forEach((e)=>{
                const t = r("getIncrementalEventCount")(e, "RESPONSIVENESS");
                if (t != null) {
                    r("addAnnotations")(a, {
                        int: {
                            [`eventCount_${e}`]: t
                        }
                    });
                    totalEventCount += t;
                }
            });
            r("addAnnotations")(a, {
                int: {
                    sessionSeq: c++,
                    usedJSHeapSize,
                    totalEventCount,
                    ST200: n.ST200,
                    ST500: n.ST500,
                    ST1000: n.ST1000
                },
                string: {
                    exitAction,
                    recentInteractionIndentifier: r("OneTraceCore").getRecentInteractionIndentifier()
                },
                string_array: {
                    affectedInteractions: n.affectedInteractions
                }
            });
            n.metrics.tracePolicy = n.navigationMetrics.tracePolicy;
            r("OneTraceCore").endTrace(n.metrics.traceID, t, "SUCCESS");
        }
    }
    function _(e, timeSinceStart, duration, r, logSubspans) {
        if (d) {
            const a = d;
            const i = a.interruptionStat[e];
            if (i == null) {
                return;
            }
            i.count++;
            i.total += duration;
            i.max = Math.max(i.max, duration);
            if (logSubspans === true) {
                let l = null;
                if (i.count === r) {
                    l = `${e}_{n}`;
                } else if (i.count < r) {
                    l = `${e}_${i.count}`;
                }
                if (l != null) {
                    a.metrics.markerPoints[`${l}_start`] = {
                        timeSinceStart
                    };
                    a.metrics.markerPoints[`${l}_end`] = {
                        timeSinceStart: timeSinceStart + duration
                    };
                }
            }
        }
    }
    let f = null;
    function g(e, t) {
        if (m != null) {
            r("clearInterval")(m);
            m = null;
        }
        p(e, t);
    }
    function h(t, sessionInterval) {
        if (!o("VisibilityAPI").isVisibilityHidden() && f) {
            const a = ()=>{
                const navigationMetrics = f;
                if (navigationMetrics) {
                    d = {
                        affectedInteractions: [],
                        metrics: r("OneTraceCore").startTrace(r("uuidv4")(), t, "RESPONSIVENESS", (e || (e = r("performanceNow")))()),
                        navigationMetrics,
                        interruptionStat: {
                            INP: {
                                count: 0,
                                total: 0,
                                max: 0
                            },
                            longtask: {
                                count: 0,
                                total: 0,
                                max: 0
                            }
                        },
                        ST200: 0,
                        ST500: 0,
                        ST1000: 0
                    };
                }
                o("INPLogger").getObservedEventTypes().forEach((e)=>{
                    if (d != null) {
                        d.interruptionStat[`${e}_INP`] = {
                            count: 0,
                            total: 0,
                            max: 0
                        };
                    }
                });
            };
            a();
            if (sessionInterval != null) {
                if (m != null) {
                    r("clearInterval")(m);
                }
                m = r("setInterval")(function() {
                    p("interval", (e || (e = r("performanceNow")))());
                    a();
                }, sessionInterval);
            }
        }
    }
    function y(t) {
        if (!u) {
            u = true;
            if (!o("INPLogger").canUseEventTimingAPI || !o("LongtaskObserver").canUseLongTasksAPI) {
                return;
            }
            const a = t.Responsiveness.overrideMaxSubspans ?? s;
            o("LongtaskObserver").subscribe(function(e) {
                _("longtask", e.startTime, e.duration, a, t.Responsiveness.logSubspans);
            });
            o("INPLogger").subscribe(function(e) {
                _("INP", e.startTime, e.duration, a, t.Responsiveness.logSubspans);
                _(`${e.name}_INP`, e.startTime, e.duration, a, t.Responsiveness.logSubspans);
                if (d != null && e.duration >= 200) {
                    d.ST200 += e.duration;
                    if (e.duration >= 500) {
                        d.ST500 += e.duration;
                        if (e.duration >= 1000) {
                            d.ST1000 += e.duration;
                        }
                    }
                }
            });
            r("OneTraceCore").currentTraces.forEach((e)=>{
                if (e.traceType === "INITIAL_LOAD") {
                    f = e;
                    h(e.tracePolicy, t.Responsiveness.sessionInterval);
                }
            });
            var i = r("OneTraceCore").subscribe("trace-start", function(n) {
                if (t.Responsiveness.sessionInterval == null) {
                    if (n.traceType === "INITIAL_LOAD" || n.traceType === "NAVIGATION") {
                        if (d != null) {
                            g("navigation", (e || (e = r("performanceNow")))());
                        }
                        f = n;
                        h(n.tracePolicy, t.Responsiveness.sessionInterval);
                    }
                } else if (n.traceType === "INITIAL_LOAD" && d == null) {
                    f = n;
                    h(n.tracePolicy, t.Responsiveness.sessionInterval);
                    i();
                }
            });
            o("VisibilityState").subscribe(function(n, o) {
                if (o) {
                    g("VisibilityState", (e || (e = r("performanceNow")))());
                } else {
                    const a = r("OneTraceCore").getCurrentTracePolicy();
                    h(a, t.Responsiveness.sessionInterval);
                }
            });
            o("WebAPIs").onBeforeUnload(function() {
                g("unload", (e || (e = r("performanceNow")))());
            });
        }
    }
    function C(e) {
        d?.affectedInteractions.push(e);
    }
    l.init = y;
    l.annotateInteractionToResponsiveness = C;
}, 98);