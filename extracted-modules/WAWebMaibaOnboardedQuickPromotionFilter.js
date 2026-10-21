__d("WAWebMaibaOnboardedQuickPromotionFilter", [
    "WAWebBizAiAgentStatusUtils",
    "WAWebCommonQPSurfacesTypes",
    "WAWebQuickPromotionValidatorUtils"
], function(t, n, r, o, a, i, l) {
    const e = {
        reason: "filtersRuleValidator:maibaOnboardedFilter: onboarding state does not match expected"
    };
    const s = {
        name: "whatsapp_biz_ai_has_onboarded_client",
        filter: function(n, r, a) {
            const t = o("WAWebQuickPromotionValidatorUtils").convertFilterParametersIntoMap(r);
            const i = t.get("param");
            const l = i != null && parseInt(i, 10) === 1;
            if (o("WAWebBizAiAgentStatusUtils").hasOnboardedAiAgent() !== l) {
                return e;
            }
            return o("WAWebCommonQPSurfacesTypes").RESULT_TRUE;
        }
    };
    l.maibaOnboardedFilter = s;
}, 98);