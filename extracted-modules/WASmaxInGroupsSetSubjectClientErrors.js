__d("WASmaxInGroupsSetSubjectClientErrors", [
    "WAResultOrError",
    "WASmaxInGroupsIQErrorBadRequestMixin",
    "WASmaxInGroupsIQErrorFallbackClientMixin",
    "WASmaxInGroupsIQErrorForbiddenMixin",
    "WASmaxInGroupsIQErrorItemNotFoundMixin",
    "WASmaxInGroupsIQErrorLockedMixin",
    "WASmaxInGroupsIQErrorNotAcceptableMixin",
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
        const s = o("WASmaxInGroupsIQErrorRateOverlimitMixin").parseIQErrorRateOverlimitMixin(e);
        if (s.success) {
            return o("WAResultOrError").makeResult({
                name: "IQErrorRateOverlimit",
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
            "IQErrorBadRequest",
            "IQErrorItemNotFound",
            "IQErrorNotAuthorized",
            "IQErrorForbidden",
            "IQErrorNotAcceptable",
            "IQErrorLocked",
            "IQErrorRateOverlimit",
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
    l.parseSetSubjectClientErrors = e;
}, 98);