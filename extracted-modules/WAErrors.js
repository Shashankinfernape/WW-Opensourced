__d("WAErrors", [
    "WACustomError"
], function(t, n, r, o, a, i, l) {
    "use strict";
    let e;
    const s = ((e)=>{
        function t(t) {
            let n;
            n = e.call(this, t ?? "") || this;
            n.name = "BufferTooLargeError";
            return n;
        }
        babelHelpers.inheritsLoose(t, e);
        return t;
    })((e = o("WACustomError")).CustomError);
    const u = ((e)=>{
        function t(t) {
            let n;
            n = e.call(this, t ?? "") || this;
            n.name = "Disconnected";
            return n;
        }
        babelHelpers.inheritsLoose(t, e);
        return t;
    })(e.CustomError);
    const c = ((e)=>{
        function t(t) {
            let n;
            n = e.call(this, t ?? "") || this;
            n.name = "Offline";
            return n;
        }
        babelHelpers.inheritsLoose(t, e);
        return t;
    })(u);
    const d = ((e)=>{
        function t(t) {
            let n;
            n = e.call(this, t ?? "") || this;
            n.name = "MaxRetries";
            return n;
        }
        babelHelpers.inheritsLoose(t, e);
        return t;
    })(e.CustomError);
    const m = ((e)=>{
        function t(t) {
            let n;
            n = e.call(this, t ?? "") || this;
            n.name = "Aborted";
            return n;
        }
        babelHelpers.inheritsLoose(t, e);
        return t;
    })(e.CustomError);
    l.BufferTooLargeError = s;
    l.Disconnected = u;
    l.Offline = c;
    l.MaxRetries = d;
    l.Aborted = m;
}, 98);