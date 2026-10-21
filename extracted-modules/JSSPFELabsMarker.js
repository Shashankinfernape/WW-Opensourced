__d("JSSPFELabsMarker", [
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
                const r = (window.__felab_context ?? {}).annotations ?? {};
                Object.entries(r).filter(([t, n])=>![
                        "object",
                        "function"
                    ].includes(typeof n)).map(([t, n])=>[
                        t,
                        String(n)
                    ]).forEach(([n, r])=>o("JSSelfProfilerUtils").addAnnotationToTrace(e, n, r));
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