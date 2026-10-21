__d("WASmaxInWaffleGetCertificateErrors", [
    "WAResultOrError",
    "WASmaxInWaffleIQErrorBadRequestMixin",
    "WASmaxInWaffleIQErrorFeatureNotImplementedMixin",
    "WASmaxInWaffleIQErrorInternalServerErrorMixin",
    "WASmaxInWaffleIQErrorNotAllowedMixin",
    "WASmaxInWaffleIQErrorRateOverlimitMixin",
    "WASmaxInWaffleIQErrorRequestTimeoutMixin",
    "WASmaxInWaffleIQErrorServiceUnavailableMixin",
    "WASmaxParseUtils"
], function(t, n, r, o, a, i, l) {
    function e(e) {
        const t = o("WASmaxInWaffleIQErrorBadRequestMixin").parseIQErrorBadRequestMixin(e);
        if (t.success) {
            return o("WAResultOrError").makeResult({
                name: "IQErrorBadRequest",
                value: t.value
            });
        }
        const n = o("WASmaxInWaffleIQErrorRequestTimeoutMixin").parseIQErrorRequestTimeoutMixin(e);
        if (n.success) {
            return o("WAResultOrError").makeResult({
                name: "IQErrorRequestTimeout",
                value: n.value
            });
        }
        const r = o("WASmaxInWaffleIQErrorNotAllowedMixin").parseIQErrorNotAllowedMixin(e);
        if (r.success) {
            return o("WAResultOrError").makeResult({
                name: "IQErrorNotAllowed",
                value: r.value
            });
        }
        const a = o("WASmaxInWaffleIQErrorInternalServerErrorMixin").parseIQErrorInternalServerErrorMixin(e);
        if (a.success) {
            return o("WAResultOrError").makeResult({
                name: "IQErrorInternalServerError",
                value: a.value
            });
        }
        const i = o("WASmaxInWaffleIQErrorRateOverlimitMixin").parseIQErrorRateOverlimitMixin(e);
        if (i.success) {
            return o("WAResultOrError").makeResult({
                name: "IQErrorRateOverlimit",
                value: i.value
            });
        }
        const l = o("WASmaxInWaffleIQErrorServiceUnavailableMixin").parseIQErrorServiceUnavailableMixin(e);
        if (l.success) {
            return o("WAResultOrError").makeResult({
                name: "IQErrorServiceUnavailable",
                value: l.value
            });
        }
        const s = o("WASmaxInWaffleIQErrorFeatureNotImplementedMixin").parseIQErrorFeatureNotImplementedMixin(e);
        if (s.success) {
            return o("WAResultOrError").makeResult({
                name: "IQErrorFeatureNotImplemented",
                value: s.value
            });
        }
        return o("WASmaxParseUtils").errorMixinDisjunction(e, [
            "IQErrorBadRequest",
            "IQErrorRequestTimeout",
            "IQErrorNotAllowed",
            "IQErrorInternalServerError",
            "IQErrorRateOverlimit",
            "IQErrorServiceUnavailable",
            "IQErrorFeatureNotImplemented"
        ], [
            t,
            n,
            r,
            a,
            i,
            l,
            s
        ]);
    }
    l.parseGetCertificateErrors = e;
}, 98);