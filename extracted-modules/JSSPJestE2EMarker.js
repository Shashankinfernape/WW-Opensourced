__d("JSSPJestE2EMarker", [
    "JSSPTraceBaseTransformer",
    "JSSelfProfilerUtils",
    "asyncToGeneratorRuntime"
], function(t, n, r, o, a, i, l) {
    "use strict";
    const e = ((e)=>{
        function t() {
            return e.apply(this, arguments) || this;
        }
        babelHelpers.inheritsLoose(t, e);
        const t_prototype = t.prototype;
        t_prototype.transform = (()=>{
            const e = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
                if (typeof window !== "undefined" && window.$JSSPJestE2EMarker1 != null) {
                    e.samples.forEach((e)=>o("JSSelfProfilerUtils").addMarkerToSample(e, "jest-e2e"));
                }
                return e;
            });
            function t(t) {
                return e.apply(this, arguments);
            }
            return t;
        })();
        return t;
    })(r("JSSPTraceBaseTransformer"));
    l.default = e;
}, 98);