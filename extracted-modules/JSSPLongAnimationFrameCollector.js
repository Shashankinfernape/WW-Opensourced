__d("JSSPLongAnimationFrameCollector", [
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
                r.LoAFEntryList = o("JSSelfProfilerUtils").mergeList(r.LoAFEntryList ?? [], e.get(t) ?? []);
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
        a.startLoAFObserver = function() {
            r("one-trace").subscribe("trace-end", function(t) {
                if (t.traceType === "LONG_ANIMATION_FRAME") {
                    if (t.endTime == null) {
                        return;
                    }
                    const { annotations, markerPoints } = t;
                    const y = {
                        startTime: t.startTime,
                        endTime: t.endTime,
                        blockingDuration: annotations.int?.blockingDuration ?? 0,
                        firstUIEventTimestamp: markerPoints.firstUIEventTimestamp?.timeSinceStart ?? 0,
                        renderStart: markerPoints.renderStart?.timeSinceStart ?? 0,
                        styleAndLayoutStart: markerPoints.styleAndLayoutStart?.timeSinceStart ?? 0,
                        LoAFTotalScriptExecutionDuration: annotations.int?.startToRender ?? 0,
                        LoAFTotalRenderToStyleAndLayoutDuration: annotations.int?.renderToStyleAndLayout ?? 0,
                        LoAFTotalStyleAndLayoutToPaintDuration: annotations.int?.styleAndLayoutToPaint ?? 0
                    };
                    e.forEach((e)=>{
                        e.push(y);
                    });
                }
            });
            r("one-trace").subscribe("trace-end-before-logging", function(t) {
                if (t.traceType === "LONG_ANIMATION_FRAME") {
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
    if (o("JSSPSetting").isCollectingLoAF) {
        c.startLoAFObserver();
    }
    l.default = c;
}, 98);