__d("JSSPUAMarkerExtractor", [
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
            const e = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
                e.samples.forEach((e)=>{
                    const e_marker = e.marker;
                    if (!(e_marker == null || e_marker === "")) {
                        e.uaMarker = e_marker;
                        e.marker = undefined;
                    }
                });
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