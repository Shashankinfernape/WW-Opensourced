__d("WASmaxInGroupsSetPropertyClientErrors", [
    "WAResultOrError",
    "WASmaxInGroupsIQErrorBadRequestMixin",
    "WASmaxInGroupsIQErrorFallbackClientMixin",
    "WASmaxInGroupsIQErrorForbiddenMixin",
    "WASmaxInGroupsIQErrorItemNotFoundMixin",
    "WASmaxInGroupsIQErrorLockedMixin",
    "WASmaxInGroupsIQErrorNotAllowedMixin",
    "WASmaxInGroupsIQErrorNotAuthorizedMixin",
    "WASmaxInGroupsIQErrorRateOverlimitMixin",
    "WASmaxInGroupsIQErrorResourceLimitMixin",
    "WASmaxInGroupsIQErrorUpgradeRequiredMixin",
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
        const n = o("WASmaxInGroupsIQErrorNotAuthorizedMixin").parseIQErrorNotAuthorizedMixin(e);
        if (n.success) {
            return o("WAResultOrError").makeResult({
                name: "IQErrorNotAuthorized",
                value: n.value
            });
        }
        const r = o("WASmaxInGroupsIQErrorForbiddenMixin").parseIQErrorForbiddenMixin(e);
        if (r.success) {
            return o("WAResultOrError").makeResult({
                name: "IQErrorForbidden",
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
        const i = o("WASmaxInGroupsIQErrorNotAllowedMixin").parseIQErrorNotAllowedMixin(e);
        if (i.success) {
            return o("WAResultOrError").makeResult({
                name: "IQErrorNotAllowed",
                value: i.value
            });
        }
        const l = o("WASmaxInGroupsIQErrorResourceLimitMixin").parseIQErrorResourceLimitMixin(e);
        if (l.success) {
            return o("WAResultOrError").makeResult({
                name: "IQErrorResourceLimit",
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
        const u = o("WASmaxInGroupsIQErrorRateOverlimitMixin").parseIQErrorRateOverlimitMixin(e);
        if (u.success) {
            return o("WAResultOrError").makeResult({
                name: "IQErrorRateOverlimit",
                value: u.value
            });
        }
        const c = o("WASmaxInGroupsIQErrorUpgradeRequiredMixin").parseIQErrorUpgradeRequiredMixin(e);
        if (c.success) {
            return o("WAResultOrError").makeResult({
                name: "IQErrorUpgradeRequired",
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
            "IQErrorNotAuthorized",
            "IQErrorForbidden",
            "IQErrorItemNotFound",
            "IQErrorNotAllowed",
            "IQErrorResourceLimit",
            "IQErrorLocked",
            "IQErrorRateOverlimit",
            "IQErrorUpgradeRequired",
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
    l.parseSetPropertyClientErrors = e;
}, 98);