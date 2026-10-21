__d("EmitterSubscription", [
    "EventSubscription"
], function(t, n, r, o, a, i, l) {
    "use strict";
    const e = ((e)=>{
        function t(t, n, r) {
            let o;
            o = e.call(this, t) || this;
            o.listener = n;
            o.context = r;
            return o;
        }
        babelHelpers.inheritsLoose(t, e);
        return t;
    })(r("EventSubscription"));
    l.default = e;
}, 98);