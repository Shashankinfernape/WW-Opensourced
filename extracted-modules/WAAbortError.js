__d("WAAbortError", [
    "WACustomError"
], function(t, n, r, o, a, i, l) {
    "use strict";
    const e = ((e)=>{
        function t(t) {
            let n;
            n = e.call(this, t ?? "") || this;
            n.name = "AbortError";
            return n;
        }
        babelHelpers.inheritsLoose(t, e);
        return t;
    })(o("WACustomError").CustomError);
    const s = "AbortError";
    function u(e) {
        return function(t) {
            if (t.name === s) {
                return e(t);
            }
            throw t;
        };
    }
    l.AbortError = e;
    l.ABORT_ERROR = s;
    l.catchAbort = u;
}, 98);