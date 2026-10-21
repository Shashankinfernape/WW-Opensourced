__d("WAWebReactionGatingUtils", [
    "WAWebA11yUtils",
    "WAWebABProps"
], function(t, n, r, o, a, i, l) {
    function e() {
        return o("WAWebABProps").getABPropConfigValue("wa_web_quick_reactions") === true;
    }
    function s() {
        return !o("WAWebA11yUtils").getPrefersReducedMotion();
    }
    l.isHoverBarEnabled = e;
    l.isReactionsMotionV2Enabled = s;
}, 98);