__d("WASmaxInMdIqMixinErrors", [
    "WAResultOrError",
    "WASmaxInMdIQErrorBadRequestMixin",
    "WASmaxInMdIQErrorFeatureNotAvailableMixin",
    "WASmaxInMdIQErrorForbiddenMixin",
    "WASmaxInMdIQErrorInternalServerErrorMixin",
    "WASmaxInMdIQErrorRateOverlimitMixin",
    "WASmaxParseUtils"
], function(t, n, r, o, a, i, l) {
    function e(e) {
        const t = o("WASmaxInMdIQErrorInternalServerErrorMixin").parseIQErrorInternalServerErrorMixin(e);
        if (t.success) {
            return o("WAResultOrError").makeResult({
                name: "IQErrorInternalServerError",
                value: t.value
            });
        }
        const n = o("WASmaxInMdIQErrorBadRequestMixin").parseIQErrorBadRequestMixin(e);
        if (n.success) {
            return o("WAResultOrError").makeResult({
                name: "IQErrorBadRequest",
                value: n.value
            });
        }
        const r = o("WASmaxInMdIQErrorFeatureNotAvailableMixin").parseIQErrorFeatureNotAvailableMixin(e);
        if (r.success) {
            return o("WAResultOrError").makeResult({
                name: "IQErrorFeatureNotAvailable",
                value: r.value
            });
        }
        const a = o("WASmaxInMdIQErrorRateOverlimitMixin").parseIQErrorRateOverlimitMixin(e);
        if (a.success) {
            return o("WAResultOrError").makeResult({
                name: "IQErrorRateOverlimit",
                value: a.value
            });
        }
        const i = o("WASmaxInMdIQErrorForbiddenMixin").parseIQErrorForbiddenMixin(e);
        if (i.success) {
            return o("WAResultOrError").makeResult({
                name: "IQErrorForbidden",
                value: i.value
            });
        }
        return o("WASmaxParseUtils").errorMixinDisjunction(e, [
            "IQErrorInternalServerError",
            "IQErrorBadRequest",
            "IQErrorFeatureNotAvailable",
            "IQErrorRateOverlimit",
            "IQErrorForbidden"
        ], [
            t,
            n,
            r,
            a,
            i
        ]);
    }
    l.parseIqMixinErrors = e;
}, 98);