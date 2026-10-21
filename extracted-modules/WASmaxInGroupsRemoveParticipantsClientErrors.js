__d("WASmaxInGroupsRemoveParticipantsClientErrors", [
    "WAResultOrError",
    "WASmaxInGroupsIQErrorBadRequestMixin",
    "WASmaxInGroupsIQErrorFallbackClientMixin",
    "WASmaxInGroupsIQErrorForbiddenMixin",
    "WASmaxInGroupsIQErrorItemNotFoundMixin",
    "WASmaxInGroupsIQErrorLockedMixin",
    "WASmaxInGroupsIQErrorNotAuthorizedMixin",
    "WASmaxInGroupsIQErrorPayloadTooLargeMixin",
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
        const n = o("WASmaxInGroupsIQErrorPayloadTooLargeMixin").parseIQErrorPayloadTooLargeMixin(e);
        if (n.success) {
            return o("WAResultOrError").makeResult({
                name: "IQErrorPayloadTooLarge",
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
            "IQErrorPayloadTooLarge",
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
    l.parseRemoveParticipantsClientErrors = e;
}, 98);