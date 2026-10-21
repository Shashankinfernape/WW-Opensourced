__d("WASmaxParsingFailure", [], function(t, n, r, o, a, i) {
    "use strict";
    const e = ((e)=>{
        function t(t) {
            let n;
            n = e.call(this, `SmaxParsingFailure: ${t}`) || this;
            n.name = "SmaxParsingFailure";
            n.reason = t;
            return n;
        }
        babelHelpers.inheritsLoose(t, e);
        const n = t.prototype;
        n.toString = function() {
            return `SmaxParsingFailure: ${this.reason}`;
        };
        return t;
    })(babelHelpers.wrapNativeSuper(Error));
    i.SmaxParsingFailure = e;
}, 66);