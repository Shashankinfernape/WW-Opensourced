__d("JSSPInteractionToNextPaintCollector", [
    "JSSPSetting",
    "JSSPTraceBaseDataCollector",
    "JSSelfProfilerUtils",
    "asyncToGeneratorRuntime",
    "one-trace"
], function(t, n, r, o, a, i, l) {
    "use strict";
    const e = new Map;
    const s = new Map;
    const u = new Map;
    const c = ((t)=>{
        function a() {
            return t.apply(this, arguments) || this;
        }
        babelHelpers.inheritsLoose(a, t);
        const a_prototype = a.prototype;
        a_prototype.onProfilerStarts = (()=>{
            const t = n("asyncToGeneratorRuntime").asyncToGenerator(function*(t, n = null) {
                e.set(t, []);
                u.set(t, Date.now());
                if (n != null) {
                    s.set(t, new Set(n));
                }
            });
            function r(e, n) {
                return t.apply(this, arguments);
            }
            return r;
        })();
        a_prototype.onProfilerEnds = (()=>{
            const t = n("asyncToGeneratorRuntime").asyncToGenerator(function*(t, n, r) {
                r.INPEntryList = o("JSSelfProfilerUtils").mergeList(r.INPEntryList ?? [], e.get(t) ?? []);
                e.delete(t);
                u.delete(t);
                s.delete(t);
                return r;
            });
            function r(e, n, r) {
                return t.apply(this, arguments);
            }
            return r;
        })();
        a_prototype.onProfilerAborts = (()=>{
            const t = n("asyncToGeneratorRuntime").asyncToGenerator(function*(t) {
                e.delete(t);
                u.delete(t);
                s.delete(t);
            });
            function r(e) {
                return t.apply(this, arguments);
            }
            return r;
        })();
        a.startINPObserver = function() {
            r("one-trace").subscribe("trace-end", function(t) {
                if (t.traceType === "INP") {
                    if (t.endTime == null || t.annotations.string?.inputEventType == null) {
                        return;
                    }
                    const u = {
                        startTime: t.startTime,
                        endTime: t.endTime,
                        processingEnd: t.markerPoints.processingEnd?.timeSinceStart ?? t.endTime,
                        processingStart: t.markerPoints.processingStart?.timeSinceStart ?? t.startTime,
                        eventType: t.annotations.string?.inputEventType,
                        componentName: t.annotations.string?.reactComponentName
                    };
                    e.forEach((e)=>{
                        e.push(u);
                    });
                }
            });
            r("one-trace").subscribe("trace-end-before-logging", function(t) {
                if (t.traceType === "INP") {
                    let n = false;
                    e.forEach((e, a)=>{
                        if (n !== true) {
                            const i = s.get(a);
                            const l = u.get(a);
                            if (i != null && l != null) {
                                const c = Date.now() - l;
                                const d = c > o("JSSPSetting").slowProfilerSpan;
                                if (d && i.has("fast-profiler") || !d && i.has("slow-profiler")) {
                                    return;
                                }
                            }
                            r("one-trace").addAnnotations(t.annotations, {
                                string: {
                                    JSSPId: a
                                }
                            });
                            n = true;
                        }
                    });
                }
            });
        };
        return a;
    })(r("JSSPTraceBaseDataCollector"));
    if (o("JSSPSetting").isCollectingINP) {
        c.startINPObserver();
    }
    l.default = c;
}, 98);