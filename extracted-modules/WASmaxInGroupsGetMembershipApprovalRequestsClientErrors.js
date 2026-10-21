__d("WASmaxInGroupsGetMembershipApprovalRequestsClientErrors", [
    "WAResultOrError",
    "WASmaxInGroupsIQErrorBadRequestMixin",
    "WASmaxInGroupsIQErrorFallbackClientMixin",
    "WASmaxInGroupsIQErrorForbiddenMixin",
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
        const a = o("WASmaxInGroupsIQErrorForbiddenMixin").parseIQErrorForbiddenMixin(e);
        if (a.success) {
            return o("WAResultOrError").makeResult({
                name: "IQErrorForbidden",
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
        const l = o("WASmaxInGroupsIQErrorLockedMixin").parseIQErrorLockedMixin(e);
        if (l.success) {
            return o("WAResultOrError").makeResult({
                name: "IQErrorLocked",
                value: l.value
            });
        }
        const s = o("WASmaxInGroupsIQErrorFallbackClientMixin").parseIQErrorFallbackClientMixin(e);
        if (s.success) {
            return o("WAResultOrError").makeResult({
                name: "IQErrorFallbackClient",
                value: s.value
            });
        }
        return o("WASmaxParseUtils").errorMixinDisjunction(e, [
            "IQErrorBadRequest",
            "IQErrorItemNotFound",
            "IQErrorNotAuthorized",
            "IQErrorForbidden",
            "IQErrorRateOverlimit",
            "IQErrorLocked",
            "IQErrorFallbackClient"
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
    l.parseGetMembershipApprovalRequestsClientErrors = e;
}, 98);