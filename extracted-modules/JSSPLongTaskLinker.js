__d("JSSPLongTaskLinker", [
    "JSSPSetting",
    "JSSPTraceBaseDataCollector",
    "asyncToGeneratorRuntime",
    "one-trace"
], function(t, n, r, o, a, i, l) {
    "use strict";
    const e = new Map;
    const s = new Map;
    const u = ((t)=>{
        function a() {
            return t.apply(this, arguments) || this;
        }
        babelHelpers.inheritsLoose(a, t);
        const a_prototype = a.prototype;
        a_prototype.onProfilerStarts = (()=>{
            const t = n("asyncToGeneratorRuntime").asyncToGenerator(function*(t, n = null) {
                s.set(t, Date.now());
                if (n != null) {
                    e.set(t, new Set(n));
                }
            });
            function r(e, n) {
                return t.apply(this, arguments);
            }
            return r;
        })();
        a_prototype.onProfilerEnds = (()=>{
            const t = n("asyncToGeneratorRuntime").asyncToGenerator(function*(t, n, r) {
                s.delete(t);
                e.delete(t);
                return r;
            });
            function r(e, n, r) {
                return t.apply(this, arguments);
            }
            return r;
        })();
        a_prototype.onProfilerAborts = (()=>{
            const t = n("asyncToGeneratorRuntime").asyncToGenerator(function*(t) {
                s.delete(t);
                e.delete(t);
            });
            function r(e) {
                return t.apply(this, arguments);
            }
            return r;
        })();
        a.startLongtaskObserver = function() {
            r("one-trace").subscribe("trace-end-before-logging", function(t) {
                if (t.traceType === "LONGTASK") {
                    let n = false;
                    e.forEach((a, i)=>{
                        if (n !== true) {
                            const l = e.get(i);
                            const u = s.get(i);
                            if (l != null && u != null) {
                                const c = Date.now() - u;
                                const d = c > o("JSSPSetting").slowProfilerSpan;
                                if (d && l.has("fast-profiler") || !d && l.has("slow-profiler")) {
                                    return;
                                }
                            }
                            r("one-trace").addAnnotations(t.annotations, {
                                string: {
                                    JSSPId: i
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
        u.startLongtaskObserver();
    }
    l.default = u;
}, 98);