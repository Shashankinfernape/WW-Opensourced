__d("WAWebMiscErrors", [
    "WACustomError"
], function(t, n, r, o, a, i, l) {
    let e;
    const s = ((e)=>{
        function t(t) {
            let n;
            n = e.call(this, t ?? "") || this;
            n.name = "GaveUpRetry";
            return n;
        }
        babelHelpers.inheritsLoose(t, e);
        return t;
    })((e = o("WACustomError")).CustomError);
    const u = ((e)=>{
        function t(t, n) {
            let r;
            r = e.call(this, t) || this;
            r.name = "DecodeWebpResultsError";
            r.event = n;
            return r;
        }
        babelHelpers.inheritsLoose(t, e);
        return t;
    })(e.CustomError);
    const c = ((e)=>{
        function t(t, n) {
            let r;
            r = e.call(this, t) || this;
            r.name = "EncodeWebpError";
            r.event = n;
            return r;
        }
        babelHelpers.inheritsLoose(t, e);
        return t;
    })(e.CustomError);
    const d = ((e)=>{
        function t(t, n) {
            let r;
            r = e.call(this, t) || this;
            r.name = "ModelCreateError";
            r.model = n;
            return r;
        }
        babelHelpers.inheritsLoose(t, e);
        return t;
    })(e.CustomError);
    const m = ((e)=>{
        function t(n) {
            let r;
            r = e.call(this, n ?? t.message) || this;
            r.name = "ActionError";
            return r;
        }
        babelHelpers.inheritsLoose(t, e);
        return t;
    })(e.CustomError);
    m.message = "Could not perform action.";
    const p = ((e)=>{
        function t(t) {
            let n;
            n = e.call(this, t ?? "") || this;
            n.name = "Unmount";
            return n;
        }
        babelHelpers.inheritsLoose(t, e);
        return t;
    })(e.CustomError);
    const _ = ((e)=>{
        function t(t) {
            let n;
            n = e.call(this, t) || this;
            n.name = "GoogleLensApiError";
            n.error = t;
            return n;
        }
        babelHelpers.inheritsLoose(t, e);
        return t;
    })(e.CustomError);
    l.GaveUpRetry = s;
    l.DecodeWebpResultsError = u;
    l.EncodeWebpError = c;
    l.ModelCreateError = d;
    l.ActionError = m;
    l.Unmount = p;
    l.GoogleLensApiError = _;
}, 98);