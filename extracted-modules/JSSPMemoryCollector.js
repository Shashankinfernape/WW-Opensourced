__d("JSSPMemoryCollector", [
    "JSSPTraceBaseDataCollector",
    "MemoryUtils",
    "asyncToGeneratorRuntime"
], function(t, n, r, o, a, i, l) {
    "use strict";
    const e = new Map;
    const s = ((t)=>{
        function r() {
            return t.apply(this, arguments) || this;
        }
        babelHelpers.inheritsLoose(r, t);
        const r_prototype = r.prototype;
        r_prototype.onProfilerStarts = (()=>{
            const t = n("asyncToGeneratorRuntime").asyncToGenerator(function*(t, n = null) {
                e.set(t, {
                    start: o("MemoryUtils").getCurrentMemory({
                        runGC: false
                    }),
                    end: null
                });
            });
            function r(e, n) {
                return t.apply(this, arguments);
            }
            return r;
        })();
        r_prototype.onProfilerEnds = (()=>{
            const t = n("asyncToGeneratorRuntime").asyncToGenerator(function*(t, n, r) {
                const a = e.get(t);
                if (a != null) {
                    a.end = o("MemoryUtils").getCurrentMemory({
                        runGC: false
                    });
                    r.memoryData = a;
                }
                e.delete(t);
                return r;
            });
            function r(e, n, r) {
                return t.apply(this, arguments);
            }
            return r;
        })();
        r_prototype.onProfilerAborts = (()=>{
            const t = n("asyncToGeneratorRuntime").asyncToGenerator(function*(t) {
                e.delete(t);
            });
            function r(e) {
                return t.apply(this, arguments);
            }
            return r;
        })();
        return r;
    })(r("JSSPTraceBaseDataCollector"));
    l.default = s;
}, 98);