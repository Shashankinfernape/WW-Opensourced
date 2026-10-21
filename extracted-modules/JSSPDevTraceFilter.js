__d("JSSPDevTraceFilter", [
    "JSSPTraceBaseTransformer",
    "SiteData",
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
                e.frames.forEach((e)=>{
                    if (e.resourceId != null && r("SiteData").push_phase === "dev") {
                        e.name = "";
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