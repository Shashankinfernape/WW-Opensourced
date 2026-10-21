__d("WAWebSyncdError", [], function(t, n, r, o, a, i) {
    "use strict";
    const e = ((e)=>{
        function t(...r) {
            let t;
            t = e.call(this, ...r) || this;
            t.name = "SyncdMissingKeyError";
            return babelHelpers.assertThisInitialized(t) || babelHelpers.assertThisInitialized(t);
        }
        babelHelpers.inheritsLoose(t, e);
        return t;
    })(babelHelpers.wrapNativeSuper(Error));
    const l = ((e)=>{
        function t(t, n) {
            let r;
            r = e.call(this, t) || this;
            r.name = "SyncdRetryableError";
            r.backoff = n;
            r.message = t;
            return r;
        }
        babelHelpers.inheritsLoose(t, e);
        return t;
    })(babelHelpers.wrapNativeSuper(Error));
    const s = ((e)=>{
        function t(t) {
            let n;
            n = e.call(this, t) || this;
            n.name = "SyncdFatalError";
            n.message = t;
            return n;
        }
        babelHelpers.inheritsLoose(t, e);
        return t;
    })(babelHelpers.wrapNativeSuper(Error));
    i.SyncdMissingKeyError = e;
    i.SyncdRetryableError = l;
    i.SyncdFatalError = s;
}, 66);