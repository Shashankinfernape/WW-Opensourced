__d("WASmaxInBlocklistsUpdateBlocklistErrors", [
    "WAResultOrError",
    "WASmaxInBlocklistsIQErrorBadRequestMixin",
    "WASmaxInBlocklistsIQErrorForbiddenMixin",
    "WASmaxInBlocklistsIQErrorNotAcceptableMixin",
    "WASmaxInBlocklistsIQErrorNotAllowedMixin",
    "WASmaxInBlocklistsIQErrorRateOverlimitMixin",
    "WASmaxParseUtils"
], function(t, n, r, o, a, i, l) {
    function e(e) {
        const t = o("WASmaxInBlocklistsIQErrorNotAcceptableMixin").parseIQErrorNotAcceptableMixin(e);
        if (t.success) {
            return o("WAResultOrError").makeResult({
                name: "IQErrorNotAcceptable",
                value: t.value
            });
        }
        const n = o("WASmaxInBlocklistsIQErrorBadRequestMixin").parseIQErrorBadRequestMixin(e);
        if (n.success) {
            return o("WAResultOrError").makeResult({
                name: "IQErrorBadRequest",
                value: n.value
            });
        }
        const r = o("WASmaxInBlocklistsIQErrorForbiddenMixin").parseIQErrorForbiddenMixin(e);
        if (r.success) {
            return o("WAResultOrError").makeResult({
                name: "IQErrorForbidden",
                value: r.value
            });
        }
        const a = o("WASmaxInBlocklistsIQErrorRateOverlimitMixin").parseIQErrorRateOverlimitMixin(e);
        if (a.success) {
            return o("WAResultOrError").makeResult({
                name: "IQErrorRateOverlimit",
                value: a.value
            });
        }
        const i = o("WASmaxInBlocklistsIQErrorNotAllowedMixin").parseIQErrorNotAllowedMixin(e);
        if (i.success) {
            return o("WAResultOrError").makeResult({
                name: "IQErrorNotAllowed",
                value: i.value
            });
        }
        return o("WASmaxParseUtils").errorMixinDisjunction(e, [
            "IQErrorNotAcceptable",
            "IQErrorBadRequest",
            "IQErrorForbidden",
            "IQErrorRateOverlimit",
            "IQErrorNotAllowed"
        ], [
            t,
            n,
            r,
            a,
            i
        ]);
    }
    l.parseUpdateBlocklistErrors = e;
}, 98);