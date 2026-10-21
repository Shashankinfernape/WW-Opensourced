__d("WASmaxInGroupsMembershipRequestsCancellationClientErrors", [
    "WAResultOrError",
    "WASmaxInGroupsIQErrorBadRequestMixin",
    "WASmaxInGroupsIQErrorFallbackClientMixin",
    "WASmaxInGroupsIQErrorItemNotFoundMixin",
    "WASmaxInGroupsIQErrorLockedMixin",
    "WASmaxInGroupsIQErrorRateOverlimitMixin",
    "WASmaxParseUtils"
], function(t, n, r, o, a, i, l) {
    function e(e) {
        const t = o("WASmaxInGroupsIQErrorBadRequestMixin").parseIQErrorBadRequestMixin(e);
        if (t.success) {
            return o("WAResultOrError").makeResult({
                name: "IQErrorBadRequest",
                value: t.value
            });
        }
        const n = o("WASmaxInGroupsIQErrorItemNotFoundMixin").parseIQErrorItemNotFoundMixin(e);
        if (n.success) {
            return o("WAResultOrError").makeResult({
                name: "IQErrorItemNotFound",
                value: n.value
            });
        }
        const r = o("WASmaxInGroupsIQErrorLockedMixin").parseIQErrorLockedMixin(e);
        if (r.success) {
            return o("WAResultOrError").makeResult({
                name: "IQErrorLocked",
                value: r.value
            });
        }
        const a = o("WASmaxInGroupsIQErrorRateOverlimitMixin").parseIQErrorRateOverlimitMixin(e);
        if (a.success) {
            return o("WAResultOrError").makeResult({
                name: "IQErrorRateOverlimit",
                value: a.value
            });
        }
        const i = o("WASmaxInGroupsIQErrorFallbackClientMixin").parseIQErrorFallbackClientMixin(e);
        if (i.success) {
            return o("WAResultOrError").makeResult({
                name: "IQErrorFallbackClient",
                value: i.value
            });
        }
        return o("WASmaxParseUtils").errorMixinDisjunction(e, [
            "IQErrorBadRequest",
            "IQErrorItemNotFound",
            "IQErrorLocked",
            "IQErrorRateOverlimit",
            "IQErrorFallbackClient"
        ], [
            t,
            n,
            r,
            a,
            i
        ]);
    }
    l.parseMembershipRequestsCancellationClientErrors = e;
}, 98);