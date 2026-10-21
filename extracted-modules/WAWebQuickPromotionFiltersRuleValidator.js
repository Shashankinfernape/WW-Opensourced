__d("WAWebQuickPromotionFiltersRuleValidator", [
    "WALogger",
    "WAWebCommonQPSurfacesTypes",
    "WAWebProtobufsQuickPromotionSurfaces.pb",
    "WAWebQuickPromotionDebugLogger",
    "WAWebQuickPromotionFilterUnknown",
    "WAWebQuickPromotionFilters",
    "err"
], function(t, n, r, o, a, i, l) {
    let e;
    const s = 9;
    function u(e, eligibilityContext) {
        const qpConfigFilterRules = e.data.qpConfigFilterRules;
        if (qpConfigFilterRules == null) {
            return o("WAWebCommonQPSurfacesTypes").RESULT_TRUE;
        }
        try {
            return c({
                deepLevel: 0,
                eligibilityContext,
                filterClause: qpConfigFilterRules,
                promotion: e
            });
        } catch (t) {
            o("WAWebQuickPromotionDebugLogger").qpLog("eligibility.filter.exception", {
                promotionId: e.id
            });
            return o("WAWebCommonQPSurfacesTypes").RESULT_FALSE_FILTERS_CHECK_EXCEPTION;
        }
    }
    function c({ deepLevel, eligibilityContext, filterClause, promotion }) {
        if (deepLevel >= s) {
            o("WALogger").ERROR(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                "filterClauseValidator: maximum level reached"
            ]))).sendLogs("quick-promotion-filters-too-deep");
            throw r("err")("filterClauseValidator: maximum level reached");
        }
        const { clauses, clauseType, filters } = filterClause;
        if (filters.length > 0) {
            for (const f of filters){
                const filterName = f.filterName;
                const h = o("WAWebQuickPromotionFilters").getFilterValidator(filterName);
                let y;
                if (h != null) {
                    y = h.filter(promotion, f.parameters, eligibilityContext);
                    if (y === o("WAWebCommonQPSurfacesTypes").RESULT_TRUE) {
                        o("WAWebQuickPromotionDebugLogger").qpLog("eligibility.filter.pass", {
                            promotionId: promotion.id,
                            filterName,
                            parameters: f.parameters
                        });
                    } else {
                        o("WAWebQuickPromotionDebugLogger").qpLog("eligibility.filter.fail", {
                            promotionId: promotion.id,
                            filterName,
                            parameters: f.parameters,
                            reason: y.reason
                        });
                    }
                } else {
                    const defaultAllow = o("WAWebQuickPromotionFilterUnknown").unknownFilter(f.clientNotSupportedConfig);
                    o("WAWebQuickPromotionDebugLogger").qpLog("eligibility.filter.unknown", {
                        promotionId: promotion.id,
                        filterName,
                        defaultAllow
                    });
                    y = defaultAllow ? o("WAWebCommonQPSurfacesTypes").RESULT_TRUE : o("WAWebCommonQPSurfacesTypes").RESULT_FALSE_FILTERS_UNKNOWN;
                }
                const b = d(clauseType, y);
                if (b != null) {
                    return b;
                }
            }
        }
        if (clauses.length > 0) {
            for (const filterClause_1 of clauses){
                const R = c({
                    deepLevel: deepLevel + 1,
                    eligibilityContext,
                    filterClause: filterClause_1,
                    promotion
                });
                const L = d(clauseType, R);
                if (L != null) {
                    return L;
                }
            }
        }
        switch(clauseType){
            case o("WAWebProtobufsQuickPromotionSurfaces.pb").QP$ClauseType.OR:
                return o("WAWebCommonQPSurfacesTypes").RESULT_FALSE_FILTERS_CHECK_FAILED;
            case o("WAWebProtobufsQuickPromotionSurfaces.pb").QP$ClauseType.AND:
            case o("WAWebProtobufsQuickPromotionSurfaces.pb").QP$ClauseType.NOR:
                return o("WAWebCommonQPSurfacesTypes").RESULT_TRUE;
        }
    }
    function d(clauseType, t) {
        switch(clauseType){
            case o("WAWebProtobufsQuickPromotionSurfaces.pb").QP$ClauseType.AND:
                {
                    if (t !== o("WAWebCommonQPSurfacesTypes").RESULT_TRUE) {
                        return t;
                    }
                    break;
                }
            case o("WAWebProtobufsQuickPromotionSurfaces.pb").QP$ClauseType.OR:
                if (t === o("WAWebCommonQPSurfacesTypes").RESULT_TRUE) {
                    return o("WAWebCommonQPSurfacesTypes").RESULT_TRUE;
                }
                break;
            case o("WAWebProtobufsQuickPromotionSurfaces.pb").QP$ClauseType.NOR:
                if (t === o("WAWebCommonQPSurfacesTypes").RESULT_TRUE) {
                    return o("WAWebCommonQPSurfacesTypes").RESULT_FALSE_FILTERS_CHECK_FAILED;
                }
                break;
        }
        return null;
    }
    l.filtersRuleValidator = u;
}, 98);