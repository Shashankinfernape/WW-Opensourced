__d("WASmaxInGroupsGetGroupProfilePictureClientErrors", [
    "WAResultOrError",
    "WASmaxInGroupsIQErrorBadRequestMixin",
    "WASmaxInGroupsIQErrorFallbackClientMixin",
    "WASmaxInGroupsIQErrorForbiddenMixin",
    "WASmaxInGroupsIQErrorItemNotFoundMixin",
    "WASmaxInGroupsIQErrorNotAllowedMixin",
    "WASmaxInGroupsIQErrorRateOverlimitMixin",
    "WASmaxParseUtils"
], function(t, n, r, o, a, i, l) {
    function e(e) {
        const t = o("WASmaxInGroupsIQErrorItemNotFoundMixin").parseIQErrorItemNotFoundMixin(e);
        if (t.success) {
            return o("WAResultOrError").makeResult({
                name: "IQErrorItemNotFound",
                value: t.value
            });
        }
        const n = o("WASmaxInGroupsIQErrorForbiddenMixin").parseIQErrorForbiddenMixin(e);
        if (n.success) {
            return o("WAResultOrError").makeResult({
                name: "IQErrorForbidden",
                value: n.value
            });
        }
        const r = o("WASmaxInGroupsIQErrorNotAllowedMixin").parseIQErrorNotAllowedMixin(e);
        if (r.success) {
            return o("WAResultOrError").makeResult({
                name: "IQErrorNotAllowed",
                value: r.value
            });
        }
        const a = o("WASmaxInGroupsIQErrorBadRequestMixin").parseIQErrorBadRequestMixin(e);
        if (a.success) {
            return o("WAResultOrError").makeResult({
                name: "IQErrorBadRequest",
                value: a.value
            });
        }
        const i = o("WASmaxInGroupsIQErrorRateOverlimitMixin").parseIQErrorRateOverlimitMixin(e);
        if (i.success) {
            return o("WAResultOrError").makeResult({
                name: "IQErrorRateOverlimit",
                value: i.value
            });
        }
        const l = o("WASmaxInGroupsIQErrorFallbackClientMixin").parseIQErrorFallbackClientMixin(e);
        if (l.success) {
            return o("WAResultOrError").makeResult({
                name: "IQErrorFallbackClient",
                value: l.value
            });
        }
        return o("WASmaxParseUtils").errorMixinDisjunction(e, [
            "IQErrorItemNotFound",
            "IQErrorForbidden",
            "IQErrorNotAllowed",
            "IQErrorBadRequest",
            "IQErrorRateOverlimit",
            "IQErrorFallbackClient"
        ], [
            t,
            n,
            r,
            a,
            i,
            l
        ]);
    }
    l.parseGetGroupProfilePictureClientErrors = e;
}, 98);