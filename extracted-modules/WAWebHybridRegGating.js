__d("WAWebHybridRegGating", [
    "WAWebEnvironment",
    "gkx"
], function(t, n, r, o, a, i, l) {
    "use strict";
    function e() {
        if (r("gkx")("3701")) {
            return "test";
        }
        return "control";
    }
    function s() {
        if (r("WAWebEnvironment").getIsShowroom()) {
            return "test";
        }
        if (r("WAWebEnvironment").isWindows && r("gkx")("4131")) {
            return e();
        }
        return "none";
    }
    function u() {
        return s() === "test";
    }
    function c() {
        return r("WAWebEnvironment").isWindows;
    }
    function d() {
        return !u() || m();
    }
    function m() {
        return r("gkx")("26259");
    }
    l.getHybridRegExperiment = s;
    l.isHybridRegEnabled = u;
    l.shouldFollowAppTheme = c;
    l.shouldShowCountrySelector = d;
}, 98);