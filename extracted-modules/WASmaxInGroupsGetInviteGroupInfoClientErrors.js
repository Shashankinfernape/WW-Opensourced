__d("WASmaxInGroupsGetInviteGroupInfoClientErrors", [
    "WAResultOrError",
    "WASmaxInGroupsIQErrorBadRequestMixin",
    "WASmaxInGroupsIQErrorFallbackClientMixin",
    "WASmaxInGroupsIQErrorGoneMixin",
    "WASmaxInGroupsIQErrorGrowthLockedMixin",
    "WASmaxInGroupsIQErrorItemNotFoundMixin",
    "WASmaxInGroupsIQErrorLockedMixin",
    "WASmaxInGroupsIQErrorNotAcceptableMixin",
    "WASmaxInGroupsIQErrorNotAuthorizedMixin",
    "WASmaxInGroupsIQErrorParentGroupSuspendedMixin",
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
        const r = o("WASmaxInGroupsIQErrorGoneMixin").parseIQErrorGoneMixin(e);
        if (r.success) {
            return o("WAResultOrError").makeResult({
                name: "IQErrorGone",
                value: r.value
            });
        }
        const a = o("WASmaxInGroupsIQErrorNotAuthorizedMixin").parseIQErrorNotAuthorizedMixin(e);
        if (a.success) {
            return o("WAResultOrError").makeResult({
                name: "IQErrorNotAuthorized",
                value: a.value
            });
        }
        const i = o("WASmaxInGroupsIQErrorNotAcceptableMixin").parseIQErrorNotAcceptableMixin(e);
        if (i.success) {
            return o("WAResultOrError").makeResult({
                name: "IQErrorNotAcceptable",
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
        const s = o("WASmaxInGroupsIQErrorGrowthLockedMixin").parseIQErrorGrowthLockedMixin(e);
        if (s.success) {
            return o("WAResultOrError").makeResult({
                name: "IQErrorGrowthLocked",
                value: s.value
            });
        }
        const u = o("WASmaxInGroupsIQErrorParentGroupSuspendedMixin").parseIQErrorParentGroupSuspendedMixin(e);
        if (u.success) {
            return o("WAResultOrError").makeResult({
                name: "IQErrorParentGroupSuspended",
                value: u.value
            });
        }
        const c = o("WASmaxInGroupsIQErrorFallbackClientMixin").parseIQErrorFallbackClientMixin(e);
        if (c.success) {
            return o("WAResultOrError").makeResult({
                name: "IQErrorFallbackClient",
                value: c.value
            });
        }
        return o("WASmaxParseUtils").errorMixinDisjunction(e, [
            "IQErrorBadRequest",
            "IQErrorItemNotFound",
            "IQErrorGone",
            "IQErrorNotAuthorized",
            "IQErrorNotAcceptable",
            "IQErrorLocked",
            "IQErrorGrowthLocked",
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
            c
        ]);
    }
    l.parseGetInviteGroupInfoClientErrors = e;
}, 98);