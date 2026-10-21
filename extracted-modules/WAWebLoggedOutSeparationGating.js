__d("WAWebLoggedOutSeparationGating", [
    "WAWebEnvironment",
    "gkx"
], function(t, n, r, o, a, i, l) {
    "use strict";
    function e() {
        if (r("WAWebEnvironment").isWindows || !r("gkx")("27066")) {
            return "none";
        }
        if (r("gkx")("27067")) {
            return "test";
        }
        return "control";
    }
    l.getLoggedOutSeparationExperiment = e;
}, 98);