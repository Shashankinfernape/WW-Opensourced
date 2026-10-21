__d("WAWebQuickPromotionSurfaceDelayRuleValidator", [
    "WATimeUtils",
    "WAWebCommonQPSurfacesTypes",
    "WAWebQuickPromotionCollection",
    "WAWebQuickPromotionValidatorUtils"
], function(t, n, r, o, a, i, l) {
    function e(e, t) {
        const qpConfigSurfaceDelayTimeSeconds = e.data.qpConfigSurfaceDelayTimeSeconds;
        if (qpConfigSurfaceDelayTimeSeconds <= 0) {
            return o("WAWebCommonQPSurfacesTypes").RESULT_TRUE;
        }
        const a = o("WAWebQuickPromotionCollection").QuickPromotionCollection.getPromotionWithLastImpressionOnSurface(e.surfaceId);
        if (a == null || !o("WATimeUtils").isInFuture(o("WATimeUtils").futureUnixTime(qpConfigSurfaceDelayTimeSeconds, a.lastImpressionTs))) {
            return o("WAWebCommonQPSurfacesTypes").RESULT_TRUE;
        }
        if (a.promotion.promotion.id !== e.id) {
            return o("WAWebCommonQPSurfacesTypes").RESULT_FALSE_SURFACE_DELAY_RECENTLY_USED;
        }
        const i = e.tracking.lastImpressionTs ?? e.ts;
        const l = o("WAWebQuickPromotionValidatorUtils").checkIsWithinEligibilityWindow(i, e.data.qpConfigEligibilityDurationMs);
        if (l) {
            return o("WAWebCommonQPSurfacesTypes").RESULT_TRUE;
        }
        return o("WAWebCommonQPSurfacesTypes").RESULT_FALSE_SURFACE_DELAY_OUTSIDE_ELIGIBILITY_DURATION;
    }
    l.surfaceDelayRuleValidator = e;
}, 98);