__d("WAWebAdAttributionUtils", [
    "WAWebCTWAGatingUtils",
    "WAWebMsgSelectors"
], function(t, n, r, o, a, i, l) {
    function e(e) {
        return s(o("WAWebMsgSelectors").showForwarded(e), e.ctwaContext);
    }
    function s(e, t) {
        if (e || t == null || t.alwaysShowAdAttribution !== true) {
            return false;
        }
        return o("WAWebCTWAGatingUtils").isAdsAttributionEnabled() === true;
    }
    l.shouldShowAdAttribution = e;
    l.shouldShowAdAttributionFor = s;
}, 98);