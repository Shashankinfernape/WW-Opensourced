__d("WASmaxInBlocklistsServerErrors", [
    "WAResultOrError",
    "WASmaxInBlocklistsIQErrorFeatureNotImplementedMixin",
    "WASmaxInBlocklistsIQErrorInternalServerErrorMixin",
    "WASmaxParseUtils"
], function(t, n, r, o, a, i, l) {
    function e(e) {
        const t = o("WASmaxInBlocklistsIQErrorFeatureNotImplementedMixin").parseIQErrorFeatureNotImplementedMixin(e);
        if (t.success) {
            return o("WAResultOrError").makeResult({
                name: "IQErrorFeatureNotImplemented",
                value: t.value
            });
        }
        const n = o("WASmaxInBlocklistsIQErrorInternalServerErrorMixin").parseIQErrorInternalServerErrorMixin(e);
        if (n.success) {
            return o("WAResultOrError").makeResult({
                name: "IQErrorInternalServerError",
                value: n.value
            });
        }
        return o("WASmaxParseUtils").errorMixinDisjunction(e, [
            "IQErrorFeatureNotImplemented",
            "IQErrorInternalServerError"
        ], [
            t,
            n
        ]);
    }
    l.parseServerErrors = e;
}, 98);