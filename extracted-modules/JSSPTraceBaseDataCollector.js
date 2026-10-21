__d("JSSPTraceBaseDataCollector", [
    "FBLogger",
    "asyncToGeneratorRuntime"
], function(t, n, r, o, a, i, l) {
    "use strict";
    const e = (()=>{
        function e() {}
        const e_prototype = e.prototype;
        e_prototype.onProfilerStarts = (()=>{
            const e = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e, t = null) {});
            function t(t, n) {
                return e.apply(this, arguments);
            }
            return t;
        })();
        e_prototype.onProfilerEnds = (()=>{
            const e = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e, t, n, o) {
                r("FBLogger")("JSSelfProfiler").warn("JSSP base data collector onProfilerEnds should be overridden.");
                return n;
            });
            function t(t, n, r, o) {
                return e.apply(this, arguments);
            }
            return t;
        })();
        e_prototype.onProfilerAborts = (()=>{
            const e = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e, t) {});
            function t(t, n) {
                return e.apply(this, arguments);
            }
            return t;
        })();
        return e;
    })();
    l.default = e;
}, 98);