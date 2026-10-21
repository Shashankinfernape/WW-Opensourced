__d("WAWebQuickPromotionHoldoutRuleValidator", [
    "WAWebCommonQPSurfacesTypes",
    "WAWebPersistedJobDefinitions",
    "WAWebQuickPromotionValidatorUtils",
    "WAWebServicedJobs"
], function(t, n, r, o, a, i, l) {
    function e(e, t) {
        const e_data = e.data;
        const { qpConfigExperimentKey, qpConfigExposureHoldout } = e_data;
        const i = qpConfigExperimentKey != null && qpConfigExperimentKey.length > 0;
        if (i || o("WAWebQuickPromotionValidatorUtils").isWhatsappGkEnabledPromotion(e.data)) {
            o("WAWebServicedJobs").runServicedJob(o("WAWebPersistedJobDefinitions").jobSerializers.userExposureToQuickPromotion(e.id, qpConfigExperimentKey ?? "", qpConfigExposureHoldout));
        }
        if (qpConfigExposureHoldout === "true") {
            return o("WAWebCommonQPSurfacesTypes").RESULT_FALSE_HOLDOUT_IN_HOLDOUT;
        }
        return o("WAWebCommonQPSurfacesTypes").RESULT_TRUE;
    }
    l.holdoutRuleValidator = e;
}, 98);