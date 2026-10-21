__d("WAWebQuickPromotionClientTtlRuleValidator", [
    "WATimeUtils",
    "WAWebCommonQPSurfacesTypes"
], function(t, n, r, o, a, i, l) {
    function e(e, t) {
        const qpConfigTtlSeconds = e.data.qpConfigTtlSeconds;
        const r = o("WATimeUtils").castToUnixTime(qpConfigTtlSeconds);
        if (o("WATimeUtils").isInFuture(o("WATimeUtils").futureUnixTime(r, e.ts))) {
            return o("WAWebCommonQPSurfacesTypes").RESULT_TRUE;
        }
        return o("WAWebCommonQPSurfacesTypes").RESULT_FALSE_CLIENT_TTL_PROMOTION_TOO_OLD;
    }
    l.clientTtlRuleValidator = e;
}, 98);