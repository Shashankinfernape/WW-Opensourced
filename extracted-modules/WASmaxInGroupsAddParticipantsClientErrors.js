__d("WASmaxInGroupsAddParticipantsClientErrors", [
    "WAResultOrError",
    "WASmaxInGroupsCreateOrAddGroupRateLimitErrorMixin",
    "WASmaxInGroupsIQErrorBadRequestMixin",
    "WASmaxInGroupsIQErrorFallbackClientMixin",
    "WASmaxInGroupsIQErrorForbiddenMixin",
    "WASmaxInGroupsIQErrorItemNotFoundMixin",
    "WASmaxInGroupsIQErrorLockedMixin",
    "WASmaxInGroupsIQErrorNotAllowedMixin",
    "WASmaxInGroupsIQErrorNotAuthorizedMixin",
    "WASmaxInGroupsIQErrorParentGroupSuspendedMixin",
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
        const i = o("WASmaxInGroupsCreateOrAddGroupRateLimitErrorMixin").parseCreateOrAddGroupRateLimitErrorMixin(e);
        if (i.success) {
            return o("WAResultOrError").makeResult({
                name: "CreateOrAddGroupRateLimitError",
                value: i.value
            });
        }
        const l = o("WASmaxInGroupsIQErrorRateOverlimitMixin").parseIQErrorRateOverlimitMixin(e);
        if (l.success) {
            return o("WAResultOrError").makeResult({
                name: "IQErrorRateOverlimit",
                value: l.value
            });
        }
        const s = o("WASmaxInGroupsIQErrorNotAllowedMixin").parseIQErrorNotAllowedMixin(e);
        if (s.success) {
            return o("WAResultOrError").makeResult({
                name: "IQErrorNotAllowed",
                value: s.value
            });
        }
        const u = o("WASmaxInGroupsIQErrorLockedMixin").parseIQErrorLockedMixin(e);
        if (u.success) {
            return o("WAResultOrError").makeResult({
                name: "IQErrorLocked",
                value: u.value
            });
        }
        const c = o("WASmaxInGroupsIQErrorParentGroupSuspendedMixin").parseIQErrorParentGroupSuspendedMixin(e);
        if (c.success) {
            return o("WAResultOrError").makeResult({
                name: "IQErrorParentGroupSuspended",
                value: c.value
            });
        }
        const d = o("WASmaxInGroupsIQErrorFallbackClientMixin").parseIQErrorFallbackClientMixin(e);
        if (d.success) {
            return o("WAResultOrError").makeResult({
                name: "IQErrorFallbackClient",
                value: d.value
            });
        }
        return o("WASmaxParseUtils").errorMixinDisjunction(e, [
            "IQErrorBadRequest",
            "IQErrorItemNotFound",
            "IQErrorNotAuthorized",
            "IQErrorForbidden",
            "CreateOrAddGroupRateLimitError",
            "IQErrorRateOverlimit",
            "IQErrorNotAllowed",
            "IQErrorLocked",
            "IQErrorParentGroupSuspended",
            "IQErrorFallbackClient"
        ], [
            t,
            n,
            r,
            a,
            i,
            l,
            s,
            u,
            c,
            d
        ]);
    }
    l.parseAddParticipantsClientErrors = e;
}, 98);