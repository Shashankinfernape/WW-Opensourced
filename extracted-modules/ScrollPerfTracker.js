__d("ScrollPerfTracker", [
    "LongAnimationFrameObserver",
    "LongtaskObserver",
    "OneTraceCore",
    "addAnnotations",
    "clearTimeoutCometLoggingPri",
    "performanceNow",
    "setTimeoutCometLoggingPri",
    "uuidv4"
], function(t, n, r, o, a, i, l) {
    "use strict";
    let e;
    const s = new Map;
    const u = "data-scrolltracepolicy";
    const c = 200;
    const d = 16.67;
    const m = d * 4;
    const p = 500;
    let _ = false;
    function f(e) {
        if (!_) {
            const t = function(t) {
                let e = s.get(t.target);
                if (!e) {
                    if (t.target === window.document || t.target instanceof Element && typeof t.target.getAttribute === "function" && t.target.getAttribute(u) != null) {
                        e = g(t);
                    }
                }
                if (e) {
                    e.metrics.markerPoints.lastScrollEvent = {
                        timeSinceStart: t.timeStamp
                    };
                    e.scrollEventCount++;
                    if (e.debounceTimeoutID != null) {
                        r("clearTimeoutCometLoggingPri")(e.debounceTimeoutID);
                    }
                    e.debounceTimeoutID = r("setTimeoutCometLoggingPri")(h, p, e, t.target);
                }
            };
            if (o("LongtaskObserver").canUseLongTasksAPI || o("LongAnimationFrameObserver").canUseLongAnimationFrameAPI) {
                window.addEventListener("scroll", t, {
                    capture: true,
                    passive: true
                });
            }
            _ = true;
        }
    }
    function g(t) {
        const t_timeStamp = t.timeStamp;
        const a = r("uuidv4")();
        const i = r("OneTraceCore").getCurrentTracePolicy();
        const l = t.target instanceof Element && typeof t.target.getAttribute === "function" ? t.target.getAttribute(u) : null;
        const metrics = r("OneTraceCore").startTrace(a, l ?? i, "SCROLL", t_timeStamp);
        var d = {
            longtasks: [],
            longAnimationFrames: [],
            scrollEventCount: 0,
            metrics,
            unsubscribeLongtaskObserver: o("LongtaskObserver").subscribe(function(e) {
                d.longtasks.push(e);
            }),
            unsubscribeLongAnimationFrameObserver: o("LongAnimationFrameObserver").subscribe(function(e) {
                d.longAnimationFrames.push(e);
            })
        };
        r("addAnnotations")(metrics.annotations, {
            string: {
                traceType: "SCROLL"
            }
        });
        metrics.markerPoints.firstScrollEvent = {
            timeSinceStart: t_timeStamp
        };
        metrics.markerPoints.handlerStart = {
            timeSinceStart: (e || (e = r("performanceNow")))()
        };
        s.set(t.target, d);
        return d;
    }
    function h(t, n) {
        const o = (e || (e = r("performanceNow")))();
        const t_metrics = t.metrics;
        t_metrics.endTime = o;
        r("addAnnotations")(t_metrics.annotations, {
            int: {
                scrollDuration: o - t_metrics.startTime,
                scrollEventCount: t.scrollEventCount,
                longtaskCount: t.longtasks.length,
                longAnimationFrameCount: t.longAnimationFrames.length
            }
        });
        let i = 0;
        if (t.longtasks.length > 0) {
            let l = 0;
            let u = 0;
            let d = 0;
            t.longtasks.forEach((e)=>{
                if (!(e.startTime + e.duration < t_metrics.startTime)) {
                    const t = e.startTime < t_metrics.startTime ? e.duration + e.startTime - t_metrics.startTime : e.duration;
                    l += t > 50 ? t - 50 : 0;
                    if (t >= c) {
                        d++;
                    }
                    i += t;
                    if (t > u) {
                        u = t;
                    }
                }
            });
            r("addAnnotations")(t_metrics.annotations, {
                int: {
                    largeLongtaskCount: d,
                    maxLongtaskDuration: u,
                    avgLongtaskDuration: i / t.longtasks.length,
                    totalBlockingTime: l
                }
            });
        }
        r("addAnnotations")(t_metrics.annotations, {
            int: {
                totalLongtaskDuration: i
            }
        });
        v(t_metrics, t.longAnimationFrames);
        t.unsubscribeLongtaskObserver();
        t.unsubscribeLongAnimationFrameObserver();
        s.delete(n);
        r("OneTraceCore").endTrace(t_metrics.traceID, o, "SUCCESS");
    }
    function y(t, n = (e || (e = r("performanceNow")))()) {
        const o = r("OneTraceCore").startTrace(r("uuidv4")(), t, "SCROLL", n);
        r("addAnnotations")(o.annotations, {
            string: {
                traceType: "SCROLL"
            }
        });
        const a = C(o);
        const i = b(o);
        return function(t) {
            const n = (e || (e = r("performanceNow")))();
            o.endTime = n;
            r("addAnnotations")(o.annotations, {
                int: {
                    scrollDuration: n - o.startTime
                }
            });
            if (t != null) {
                r("addAnnotations")(o.annotations, {
                    double: {
                        scrollDistanceX: t.x,
                        scrollDistanceY: t.y
                    }
                });
            }
            a();
            i();
            r("OneTraceCore").endTrace(o.traceID, n, "SUCCESS");
        };
    }
    function C(e) {
        const t = [];
        const n = o("LongtaskObserver").subscribe(function(e) {
            t.push(e);
        });
        return function() {
            n();
            r("addAnnotations")(e.annotations, {
                int: {
                    longtaskCount: t.length
                }
            });
            if (t.length > 0) {
                let o = 0;
                let a = 0;
                let i = 0;
                let l = 0;
                t.forEach((t)=>{
                    if (!(t.startTime + t.duration < e.startTime)) {
                        const n = t.startTime < e.startTime ? t.duration + t.startTime - e.startTime : t.duration;
                        o += n > 50 ? n - 50 : 0;
                        if (n >= c) {
                            l++;
                        }
                        a += n;
                        if (n > i) {
                            i = n;
                        }
                    }
                });
                r("addAnnotations")(e.annotations, {
                    int: {
                        largeLongtaskCount: l,
                        maxLongtaskDuration: i,
                        avgLongtaskDuration: a / t.length,
                        totalLongtaskDuration: a,
                        totalBlockingTime: o
                    }
                });
            }
        };
    }
    function b(e) {
        const t = [];
        const n = o("LongAnimationFrameObserver").subscribe(function(e) {
            t.push(e);
        });
        return function() {
            n();
            v(e, t);
        };
    }
    function v(e, t) {
        r("addAnnotations")(e.annotations, {
            int: {
                loafSupported: o("LongAnimationFrameObserver").canUseLongAnimationFrameAPI ? 1 : 0,
                longAnimationFrameCount: t.length
            }
        });
        const e_endTime = e.endTime;
        if (!(e_endTime == null || e_endTime <= e.startTime)) {
            let totalLoAFDuration = 0;
            let totalFrameDrops = 0;
            let totalLoAFBlockingTime = 0;
            let maxLoAFDuration = 0;
            let largeLoAFCount = 0;
            let totalLargeFrameDrops = 0;
            t.forEach((t)=>{
                if (!(t.startTime + t.duration < e.startTime)) {
                    const n = t.startTime < e.startTime ? t.duration + t.startTime - e.startTime : t.duration;
                    if (t.startTime >= e.startTime) {
                        totalLoAFBlockingTime += t.blockingDuration;
                    }
                    if (n >= m) {
                        largeLoAFCount++;
                    }
                    totalLoAFDuration += n;
                    if (n > maxLoAFDuration) {
                        maxLoAFDuration = n;
                    }
                    if (!(n <= d)) {
                        const r = (n - d) / m;
                        totalLargeFrameDrops += r;
                        const o = (n - d) / d;
                        totalFrameDrops += o;
                    }
                }
            });
            const p = (e_endTime - e.startTime) / 60000;
            const largeFrameDropsPerMinute = p <= 0 ? 0 : Math.floor(totalLargeFrameDrops / p);
            const frameDropPerMinute = p <= 0 ? 0 : Math.floor(totalFrameDrops / p);
            const avgLoAFDuration = t.length === 0 ? 0 : totalLoAFDuration / t.length;
            r("addAnnotations")(e.annotations, {
                int: {
                    avgLoAFDuration,
                    frameDropPerMinute,
                    maxLoAFDuration,
                    largeFrameDropsPerMinute,
                    largeLoAFCount,
                    totalFrameDrops,
                    totalLargeFrameDrops,
                    totalLoAFBlockingTime,
                    totalLoAFDuration
                }
            });
        }
    }
    l.SCROLL_PERF_ATTRIBUTE_NAME = u;
    l.init = f;
    l.customScrollTracker = y;
}, 98);