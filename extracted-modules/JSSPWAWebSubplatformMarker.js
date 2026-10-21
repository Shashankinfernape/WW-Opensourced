__d("JSSPWAWebSubplatformMarker", [
    "JSSPTraceBaseTransformer",
    "JSSelfProfilerUtils",
    "WAWebEnvironment",
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
            const e = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e, t, n) {
                const a = r("WAWebEnvironment").isWindows ? "hybrid" : "web";
                o("JSSelfProfilerUtils").addAnnotationToTrace(e, "subplatform", a);
                return e;
            });
            function t(t, n, r) {
                return e.apply(this, arguments);
            }
            return t;
        })();
        return t;
    })(r("JSSPTraceBaseTransformer"));
    l.default = e;
}, 98);