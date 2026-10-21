__d("WASmaxInGroupsGetReportedMessagesClientErrors", [
    "WAResultOrError",
    "WASmaxInGroupsIQErrorBadRequestMixin",
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
        const n = o("WASmaxInGroupsIQErrorNotAuthorizedMixin").parseIQErrorNotAuthorizedMixin(e);
        if (n.success) {
            return o("WAResultOrError").makeResult({
                name: "IQErrorNotAuthorized",
                value: n.value
            });
        }
        const r = o("WASmaxInGroupsIQErrorItemNotFoundMixin").parseIQErrorItemNotFoundMixin(e);
        if (r.success) {
            return o("WAResultOrError").makeResult({
                name: "IQErrorItemNotFound",
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
        return o("WASmaxParseUtils").errorMixinDisjunction(e, [
            "IQErrorBadRequest",
            "IQErrorNotAuthorized",
            "IQErrorItemNotFound",
            "IQErrorRateOverlimit",
            "IQErrorLocked"
        ], [
            t,
            n,
            r,
            a,
            i
        ]);
    }
    l.parseGetReportedMessagesClientErrors = e;
}, 98);