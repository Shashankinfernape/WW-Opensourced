__d("WASmaxInAbPropsIQErrorBadRequestOrFeatureNotImplementedMixinGroup", [
    "WAResultOrError",
    "WASmaxInAbPropsIQErrorBadRequestMixin",
    "WASmaxInAbPropsIQErrorFeatureNotImplementedMixin",
    "WASmaxParseUtils"
], function(t, n, r, o, a, i, l) {
    function e(e) {
        const t = o("WASmaxInAbPropsIQErrorBadRequestMixin").parseIQErrorBadRequestMixin(e);
        if (t.success) {
            return o("WAResultOrError").makeResult({
                name: "IQErrorBadRequest",
                value: t.value
            });
        }
        const n = o("WASmaxInAbPropsIQErrorFeatureNotImplementedMixin").parseIQErrorFeatureNotImplementedMixin(e);
        if (n.success) {
            return o("WAResultOrError").makeResult({
                name: "IQErrorFeatureNotImplemented",
                value: n.value
            });
        }
        return o("WASmaxParseUtils").errorMixinDisjunction(e, [
            "IQErrorBadRequest",
            "IQErrorFeatureNotImplemented"
        ], [
            t,
            n
        ]);
    }
    l.parseIQErrorBadRequestOrFeatureNotImplementedMixinGroup = e;
}, 98);