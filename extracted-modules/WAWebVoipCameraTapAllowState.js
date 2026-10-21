__d("WAWebVoipCameraTapAllowState", [], function(t, n, r, o, a, i) {
    "use strict";
    let e = null;
    function l(t) {
        e = t;
    }
    function s(t) {
        if (e === t) {
            e = null;
        }
    }
    function u(t) {
        return t != null && e === t;
    }
    function c() {
        e = null;
    }
    i.beginCameraTapAllow = l;
    i.endCameraTapAllow = s;
    i.isCameraTapAllowPending = u;
    i.resetCameraTapAllowForTesting = c;
}, 66);