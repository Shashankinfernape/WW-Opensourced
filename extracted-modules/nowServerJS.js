__d("nowServerJS", [], function(t, n, r, o, a, i) {
    "use strict";
    function e() {
        if (window._nowInl && typeof window._nowInl === "function") {
            return window._nowInl();
        }
        const window_performance = window.performance;
        if (window_performance && window_performance.now && window_performance.timing && window_performance.timing.navigationStart) {
            return window_performance.now() + window_performance.timing.navigationStart;
        }
        return new Date().getTime();
    }
    i.default = e;
}, 66);