__d("WAWebMediaHostsErrors", [
    "WACustomError"
], function(t, n, r, o, a, i, l) {
    const e = ((e)=>{
        function t(t) {
            let n;
            n = e.call(this, t ?? "") || this;
            n.name = "NoMediaHostsError";
            return n;
        }
        babelHelpers.inheritsLoose(t, e);
        return t;
    })(o("WACustomError").CustomError);
    l.NoMediaHostsError = e;
}, 98);