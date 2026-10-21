__d("JSSPWAWebConfigInit", [
    "JSSPConfigInit",
    "JSSPWAWebSubplatformMarker",
    "JSSelfProfiler"
], function(t, n, r, o, a, i, l) {
    "use strict";
    const e = ((e)=>{
        function t() {
            return e.apply(this, arguments) || this;
        }
        babelHelpers.inheritsLoose(t, e);
        const t_prototype = t.prototype;
        t_prototype.registerTraceTransformers = function() {
            e.prototype.registerTraceTransformers.call(this);
            r("JSSelfProfiler").registerTraceTransformer(new (r("JSSPWAWebSubplatformMarker")), "JSSPWAWebSubplatformMarker");
        };
        return t;
    })(r("JSSPConfigInit"));
    l.default = e;
}, 98);