__d("JSSPPerformanceEntryCollector", [
    "JSSPTraceBaseDataCollector",
    "JSSelfProfilerProbe",
    "JSSelfProfilerUtils",
    "asyncToGeneratorRuntime"
], function(t, n, r, o, a, i, l) {
    "use strict";
    let e = null;
    const s = new Map;
    function u() {
        if (!(e != null || !r("JSSelfProfilerProbe").isLongtaskAvailable)) {
            e = new window.PerformanceObserver(function(e) {
                e.getEntries().forEach((e)=>{
                    s.forEach((t)=>t.push(e));
                });
            });
            e.observe({
                buffered: true,
                entryTypes: [
                    "longtask"
                ]
            });
        }
    }
    u();
    const c = ((e)=>{
        function t() {
            return e.apply(this, arguments) || this;
        }
        babelHelpers.inheritsLoose(t, e);
        const t_prototype = t.prototype;
        t_prototype.onProfilerStarts = (()=>{
            const e = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
                s.set(e, []);
            });
            function t(t) {
                return e.apply(this, arguments);
            }
            return t;
        })();
        t_prototype.onProfilerEnds = (()=>{
            const e = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e, t, n) {
                n.performanceEntryList = o("JSSelfProfilerUtils").mergeList(n.performanceEntryList ?? [], s.get(e) ?? []);
                s.delete(e);
                return n;
            });
            function t(t, n, r) {
                return e.apply(this, arguments);
            }
            return t;
        })();
        t_prototype.onProfilerAborts = (()=>{
            const e = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
                s.delete(e);
            });
            function t(t) {
                return e.apply(this, arguments);
            }
            return t;
        })();
        return t;
    })(r("JSSPTraceBaseDataCollector"));
    l.default = c;
}, 98);