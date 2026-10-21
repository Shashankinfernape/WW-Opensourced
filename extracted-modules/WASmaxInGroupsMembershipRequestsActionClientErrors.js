__d("WASmaxInGroupsMembershipRequestsActionClientErrors", [
    "WAResultOrError",
    "WASmaxInGroupsIQErrorBadRequestMixin",
    "WASmaxInGroupsIQErrorFallbackClientMixin",
    "WASmaxInGroupsIQErrorItemNotFoundMixin",
    "WASmaxInGroupsIQErrorLockedMixin",
    "WASmaxInGroupsIQErrorNotAuthorizedMixin",
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
        const r = o("WASmaxInGroupsIQErrorNotAuthorizedMixin").parseIQErrorNotAuthorizedMixin(e);
        if (r.success) {
            return o("WAResultOrError").makeResult({
                name: "IQErrorNotAuthorized",
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
        const i = o("WASmaxInGroupsIQErrorLockedMixin").parseIQErrorLockedMixin(e);
        if (i.success) {
            return o("WAResultOrError").makeResult({
                name: "IQErrorLocked",
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
            "IQErrorBadRequest",
            "IQErrorItemNotFound",
            "IQErrorNotAuthorized",
            "IQErrorRateOverlimit",
            "IQErrorLocked",
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
    l.parseMembershipRequestsActionClientErrors = e;
}, 98);