__d("JSSPUrlMarker", [
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
            const e = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e, t, { urlData }) {
                if (urlData != null) {
                    e.metadata = e.metadata ?? {};
                    e.metadata.urlWhenStart = urlData.urlBeforeTraceStarts ?? "";
                    e.metadata.urlWhenEnd = urlData.urlAfterTraceEnds ?? "";
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