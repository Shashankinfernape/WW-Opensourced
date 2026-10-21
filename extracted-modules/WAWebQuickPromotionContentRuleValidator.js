__d("WAWebQuickPromotionContentRuleValidator", [
    "WAWebCommonQPSurfacesTypes"
], function(t, n, r, o, a, i, l) {
    function e(e, t) {
        const l = (e.data.primaryAction?.deepLink ?? "").length > 0;
        if (l) {
            return o("WAWebCommonQPSurfacesTypes").RESULT_TRUE;
        }
        const s = (e.data.primaryAction?.universalLink ?? "").length > 0;
        if (s) {
            return o("WAWebCommonQPSurfacesTypes").RESULT_TRUE;
        }
        return o("WAWebCommonQPSurfacesTypes").RESULT_FALSE_CONTENT_MISSING_ACTION_LINK;
    }
    l.contentRuleValidator = e;
}, 98);