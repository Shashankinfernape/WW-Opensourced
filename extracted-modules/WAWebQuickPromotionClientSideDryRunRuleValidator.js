__d("WAWebQuickPromotionClientSideDryRunRuleValidator", [
    "WAWebCommonQPSurfacesTypes"
], function(t, n, r, o, a, i, l) {
    function e(e, t) {
        const qpConfigClientSideDryRun = e.data.qpConfigClientSideDryRun;
        if (qpConfigClientSideDryRun === "true") {
            return o("WAWebCommonQPSurfacesTypes").RESULT_FALSE_CLIENT_SIDE_DRY_RUN_IS_DRY_RUN;
        }
        return o("WAWebCommonQPSurfacesTypes").RESULT_TRUE;
    }
    l.clientSideDryRunRuleValidator = e;
}, 98);