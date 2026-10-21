__d("JSSPMemoryMarker", [
    "JSSPTraceBaseTransformer",
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
                e.metadata = e.metadata ?? {};
                const n_memoryData = n.memoryData;
                let a = null;
                let i = null;
                if (n_memoryData != null) {
                    a = n_memoryData.start?.usedJSHeapSize;
                    i = n_memoryData.end?.usedJSHeapSize;
                }
                if (a != null && i != null) {
                    e.metadata.usedJSHeapSizeWhenStart = a;
                    e.metadata.usedJSHeapSizeWhenEnd = i;
                }
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