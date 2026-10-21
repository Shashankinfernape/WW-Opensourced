__d("WASmaxInGroupsIQErrorItemNotFoundOrBadRequestOrRateOverlimitOrFallbackClientMixinGroup", [
    "WAResultOrError",
    "WASmaxInGroupsIQErrorBadRequestMixin",
    "WASmaxInGroupsIQErrorFallbackClientMixin",
    "WASmaxInGroupsIQErrorItemNotFoundMixin",
    "WASmaxInGroupsIQErrorRateOverlimitMixin",
    "WASmaxParseUtils"
], function(t, n, r, o, a, i, l) {
    function e(e) {
        const t = o("WASmaxInGroupsIQErrorItemNotFoundMixin").parseIQErrorItemNotFoundMixin(e);
        if (t.success) {
            return o("WAResultOrError").makeResult({
                name: "IQErrorItemNotFound",
                value: t.value
            });
        }
        const n = o("WASmaxInGroupsIQErrorBadRequestMixin").parseIQErrorBadRequestMixin(e);
        if (n.success) {
            return o("WAResultOrError").makeResult({
                name: "IQErrorBadRequest",
                value: n.value
            });
        }
        const r = o("WASmaxInGroupsIQErrorRateOverlimitMixin").parseIQErrorRateOverlimitMixin(e);
        if (r.success) {
            return o("WAResultOrError").makeResult({
                name: "IQErrorRateOverlimit",
                value: r.value
            });
        }
        const a = o("WASmaxInGroupsIQErrorFallbackClientMixin").parseIQErrorFallbackClientMixin(e);
        if (a.success) {
            return o("WAResultOrError").makeResult({
                name: "IQErrorFallbackClient",
                value: a.value
            });
        }
        return o("WASmaxParseUtils").errorMixinDisjunction(e, [
            "IQErrorItemNotFound",
            "IQErrorBadRequest",
            "IQErrorRateOverlimit",
            "IQErrorFallbackClient"
        ], [
            t,
            n,
            r,
            a
        ]);
    }
    l.parseIQErrorItemNotFoundOrBadRequestOrRateOverlimitOrFallbackClientMixinGroup = e;
}, 98);