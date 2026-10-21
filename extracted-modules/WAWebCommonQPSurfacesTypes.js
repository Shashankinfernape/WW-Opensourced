__d("WAWebCommonQPSurfacesTypes", [], function(t, n, r, o, a, i) {
    const e = {
        result: true
    };
    const l = {
        reason: "actionLimitRuleValidator: dissmiss limit reached"
    };
    const s = {
        reason: "actionLimitRuleValidator: primary click limit reached"
    };
    const u = {
        reason: "actionLimitRuleValidator: impression limit reached"
    };
    const c = {
        reason: "clientTtlRuleValidator: promotion too old"
    };
    const d = {
        reason: "contentRuleValidator: missing action link"
    };
    const m = {
        reason: "enabledTimeRuleValidator: start time in future"
    };
    const p = {
        reason: "enabledTimeRuleValidator: end time in past"
    };
    const _ = {
        reason: "filtersRuleValidator: filter check failed"
    };
    const f = {
        reason: "filtersRuleValidator: filter check exception"
    };
    const g = {
        reason: "filtersRuleValidator: unknown filter failed default check"
    };
    const h = {
        reason: "filtersRuleValidator: seconds since last impression check failed"
    };
    const y = {
        reason: "filtersRuleValidator: other promotion event check failed"
    };
    const C = {
        reason: "holdoutRuleValidator: in holdout"
    };
    const b = {
        reason: "surfaceDelayRuleValidator: surface recently used"
    };
    const v = {
        reason: "surfaceDelayRuleValidator: outside eligibility duration"
    };
    const S = {
        reason: "surfaceRuleValidator: incorrect surface"
    };
    const R = {
        reason: "clientSideDryRunRuleValidator: is dry run"
    };
    i.RESULT_TRUE = e;
    i.RESULT_FALSE_ACTION_LIMIT_DISMISS_LIMIT_REACHED = l;
    i.RESULT_FALSE_ACTION_LIMIT_PRIMARY_CLICK_LIMIT_REACHED = s;
    i.RESULT_FALSE_ACTION_LIMIT_IMPRESSION_LIMIT_REACHED = u;
    i.RESULT_FALSE_CLIENT_TTL_PROMOTION_TOO_OLD = c;
    i.RESULT_FALSE_CONTENT_MISSING_ACTION_LINK = d;
    i.RESULT_FALSE_ENABLED_TIME_START_TIME_IN_FUTURE = m;
    i.RESULT_FALSE_ENABLED_TIME_END_TIME_IN_PAST = p;
    i.RESULT_FALSE_FILTERS_CHECK_FAILED = _;
    i.RESULT_FALSE_FILTERS_CHECK_EXCEPTION = f;
    i.RESULT_FALSE_FILTERS_UNKNOWN = g;
    i.RESULT_FALSE_FILTERS_SECONDS_SINCE_LAST_IMPRESSION = h;
    i.RESULT_FALSE_FILTERS_OTHER_PROMOTION_EVENT = y;
    i.RESULT_FALSE_HOLDOUT_IN_HOLDOUT = C;
    i.RESULT_FALSE_SURFACE_DELAY_RECENTLY_USED = b;
    i.RESULT_FALSE_SURFACE_DELAY_OUTSIDE_ELIGIBILITY_DURATION = v;
    i.RESULT_FALSE_SURFACE_INCORRECT_SURFACE = S;
    i.RESULT_FALSE_CLIENT_SIDE_DRY_RUN_IS_DRY_RUN = R;
}, 66);