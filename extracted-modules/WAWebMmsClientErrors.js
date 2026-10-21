__d("WAWebMmsClientErrors", [
    "WAWebHttpErrors"
], function(t, n, r, o, a, i, l) {
    let e;
    const s = ((e)=>{
        function t(t, n) {
            let r;
            r = e.call(this, 404, t) || this;
            r.name = "MediaNotFoundError";
            return r;
        }
        babelHelpers.inheritsLoose(t, e);
        return t;
    })((e = o("WAWebHttpErrors")).HttpStatusCodeError);
    const u = ((e)=>{
        function t(t, n) {
            let r;
            r = e.call(this, 413, t) || this;
            r.name = "MediaTooLargeError";
            return r;
        }
        babelHelpers.inheritsLoose(t, e);
        return t;
    })(e.HttpStatusCodeError);
    const c = ((e)=>{
        function t(t, n) {
            let r;
            r = e.call(this, 415, t) || this;
            r.name = "MediaInvalidError";
            return r;
        }
        babelHelpers.inheritsLoose(t, e);
        return t;
    })(e.HttpStatusCodeError);
    const d = ((e)=>{
        function t(t, n) {
            let r;
            r = e.call(this, 401, t) || this;
            r.name = "MMSUnauthorizedError";
            return r;
        }
        babelHelpers.inheritsLoose(t, e);
        return t;
    })(e.HttpStatusCodeError);
    const m = ((e)=>{
        function t(t, n) {
            let r;
            r = e.call(this, 403, t) || this;
            r.name = "MMSForbiddenError";
            return r;
        }
        babelHelpers.inheritsLoose(t, e);
        return t;
    })(e.HttpStatusCodeError);
    const p = ((e)=>{
        function t(t, n) {
            let r;
            r = e.call(this, 507, t) || this;
            r.name = "MMSThrottleError";
            return r;
        }
        babelHelpers.inheritsLoose(t, e);
        return t;
    })(e.HttpStatusCodeError);
    l.MediaNotFoundError = s;
    l.MediaTooLargeError = u;
    l.MediaInvalidError = c;
    l.MMSUnauthorizedError = d;
    l.MMSForbiddenError = m;
    l.MMSThrottleError = p;
}, 98);