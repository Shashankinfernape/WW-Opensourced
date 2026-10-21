__d("WACustomError", [
    "fb-error"
], function(t, n, r, o, a, i, l) {
    "use strict";
    function e() {
        return [
            r("fb-error").TAALOpcode.PREVIOUS_FRAME,
            r("fb-error").TAALOpcode.PREVIOUS_FRAME
        ];
    }
    const s = ((t)=>{
        function n(n) {
            let r;
            r = t.call(this, n) || this;
            r.message = n;
            r.taalOpcodes = e();
            return r;
        }
        babelHelpers.inheritsLoose(n, t);
        return n;
    })(babelHelpers.wrapNativeSuper(Error));
    const u = ((e)=>{
        function t(t, n) {
            let r;
            const o = n != null && n.length > 0 ? n : m(t);
            r = e.call(this, o) || this;
            r.name = "AggregateError";
            r.errors = t;
            return r;
        }
        babelHelpers.inheritsLoose(t, e);
        return t;
    })(s);
    const c = ((e)=>{
        function t(t) {
            let n;
            n = e.call(this, t ?? "TimeoutError") || this;
            n.name = "TimeoutError";
            return n;
        }
        babelHelpers.inheritsLoose(t, e);
        return t;
    })(s);
    const d = ((e)=>{
        function t(t) {
            let n;
            n = e.call(this, t ?? "UnimplementedMethod") || this;
            n.name = "UnimplementedMethod";
            return n;
        }
        babelHelpers.inheritsLoose(t, e);
        return t;
    })(s);
    function m(e) {
        if (e.length === 0) {
            return "No errors";
        }
        if (e.length === 1) {
            return e[0].message;
        }
        return e.map((e)=>`- ${e.message}`).join("\n");
    }
    l.CustomError = s;
    l.AggregateError = u;
    l.TimeoutError = c;
    l.UnimplementedMethod = d;
}, 98);