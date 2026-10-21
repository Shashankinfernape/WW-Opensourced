__d("WAWebContactBlockedErrorAction", [
    "WACustomError"
], function(t, n, r, o, a, i, l) {
    const e = ((e)=>{
        function t(t, n) {
            let r;
            r = e.call(this, t) || this;
            r.name = "ContactBlocked";
            r.contact = n;
            return r;
        }
        babelHelpers.inheritsLoose(t, e);
        return t;
    })(o("WACustomError").CustomError);
    l.default = e;
}, 98);