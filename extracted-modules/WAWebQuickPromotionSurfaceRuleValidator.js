__d("WAWebQuickPromotionSurfaceRuleValidator", [
    "WAWebCommonQPSurfacesTypes"
], function(t, n, r, o, a, i, l) {
    function e(e, t) {
        if (e.surfaceId === t.surfaceId) {
            return o("WAWebCommonQPSurfacesTypes").RESULT_TRUE;
        }
        return o("WAWebCommonQPSurfacesTypes").RESULT_FALSE_SURFACE_INCORRECT_SURFACE;
    }
    l.surfaceRuleValidator = e;
}, 98);