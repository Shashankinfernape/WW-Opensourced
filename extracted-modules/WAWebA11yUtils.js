__d("WAWebA11yUtils", [], function(t, n, r, o, a, i) {
    "use strict";
    function e() {
        return window?.matchMedia("(prefers-reduced-motion: reduce)")?.matches ?? false;
    }
    i.getPrefersReducedMotion = e;
}, 66);