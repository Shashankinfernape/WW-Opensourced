__d("WASmaxInSpamSpamIqErrors", [
    "WAResultOrError",
    "WASmaxInSpamIQErrorBadRequestMixin",
    "WASmaxInSpamIQErrorFeatureNotImplementedMixin",
    "WASmaxInSpamIQErrorForbiddenMixin",
    "WASmaxInSpamIQErrorInternalServerErrorMixin",
    "WASmaxInSpamIQErrorRateOverlimitMixin",
    "WASmaxInSpamIQErrorReportTokenValidationFailMixin",
    "WASmaxParseUtils"
], function(t, n, r, o, a, i, l) {
    function e(e) {
        const t = o("WASmaxInSpamIQErrorInternalServerErrorMixin").parseIQErrorInternalServerErrorMixin(e);
        if (t.success) {
            return o("WAResultOrError").makeResult({
                name: "IQErrorInternalServerError",
                value: t.value
            });
        }
        const n = o("WASmaxInSpamIQErrorBadRequestMixin").parseIQErrorBadRequestMixin(e);
        if (n.success) {
            return o("WAResultOrError").makeResult({
                name: "IQErrorBadRequest",
                value: n.value
            });
        }
        const r = o("WASmaxInSpamIQErrorForbiddenMixin").parseIQErrorForbiddenMixin(e);
        if (r.success) {
            return o("WAResultOrError").makeResult({
                name: "IQErrorForbidden",
                value: r.value
            });
        }
        const a = o("WASmaxInSpamIQErrorRateOverlimitMixin").parseIQErrorRateOverlimitMixin(e);
        if (a.success) {
            return o("WAResultOrError").makeResult({
                name: "IQErrorRateOverlimit",
                value: a.value
            });
        }
        const i = o("WASmaxInSpamIQErrorReportTokenValidationFailMixin").parseIQErrorReportTokenValidationFailMixin(e);
        if (i.success) {
            return o("WAResultOrError").makeResult({
                name: "IQErrorReportTokenValidationFail",
                value: i.value
            });
        }
        const l = o("WASmaxInSpamIQErrorFeatureNotImplementedMixin").parseIQErrorFeatureNotImplementedMixin(e);
        if (l.success) {
            return o("WAResultOrError").makeResult({
                name: "IQErrorFeatureNotImplemented",
                value: l.value
            });
        }
        return o("WASmaxParseUtils").errorMixinDisjunction(e, [
            "IQErrorInternalServerError",
            "IQErrorBadRequest",
            "IQErrorForbidden",
            "IQErrorRateOverlimit",
            "IQErrorReportTokenValidationFail",
            "IQErrorFeatureNotImplemented"
        ], [
            t,
            n,
            r,
            a,
            i,
            l
        ]);
    }
    l.parseSpamIqErrors = e;
}, 98);