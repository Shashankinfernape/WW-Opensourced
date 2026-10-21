__d("VultureJSPageLifecycle", [
    "ExecutionEnvironment"
], function(t, n, r, o, a, i, l) {
    "use strict";
    let e;
    function s(t) {
        if ((e || (e = r("ExecutionEnvironment"))).canUseEventListeners) {
            window.addEventListener("pagehide", t);
        }
    }
    l.onPageHide = s;
}, 98);