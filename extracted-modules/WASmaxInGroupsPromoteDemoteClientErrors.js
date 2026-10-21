__d("WASmaxInGroupsPromoteDemoteClientErrors", [
    "WAResultOrError",
    "WASmaxInGroupsIQErrorBadRequestMixin",
    "WASmaxInGroupsIQErrorBlockedIntegrityEnforcementMixin",
    "WASmaxInGroupsIQErrorFallbackClientMixin",
    "WASmaxInGroupsIQErrorForbiddenMixin",
    "WASmaxInGroupsIQErrorItemNotFoundMixin",
    "WASmaxInGroupsIQErrorLockedMixin",
    "WASmaxInGroupsIQErrorNotAuthorizedMixin",
    "WASmaxInGroupsIQErrorRateOverlimitMixin",
    "WASmaxParseUtils"
], function(t, n, r, o, a, i, l) {
    function e(e) {
        const t = o("WASmaxInGroupsIQErrorRateOverlimitMixin").parseIQErrorRateOverlimitMixin(e);
        if (t.success) {
            return o("WAResultOrError").makeResult({
                name: "IQErrorRateOverlimit",
                value: t.value
            });
        }
        const n = o("WASmaxInGroupsIQErrorBlockedIntegrityEnforcementMixin").parseIQErrorBlockedIntegrityEnforcementMixin(e);
        if (n.success) {
            return o("WAResultOrError").makeResult({
                name: "IQErrorBlockedIntegrityEnforcement",
                value: n.value
            });
        }
        const r = o("WASmaxInGroupsIQErrorBadRequestMixin").parseIQErrorBadRequestMixin(e);
        if (r.success) {
            return o("WAResultOrError").makeResult({
                name: "IQErrorBadRequest",
                value: r.value
            });
        }
        const a = o("WASmaxInGroupsIQErrorItemNotFoundMixin").parseIQErrorItemNotFoundMixin(e);
        if (a.success) {
            return o("WAResultOrError").makeResult({
                name: "IQErrorItemNotFound",
                value: a.value
            });
        }
        const i = o("WASmaxInGroupsIQErrorNotAuthorizedMixin").parseIQErrorNotAuthorizedMixin(e);
        if (i.success) {
            return o("WAResultOrError").makeResult({
                name: "IQErrorNotAuthorized",
                value: i.value
            });
        }
        const l = o("WASmaxInGroupsIQErrorForbiddenMixin").parseIQErrorForbiddenMixin(e);
        if (l.success) {
            return o("WAResultOrError").makeResult({
                name: "IQErrorForbidden",
                value: l.value
            });
        }
        const s = o("WASmaxInGroupsIQErrorLockedMixin").parseIQErrorLockedMixin(e);
        if (s.success) {
            return o("WAResultOrError").makeResult({
                name: "IQErrorLocked",
                value: s.value
            });
        }
        const u = o("WASmaxInGroupsIQErrorFallbackClientMixin").parseIQErrorFallbackClientMixin(e);
        if (u.success) {
            return o("WAResultOrError").makeResult({
                name: "IQErrorFallbackClient",
                value: u.value
            });
        }
        return o("WASmaxParseUtils").errorMixinDisjunction(e, [
            "IQErrorRateOverlimit",
            "IQErrorBlockedIntegrityEnforcement",
            "IQErrorBadRequest",
            "IQErrorItemNotFound",
            "IQErrorNotAuthorized",
            "IQErrorForbidden",
            "IQErrorLocked",
            "IQErrorFallbackClient"
        ], [
            t,
            n,
            r,
            a,
            i,
            l,
            s,
            u
        ]);
    }
    l.parsePromoteDemoteClientErrors = e;
}, 98);