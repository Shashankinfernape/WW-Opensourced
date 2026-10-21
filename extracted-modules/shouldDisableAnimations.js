__d("shouldDisableAnimations", [
    "ExecutionEnvironment"
], function(t, n, r, o, a, i, l) {
    "use strict";
    let e;
    const s = 4;
    function u() {
        if ((e || (e = r("ExecutionEnvironment"))).canUseDOM) {
            return navigator.hardwareConcurrency != null && navigator.hardwareConcurrency < s;
        }
        return false;
    }
    l.default = u;
}, 98);