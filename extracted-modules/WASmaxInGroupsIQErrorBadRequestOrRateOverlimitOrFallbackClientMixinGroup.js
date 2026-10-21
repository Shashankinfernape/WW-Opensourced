__d("WASmaxInGroupsIQErrorBadRequestOrRateOverlimitOrFallbackClientMixinGroup", [
    "WAResultOrError",
    "WASmaxInGroupsIQErrorBadRequestMixin",
    "WASmaxInGroupsIQErrorFallbackClientMixin",
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
        const n = o("WASmaxInGroupsIQErrorRateOverlimitMixin").parseIQErrorRateOverlimitMixin(e);
        if (n.success) {
            return o("WAResultOrError").makeResult({
                name: "IQErrorRateOverlimit",
                value: n.value
            });
        }
        const r = o("WASmaxInGroupsIQErrorFallbackClientMixin").parseIQErrorFallbackClientMixin(e);
        if (r.success) {
            return o("WAResultOrError").makeResult({
                name: "IQErrorFallbackClient",
                value: r.value
            });
        }
        return o("WASmaxParseUtils").errorMixinDisjunction(e, [
            "IQErrorBadRequest",
            "IQErrorRateOverlimit",
            "IQErrorFallbackClient"
        ], [
            t,
            n,
            r
        ]);
    }
    l.parseIQErrorBadRequestOrRateOverlimitOrFallbackClientMixinGroup = e;
}, 98);