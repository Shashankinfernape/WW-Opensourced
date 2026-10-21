__d("WAWebVoipPthreadHardening", [], function(t, n, r, o, a, i) {
    "use strict";
    let e = null;
    function l(t) {
        if (e == null) {
            const n = t();
            e = typeof n === "number" && Number.isInteger(n) && n > 0 ? n : 0;
        }
        return e;
    }
    function s() {
        return e ?? 0;
    }
    function u() {
        return s() >= 1;
    }
    function c() {
        return s() >= 2;
    }
    function d() {
        e = null;
    }
    i.latchVoipPthreadHardeningLevel = l;
    i.getVoipPthreadHardeningLevel = s;
    i.isVoipPoolHardeningEnabled = u;
    i.isVoipWorkerLifecycleHardeningEnabled = c;
    i.resetVoipPthreadHardeningLevelForTesting = d;
}, 66);