__d("WAWebEventSampling", [], function(t, n, r, o, a, i, l) {
    "use strict";
    let e = null;
    function s(t) {
        if (e == null) {
            return null;
        }
        return e(t);
    }
    function u(e) {
        const t = s(e);
        if (t != null) {
            return Math.abs(t);
        }
        return null;
    }
    function c(t) {
        e = t;
    }
    l.getClientEventSamplingWeight = u;
    l.setGetEventSamplingConfigValueImpl = c;
}, 98);