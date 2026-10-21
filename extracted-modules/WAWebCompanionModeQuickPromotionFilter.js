__d("WAWebCompanionModeQuickPromotionFilter", [
    "WAWebCommonQPSurfacesTypes",
    "WAWebQuickPromotionValidatorUtils"
], function(t, n, r, o, a, i, l) {
    const e = {
        reason: "filtersRuleValidator:companionModeFilter: companion state does not match expected"
    };
    const s = {
        name: "whatsapp_user_is_in_companion_mode",
        filter: function(n, r, a) {
            const t = o("WAWebQuickPromotionValidatorUtils").convertFilterParametersIntoMap(r);
            const i = t.get("param");
            const l = i != null && parseInt(i, 10) === 1;
            const s = true;
            if (s !== l) {
                return e;
            }
            return o("WAWebCommonQPSurfacesTypes").RESULT_TRUE;
        }
    };
    l.companionModeFilter = s;
}, 98);