__d("WAWebBizAiMessageEditEducationPolicy", [
    "WATimeUtils"
], function(t, n, r, o, a, i, l) {
    "use strict";
    const e = 30 * o("WATimeUtils").DAY_SECONDS;
    function s(t, n) {
        return t.tooltipLastDismissedAtSeconds == null || n - t.tooltipLastDismissedAtSeconds >= e;
    }
    function u(e, t, n) {
        if (e != null && !c(e, n)) {
            return false;
        }
        return t.hintLastShownAtSeconds == null || n - t.hintLastShownAtSeconds >= o("WATimeUtils").DAY_SECONDS;
    }
    function c(e, t) {
        return e != null && t >= d(e);
    }
    function d(e) {
        return e.startedAtSeconds + o("WATimeUtils").WEEK_SECONDS;
    }
    function m(e, tooltipLastDismissedAtSeconds) {
        return babelHelpers.extends({}, e, {
            tooltipLastDismissedAtSeconds
        });
    }
    function p(e, hintLastShownAtSeconds) {
        return babelHelpers.extends({}, e, {
            hintLastShownAtSeconds
        });
    }
    l.isDiscoveryTooltipEligible = s;
    l.isPostEditHintEligible = u;
    l.isActivePostEditHintExpired = c;
    l.getPostEditHintExpirySeconds = d;
    l.withDiscoveryTooltipDismissed = m;
    l.withPostEditHintShown = p;
}, 98);