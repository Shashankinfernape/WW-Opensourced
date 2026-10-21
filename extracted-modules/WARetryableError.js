__d("WARetryableError", [
    "WACustomError"
], function(t, n, r, o, a, i, l) {
    "use strict";
    const e = ((e)=>{
        function t(t) {
            let n;
            n = e.call(this, "see error at this.source") || this;
            n.name = "RetryableError";
            n.source = t;
            return n;
        }
        babelHelpers.inheritsLoose(t, e);
        return t;
    })(o("WACustomError").CustomError);
    l.default = e;
}, 98);