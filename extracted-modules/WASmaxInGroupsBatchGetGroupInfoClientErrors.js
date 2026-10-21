__d("WASmaxInGroupsBatchGetGroupInfoClientErrors", [
    "WAResultOrError",
    "WASmaxInGroupsIQErrorBadRequestMixin",
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
        return o("WASmaxParseUtils").errorMixinDisjunction(e, [
            "IQErrorBadRequest",
            "IQErrorRateOverlimit"
        ], [
            t,
            n
        ]);
    }
    l.parseBatchGetGroupInfoClientErrors = e;
}, 98);