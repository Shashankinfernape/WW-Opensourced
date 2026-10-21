__d("WASmaxInPsaChatBlockError", [
    "WAResultOrError",
    "WASmaxInPsaIQErrorInternalServerErrorMixin",
    "WASmaxInPsaIQErrorRateOverlimitMixin",
    "WASmaxInPsaIQErrorRequestTimeoutMixin",
    "WASmaxInPsaIQErrorServiceUnavailableMixin",
    "WASmaxParseUtils"
], function(t, n, r, o, a, i, l) {
    function e(e) {
        const t = o("WASmaxInPsaIQErrorInternalServerErrorMixin").parseIQErrorInternalServerErrorMixin(e);
        if (t.success) {
            return o("WAResultOrError").makeResult({
                name: "IQErrorInternalServerError",
                value: t.value
            });
        }
        const n = o("WASmaxInPsaIQErrorRequestTimeoutMixin").parseIQErrorRequestTimeoutMixin(e);
        if (n.success) {
            return o("WAResultOrError").makeResult({
                name: "IQErrorRequestTimeout",
                value: n.value
            });
        }
        const r = o("WASmaxInPsaIQErrorServiceUnavailableMixin").parseIQErrorServiceUnavailableMixin(e);
        if (r.success) {
            return o("WAResultOrError").makeResult({
                name: "IQErrorServiceUnavailable",
                value: r.value
            });
        }
        const a = o("WASmaxInPsaIQErrorRateOverlimitMixin").parseIQErrorRateOverlimitMixin(e);
        if (a.success) {
            return o("WAResultOrError").makeResult({
                name: "IQErrorRateOverlimit",
                value: a.value
            });
        }
        return o("WASmaxParseUtils").errorMixinDisjunction(e, [
            "IQErrorInternalServerError",
            "IQErrorRequestTimeout",
            "IQErrorServiceUnavailable",
            "IQErrorRateOverlimit"
        ], [
            t,
            n,
            r,
            a
        ]);
    }
    l.parseChatBlockError = e;
}, 98);