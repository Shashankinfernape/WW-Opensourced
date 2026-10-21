__d("JSSPTraceBaseTransformer", [
    "FBLogger",
    "asyncToGeneratorRuntime"
], function(t, n, r, o, a, i, l) {
    "use strict";
    const e = (()=>{
        function e() {}
        const e_prototype = e.prototype;
        e_prototype.transform = (()=>{
            const e = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e, t, n) {
                r("FBLogger")("JSSelfProfiler").warn("JSSP base transformer should be overridden.");
                return e;
            });
            function t(t, n, r) {
                return e.apply(this, arguments);
            }
            return t;
        })();
        e_prototype.onProfilerAborts = (()=>{
            const e = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {});
            function t(t) {
                return e.apply(this, arguments);
            }
            return t;
        })();
        return e;
    })();
    l.default = e;
}, 98);