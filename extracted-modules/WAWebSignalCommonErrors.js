__d("WAWebSignalCommonErrors", [
    "WACustomError"
], function(t, n, r, o, a, i, l) {
    const e = ((e)=>{
        function t(t) {
            let n;
            n = e.call(this, t ?? "") || this;
            n.name = "SignalDecryptionError";
            return n;
        }
        babelHelpers.inheritsLoose(t, e);
        return t;
    })(o("WACustomError").CustomError);
    const s = ((e)=>{
        function t(t) {
            let n;
            n = e.call(this, t ?? "") || this;
            n.name = "SignalMessageCounterError";
            return n;
        }
        babelHelpers.inheritsLoose(t, e);
        return t;
    })(o("WACustomError").CustomError);
    l.SignalDecryptionError = e;
    l.SignalMessageCounterError = s;
}, 98);