__d("RDRequireDeferredReference", [
    "RequireDeferredReference"
], function(t, n, r, o, a, i, l) {
    "use strict";
    const e = ((e)=>{
        function t() {
            return e.apply(this, arguments) || this;
        }
        babelHelpers.inheritsLoose(t, e);
        t.disableForSSR_DO_NOT_USE = function() {
            this.$RDRequireDeferredReference$p_1 = false;
        };
        const t_prototype = t.prototype;
        t_prototype.isAvailableInSSR_DO_NOT_USE = function() {
            return this.constructor.$RDRequireDeferredReference$p_1;
        };
        return t;
    })(r("RequireDeferredReference"));
    e.$RDRequireDeferredReference$p_1 = true;
    l.default = e;
}, 98);