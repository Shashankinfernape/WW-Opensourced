__d("WAWebQuickPromotionEnabledTimeRuleValidator", [
    "WATimeUtils",
    "WAWebCommonQPSurfacesTypes"
], function(t, n, r, o, a, i, l) {
    function e({ data }, t) {
        const { qpConfigEndTimeSeconds, qpConfigStartTimeSeconds } = data;
        const i = o("WATimeUtils").unixTime();
        const l = o("WATimeUtils").castToUnixTime(qpConfigStartTimeSeconds);
        if (l > i) {
            return o("WAWebCommonQPSurfacesTypes").RESULT_FALSE_ENABLED_TIME_START_TIME_IN_FUTURE;
        }
        const s = o("WATimeUtils").castToUnixTime(qpConfigEndTimeSeconds);
        if (s < i) {
            return o("WAWebCommonQPSurfacesTypes").RESULT_FALSE_ENABLED_TIME_END_TIME_IN_PAST;
        }
        return o("WAWebCommonQPSurfacesTypes").RESULT_TRUE;
    }
    l.enabledTimeRuleValidator = e;
}, 98);