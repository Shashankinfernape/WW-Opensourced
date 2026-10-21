__d("WAWebQuickPromotionFilterSecondsSinceLastImpression", [
    "WALogger",
    "WAWebCommonQPSurfacesTypes",
    "WAWebQuickPromotionValidatorUtils",
    "err"
], function(t, n, r, o, a, i, l) {
    let e;
    let s;
    function u(t, n) {
        const lastImpressionTs = t.tracking.lastImpressionTs;
        const i = lastImpressionTs ?? t.ts;
        const l = o("WAWebQuickPromotionValidatorUtils").checkIsWithinEligibilityWindow(i, t.data.qpConfigEligibilityDurationMs);
        if (l || lastImpressionTs == null) {
            return o("WAWebCommonQPSurfacesTypes").RESULT_TRUE;
        }
        const u = o("WAWebQuickPromotionValidatorUtils").convertFilterParametersIntoMap(n);
        const d = u.get("param");
        if (d == null) {
            o("WALogger").ERROR(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                'secondsSinceLastImpressionFilter: missing "param"'
            ]))).sendLogs("quick-promotion-filter-missing-parameter");
            throw r("err")('secondsSinceLastImpressionFilter: missing "param"');
        }
        const m = parseInt(d, 10);
        if (Number.isNaN(m)) {
            o("WALogger").ERROR(s || (s = babelHelpers.taggedTemplateLiteralLoose([
                'secondsSinceLastImpressionFilter: "param" is not an integer'
            ]))).sendLogs("quick-promotion-filter-parameter-incorrect");
            throw r("err")('secondsSinceLastImpressionFilter: "param" is not an integer');
        }
        return c(!o("WAWebQuickPromotionValidatorUtils").checkIsWithinEligibilityWindow(lastImpressionTs, m * 1000));
    }
    function c(e) {
        if (e) {
            return o("WAWebCommonQPSurfacesTypes").RESULT_TRUE;
        }
        return o("WAWebCommonQPSurfacesTypes").RESULT_FALSE_FILTERS_SECONDS_SINCE_LAST_IMPRESSION;
    }
    const d = {
        name: "seconds_since_last_impression",
        filter: u
    };
    l.secondsSinceLastImpressionFilter = d;
}, 98);